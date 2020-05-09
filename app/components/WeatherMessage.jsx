var React = require('react');

var WeatherMessage = ({data}) => {
  var {temp, location} = data;
  return (
    <div>
      <h3>It is {temp} F in {location}.</h3>
    </div>
  )
}

module.exports = WeatherMessage;
