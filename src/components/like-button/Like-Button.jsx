var React = require('react');

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <button onClick={() => this.setState({ liked: false })}>You liked this</button>
    }

    return <button onClick={() => this.setState({ liked: true })}>Like here</button>
  }
}

module.exports = LikeButton;
