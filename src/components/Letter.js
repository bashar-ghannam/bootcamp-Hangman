import React, { Component } from 'react';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
    };
  }

  setLetterClass = () => {
    if (this.props.solution === false) {
      this.props.selectLetter(this.props.letter);
      let className = 'selected';
      this.setState({ className: className });
    }
  };

  render() {
    return (
      <span onClick={this.setLetterClass} className={this.state.className}>
        {this.props.solution
          ? this.props.letterStatus[this.props.letter]
            ? this.props.letter
            : ' _ '
          : this.props.letter}
      </span>
    );
  }
}

export default Letter;
