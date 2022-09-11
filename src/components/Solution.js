import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
  render() {
    return (
      <div>
        {this.props.solution.word.split('').map((letter, index) => (
          <Letter
            key={index}
            letter={letter}
            letterStatus={this.props.letterStatus}
            solution={true}
          />
        ))}
        <div>
          <em>Hint : {this.props.solution.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
