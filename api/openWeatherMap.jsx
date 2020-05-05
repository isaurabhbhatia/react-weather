var axios = require('axios');

const OPEN_WEATHER_MAP_API = 'http://api.openweathermap.org/data/2.5/weather?appid=d658316794af90f7c46a4c9ac84f10e2&units=imperial';

module.exports ={
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_API}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, function (response) {
      throw new Error(res.data.message);
    });
  }
};
