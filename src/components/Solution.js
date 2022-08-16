import React, { Component } from 'react';

class Solution extends Component {
  render() {
    return (
      <div>
        {this.props.solution.map((e, index) => (
          <span key={index}>{e}</span>
        ))}
        <div>
          <em>Hint : {this.props.hint}</em>
        </div>
      </div>
    );
  }
}

export default Solution;
