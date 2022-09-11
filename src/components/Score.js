import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div
        className={
          this.props.score >= 80
            ? 'high-score'
            : this.props.score < 80 && this.props.score >= 50
            ? 'medium-score'
            : 'low-score'
        }
      >
        {this.props.score}
      </div>
    );
  }
}

export default Score;
