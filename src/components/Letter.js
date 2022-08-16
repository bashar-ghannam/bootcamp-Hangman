import React, { Component } from 'react';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: props.char,
      IsSelected: false,
      changeScore: props.changeScore,
    };
  }

  changeState = () => {
    this.setState({ IsSelected: true });
    this.state.changeScore(this.state.char);
  };

  render() {
    return (
      <span
        onClick={this.changeState}
        className={this.state.IsSelected ? 'active' : ''}
      >
        {this.state.char}
      </span>
    );
  }
}

export default Letter;
