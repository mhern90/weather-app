import React from 'react';

const setIconClass = (icon) => {
  switch (icon) {
    case 'sunny':
      return 'wi wi-day-sunny yellow';
    case 'cloudy':
      return 'wi wi-day-cloudy light-silver';
    case 'rain':
      return 'wi wi-day-rain light-blue';
    default:
      return '';
  }
}

// destructuring - grabbing the props.icon as {icon}
// icon will eventually become an object
const WeatherCard = ({icon}) => {
    return (
      <div className="weather-card fl w-20 pa2">
        <div class="pa4 br2 bg-light-gray tc ba b--black-10">
          <i className={setIconClass(icon) + " text-60"}></i>
          <h2 className="temp f2 fw2">70&#176;</h2>
        </div>
      </div>
    )
}

export default WeatherCard;