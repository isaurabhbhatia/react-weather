var React = require('react');

var WeatherMessage = React.createClass({
  render: function (){
    var {temp, location} = this.props.data;
    return (
      <div>
        <h3>It is {temp} in {location}.</h3>
      </div>
    )
  }
});

module.exports = WeatherMessage;
