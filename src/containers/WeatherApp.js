import React, { Component } from 'react';
import '../css/weatherApp.css';
import '../css/util.css';
import './weather-icons.min.css';
import WeatherCard from '../components/WeatherCard';
import SearchBox from '../components/SearchBox';
import HourlyForecastModal from '../components/HourlyForecastModal';
import * as helpers from '../helpers';

export default class WeatherApp extends Component {
  constructor() {
    super()
    this.state = {
      location: 'Chicago',
      weather: {},
      hourly : [],
      modalShow : false,
      selectedDay : 'Mon'
    }

  }

  componentDidMount() {
    const cachedDate = localStorage.getItem("currentDate");
    if (cachedDate != null) {
      let today = new Date();
        today = today.toLocaleDateString();
      if (today === cachedDate) {
        const rawWeatherData = JSON.parse(localStorage.getItem('rawWeatherData'));
        const weatherObject = helpers.configureWeatherData(rawWeatherData);
        const hourlyForecast = helpers.configureHourly(rawWeatherData);

        this.setState({ hourly: hourlyForecast });
        this.setState({ weather: weatherObject });
        this.setState({ selectedDay: hourlyForecast[0].day});
      } else {
        this.retreiveWeatherData(false);
      }
    } else {
      this.retreiveWeatherData(false);
    }
  }

  retreiveWeatherData = (isSearching) => {
    helpers.dateCache(); // cache current date
    const location = this.state.location;
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+location+ ',us&units=imperial&APPID=d3fb98537841935db142bb370fd3e1c2')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // return simple weather object
        if (data.cod === '404') {
          helpers.handleError(document.getElementById('citySearch'), 'Invalid City Name')
        } else {
          if (isSearching) {
            document.getElementById('citySearch').value = '';
          }
          localStorage.setItem("rawWeatherData", JSON.stringify(data));
          const weatherObject = helpers.configureWeatherData(data);
          const hourlyForecast = helpers.configureHourly(data);
          this.setState({ hourly: hourlyForecast });
          this.setState({ weather: weatherObject });
          this.setState({ selectedDay: hourlyForecast[0].day });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCardClick(selected) {
    this.getSelectedDay(selected)
    this.showModal()
  }

  showModal = () => {
    this.setState({modalShow: true})
  }

  hideModal = () => {
    this.setState({ modalShow: false })
  }

  getSelectedDay(day) {
    this.setState({ selectedDay : day})
  }

  onSearchChange(e) {
    const input = e.target;
    helpers.removeError(input);
  }

  handleSearch() {
    const searchVal = document.getElementById('citySearch').value;
    this.setState({ 
      location : searchVal,
    }, () => {
        this.retreiveWeatherData(true);    
    });
   
  }

  render() {
    const { weather } = this.state;

    if (!weather.hasOwnProperty('forecast')) {
      return <h1>Loading...</h1>
    } else {
      const forecast = weather.forecast;
      return (
          <div id="weatherApp" className="avenir bg-white cf pa4">
            <div className="container-1200 center bg-near-white cf pa4 pb6 ba b--black-10 shadow-4">
              <h1 className="normal tc f1-ns f3 mid-gray pb1 ma0">Weekly Weather Forcast</h1>
              <h2 className="normal tc f2-ns f4 black pb3 ma0">{weather.city}</h2>
              <SearchBox 
                searchId={"citySearch"}
                clickEvents={this.handleSearch.bind(this)} 
                hasError={true}
                inputChangeEvents={this.onSearchChange.bind(this)}
              />
              <p className="normal tc f3-ns f4 black pb5">{weather.weekStart} - {weather.weekEnd}</p>
              <div className="weather-week-container">
                {
                  forecast.map((day, i) => {
                    return (
                      <WeatherCard
                        clickEvents={this.onCardClick.bind(this, forecast[i].day)} 
                        day={forecast[i].day}
                        temp={forecast[i].temp}
                        icon={forecast[i].condition}
                      />
                    )
                  })
                }
              </div>
            </div>
            <HourlyForecastModal 
              hideModal={this.hideModal.bind(this)}
              show={this.state.modalShow} 
              hourly={this.state.hourly}
              selectedDay={this.state.selectedDay}
            />
          </div>
        );
    }
  }
}
