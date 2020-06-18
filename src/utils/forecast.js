const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=95e65efd7b17b084a03b49a6a5b3a587&query=${latitude},${longitude}&units=f`;


    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather server', undefined);
        } else if (body.message) {

            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. it feels like ${body.current.feelslike} degrees out.`);
        }
    })
}

module.exports = forecast
