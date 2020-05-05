var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      temp: 23,
      location: 'Mexico City'
    }
  },
  handleSearch: function (location) {
    var that = this;
    openWeatherMap.getTemp(location=location).then(function (temp) {
      that.setState({
        temp: temp,
        location: location
      });
    }, function (errorMessage) {
      alert(errorMessage);
    })
  },
  render: function () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage data={this.state}/>
      </div>
    )
  }
});

module.exports = Weather;
