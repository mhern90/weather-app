export const getWeatherData = () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=0b2927d00672fe1df326acbc6e5e28c3')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.error('Error retreiving data.'));
}

export const testHelpers = () => {
    console.log("this js is working!!")
}