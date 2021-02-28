
var React = require('react');
var ReactDOM = require('react-dom');
var LikeButton = require('./components/like-button/Like-Button');

const domContainer = document.querySelector('#demo-container');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);