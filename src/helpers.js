/* data formatting */

export const numToDay = (num) => {
    const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return dayMap[num];
} 

export const timeStrFormatter = (time) => {
    let newTime = '',
        hour = 0;

    if (time.startsWith('00')) {
        return '12:00 am';
    } else if (time.startsWith('0')) {
        hour = parseInt(time.substring(1, time.indexOf(':')));
    }  else {
        hour = parseInt(time.substring(0, time.indexOf(':')));
    }

    if (hour >= 12) {
        newTime = hour === 12 ? hour + ':00 pm' : (hour - 12) + ':00 pm';
    } else {
        newTime = hour + ':00 am';
    }

    return newTime;
}

export const configureWeatherData = (data) => {
    const daysList = data.list;

    let weatherObject = {},
        weekStartRaw = daysList[0].dt_txt,
        weekStartTime = weekStartRaw.split(' ')[1],
        weekEndRaw = '';

    for (var i = daysList.length - 1; i >= 0; i--) {
        const weekEndTime = daysList[i].dt_txt.split(' ')[1];
        if (weekEndTime === weekStartTime) {
            weekEndRaw = daysList[i].dt_txt;
            break;
        }
    }
    

    const weekStart = new Date(weekStartRaw).toLocaleString('en-En', { weekday: "long", month: "long", day: "numeric" });
    const weekEnd = new Date(weekEndRaw).toLocaleString('en-En', { weekday: "long", month: "long", day: "numeric" });
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

export const dateCache = () => {
    let today = new Date(); 
    today = today.toLocaleDateString();

    localStorage.setItem("currentDate", today);
}

export const configureHourly = (data) => {
    let weatherData = data.list,
        arrLen = weatherData.length,
        weeklyData = [],
        prevDay = '',
        currentDay = {};

    weatherData.forEach((element, index) => {
        let day = new Date(element.dt_txt).getDay();
        weatherData[index].day = numToDay(day);
        weatherData[index].time = timeStrFormatter(element.dt_txt.split(' ')[1]);
    });

    weatherData.forEach((element, i) => {
        // initialize
        if (prevDay === '') {
            prevDay = element.day;
            currentDay.day = element.day;
            currentDay.hours = [];
            currentDay.degrees = [];
        }

        if (prevDay !== element.day || i === (arrLen - 1)) {
            prevDay = element.day;
            weeklyData.push(currentDay);
            currentDay = {};
            currentDay.day = element.day;
            currentDay.hours = [];
            currentDay.degrees = [];
        }

        currentDay.hours.push(element.time);
        currentDay.degrees.push(Math.round(element.main.temp));
    });

    console.log(weeklyData);
    return weeklyData;
}

/* Error Handling */

export const handleError = (input, message) => {
    const inputId = input.id,
        errorBox = document.querySelector('.error-message[data-error=' + inputId+']');

    input.classList.remove('bn');
    input.classList.add('b--dark-red');
    errorBox.textContent = message;
}

export const removeError = (input) => {
    const inputId = input.id,
        errorBox = document.querySelector('.error-message[data-error=' + inputId + ']');

    input.classList.add('bn');
    input.classList.remove('b--dark-red');
    errorBox.textContent = '';
}