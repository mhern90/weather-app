import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './containers/WeatherApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));
registerServiceWorker();
