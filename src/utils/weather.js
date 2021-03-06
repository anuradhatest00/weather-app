const axios = require('axios');

const getWeather = (lat,lon)=>{
    return new Promise((resolve,reject)=>{

        const url= 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily,minutely&units=metric&appid=f4a980374b92fa632f785fdfa99b1583';

                axios.get(url)
                .then(function (response) {
                    // handle success
                    resolve({weather:'Currently '+response.data.current.weather[0].description+' and temparature '+response.data.current.temp+'C'});
                   // console.log("Currently "+response.data.current.weather[0].description+" and temparature "+response.data.current.temp+"C");
                })
                .catch(function (error) {
                    // handle error
                    reject({error:'Unable to find the location, Please try anther location'});
                    //console.log('Unable to find the location, Please try anther location');
                    //console.log(error)
                });
    });

}

module.exports = getWeather


