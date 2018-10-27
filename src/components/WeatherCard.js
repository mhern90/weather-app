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
const WeatherCard = ({clickEvents, icon, temp, day}) => {
    return (
      <div onClick={clickEvents} className="weather-card fl w-20 pa2">
        <div className="pa4 br2 bg-light-gray tc ba b--black-10">
          <div className="pt4">
            <i className={setIconClass(icon) + " text-60"}></i>
          </div>
          <h2 className="temp f2 fw4 ma0 pt4">{day}</h2>
          <h3 className="temp f2 fw2 ma0">{temp}&#176;</h3>
        </div>
      </div>
    )
}

export default WeatherCard;