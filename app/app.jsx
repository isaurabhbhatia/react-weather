var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Examples = require('Examples');
var Weather = require('Weather');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='about' component={About}/>
        <Route path='examples' component={Examples}/>
        <IndexRoute component={Weather}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
