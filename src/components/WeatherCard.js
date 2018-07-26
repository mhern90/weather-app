import React, { Component } from 'react';

const WeatherCard = ({ icon }) => {
    let iconClass = '';
    switch (icon) {
      case 'sunny':
        iconClass = 'wi wi-day-sunny';
        break;
      case 'cloudy':
        iconClass = 'wi wi-day-cloudy';
        break;
      case 'rain':
        iconClass = 'wi wi-day-rain';
        break;
    }

    return (
      <div className="weather-card bgr-light-gray border border-rounded">
            <i class={iconClass}></i>
      </div>
    )
}

export default WeatherCard
