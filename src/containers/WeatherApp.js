import React, { Component } from 'react';
import '../css/weatherApp.css';
import '../css/util.css';
import './weather-icons.min.css';
import WeatherCard from '../components/WeatherCard';
import HourlyForecastModal from '../components/HourlyForecastModal';
import * as helpers from '../helpers';

export default class WeatherApp extends Component {
  constructor() {
    super()
    this.state = {
      weather: {},
      hourly : [],
      modalShow : false
    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=4887398&units=imperial&APPID=d3fb98537841935db142bb370fd3e1c2')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // return simple weather object
        const weatherObject = helpers.configureWeatherData(data);   
        console.log(weatherObject);
        this.setState({ weather: weatherObject });
      })
      .catch(error => console.error('Error retreiving data.'));
    
  }

  showModal = () => {
    this.setState({modalShow: true})
  }

  hideModal = () => {
    this.setState({ modalShow: false })
  }

  // To do - add container with loop
  render() {
    const { weather } = this.state;

    if (!weather.hasOwnProperty('forecast')) {
      return <h1>Loading...</h1>
    } else {
      const forecast = weather.forecast;
      return (
          <div id="weatherApp" className="avenir bg-white cf pa4">
            <div className="container-1200 center bg-near-white cf pa4 pb6 ba b--black-10 shadow-4">
              <h1 className="normal tc f1 mid-gray pb1 ma0">Weekly Weather Forcast</h1>
              <h2 className="normal tc f2 black pb3 ma0">{weather.city}</h2>
              <p className="normal tc f3 black pb5">{weather.weekStart} - {weather.weekEnd}</p>
              <div className="weather-week-container">
                {
                  forecast.map((day, i) => {
                    return (
                      <WeatherCard
                        showModal={this.showModal.bind(this)}
                        day={forecast[i].day}
                        temp={forecast[i].temp}
                        icon={forecast[i].condition}
                      />
                    )
                  })
                }
              </div>
            </div>
            <HourlyForecastModal hideModal={this.hideModal.bind(this)} show={this.state.modalShow} />
          </div>
        );
    }
  }
}
