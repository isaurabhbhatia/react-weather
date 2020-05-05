var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    that.setState({isLoading: true});
    openWeatherMap.getTemp(location=location).then(function (temp) {
      that.setState({
        temp: temp,
        location: location,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    })
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    var renderMessage = function () {
        if (isLoading) {
            return (<h3>Fetching Weather...</h3>);
        } else if (temp && location) {
          return (
            <WeatherMessage data={{'temp': temp, 'location': location}}/>
          );
        }
    };

    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
