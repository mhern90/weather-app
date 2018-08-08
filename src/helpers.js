export const numToDay = (num) => {
    const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return dayMap[num];
} 

export const configureWeatherData = (data) => {
    let weatherObject = {};
    weatherObject.city = data.city.name;
    weatherObject.forecast = [];

    const fiveDays = data.list.slice(0, 5);
    fiveDays.forEach(day => {
        let dayInfo = {};
        dayInfo.temp = Math.round(day.main.temp);
        dayInfo.condition = day.weather[0].main.toLowerCase();

        let date = new Date(day.dt_txt);
        dayInfo.day = numToDay(date.getDay());
        weatherObject.forecast.push(dayInfo);
    });
    return weatherObject;
}

export const testHelpers = () => {
    console.log("this js is working!!")
}