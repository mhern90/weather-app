import React from 'react';

const setIconClass = (icon) => {
  switch (icon) {
    case 'clear':
      return 'wi wi-day-sunny yellow';
    case 'clouds':
      return 'wi wi-day-cloudy light-silver';
    case 'rain':
      return 'wi wi-day-rain light-blue';
    default:
      return '';
  }
}

// destructuring - grabbing the props.icon as {icon}
// icon will eventually become an object
const WeatherCard = ({icon, temp, day, showModal}) => {
    return (
      <div onClick={showModal} className="weather-card fl w-20 pa2">
        <div className="pa4 br2 bg-light-gray tc ba b--black-10">
          <h2 className="temp f2">{day}</h2>
          <i className={setIconClass(icon) + " text-60"}></i>
          <h2 className="temp f2 fw2">{temp}&#176;</h2>
        </div>
      </div>
    )
}

export default WeatherCard;