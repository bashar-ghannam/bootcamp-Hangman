import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available Letters :</div>
        <div className="letters">
          {Object.keys(this.props.letterStatus).map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              solution={false}
              letterStatus={this.props.letterStatus}
              selectLetter={this.props.selectLetter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Letters;
