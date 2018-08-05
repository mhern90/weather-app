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
      weather: '',
      hourlyForcast: [],
      modalShow : false
    }
  }

  componentDidMount() {
    helpers.testHelpers();
  }

  showModal = () => {
    this.setState({modalShow: true})
  }

  hideModal = () => {
    this.setState({ modalShow: false })
  }

  // To do - add container with loop
  render() {
    return (
      <div id="weatherApp" className="avenir bg-white cf pa4">
        <div className="container-1200 center bg-near-white cf pa4 pb6 ba b--black-10 shadow-4">
          <h1 className="normal tc f1 mid-gray pb5">Weekly Weather Forcast</h1>
          <div className="weather-week-container">
            <WeatherCard 
              showModal={this.showModal.bind(this)} 
              icon="sunny" 
            />
            <WeatherCard 
              showModal={this.showModal.bind(this)} 
              icon="cloudy" 
            />
            <WeatherCard 
              showModal={this.showModal.bind(this)} 
              icon="rain" 
            />
            <WeatherCard 
              showModal={this.showModal.bind(this)} 
              icon="sunny" 
            />
            <WeatherCard 
              showModal={this.showModal.bind(this)} 
              icon="cloudy" 
            />
          </div>
        </div>
        <HourlyForecastModal hideModal={this.hideModal.bind(this)} show={this.state.modalShow} />
      </div>
    )
  }
}
