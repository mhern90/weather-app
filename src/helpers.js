export const numToDay = (num) => {
    const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return dayMap[num];
} 

export const configureWeatherData = (data) => {
    let weatherObject = {};
    const daysList = data.list;
    const weekStart = new Date(daysList[0].dt_txt).toLocaleString('en-En', { weekday: "long", month: "long", day: "numeric" });
    const weekEnd = new Date(daysList[daysList.length - 1].dt_txt).toLocaleString('en-En', { weekday: "long", month: "long", day: "numeric" });
    weatherObject.city = data.city.name;
    weatherObject.forecast = [];
    weatherObject.weekStart = weekStart;
    weatherObject.weekEnd = weekEnd;
    const fiveDays = [];
    fiveDays.push(data.list[0]);
    for (var i = 8; i < data.list.length; i+=8) {
        fiveDays.push(data.list[i]);
    }
    
    data.list.slice(0, 5);
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