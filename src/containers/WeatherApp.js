import React, { Component } from 'react';
import '../css/weatherApp.css';
import '../css/util.css';
import './weather-icons.min.css';
import WeatherCard from '../components/WeatherCard';

export default class WeatherApp extends Component {
  constructor() {
    super()
    this.state = {
      weather: '',
      hourlyForcast: []
    }
  }

  // To do - add container with loop
  render() {
    return (
      <div id="weatherApp" className="avenir bg-white cf pa4">
        <div class="container-1200 center bg-near-white cf pa4 pb6 ba b--black-10 shadow-4">
          <h1 class="normal tc f1 mid-gray">Weekly Weather Forcast</h1>
          <div className="weather-week-container">
            <WeatherCard icon="sunny" />
            <WeatherCard icon="cloudy" />
            <WeatherCard icon="rain" />
            <WeatherCard icon="sunny" />
            <WeatherCard icon="cloudy" />
          </div>
        </div>
      </div>
    )
  }
}
