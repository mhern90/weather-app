import React, { Component } from 'react';
import '../css/weatherApp.css';
import '../css/util.css';
import './weather-icons.min.css';
import WeatherCard from '../components/WeatherCard';


export default class WeatherApp extends Component {
  render() {
    return (
      <div id="weatherApp">
        <h1>Weather App</h1>
        <div className="weather-week-container">
          <WeatherCard icon="sunny" />
          <WeatherCard icon="cloudy" />
          <WeatherCard icon="rain" />
        </div>
      </div>
    )
  }
}
