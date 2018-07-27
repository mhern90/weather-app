import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './containers/WeatherApp';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));
registerServiceWorker();
