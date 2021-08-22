const axios = require('axios');

const getGeo =(location)=>{
    return new Promise((resolve,reject)=>{
        const url ='http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=b7cb13d2527e9d7da66a5337e96e3b8b';

        axios.get(url)
          .then(function (response) {
            // handle success
            resolve({
                name:response.data[0].name,
                lat:response.data[0].lat,
                lon:response.data[0].lon
            });
            //console.log(response.data[0].name+ " is in  "+response.data[0].lat+" "+response.data[0].lon);
          })
          .catch(function (error) {
            // handle error
            //console.log("Unable to find the location, Please try anther location");
            reject({error:'Unable to find the location'})
           // console.log("Unable to find the location")
          });
    });
}

module.exports = getGeo



