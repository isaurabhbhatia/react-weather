var React = require('react');

var WeatherForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length) {
        this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='location'/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
