import React, { Component } from 'react';

class EndGame extends Component {
  render() {
    return (
      <div>
        {this.props.gameFinish === true ? (
          <p>Congratulations!</p>
        ) : (
          <p>Alas, the word was {this.props.solution}</p>
        )}
        <button onClick={this.props.restartGame}>Restart</button>
      </div>
    );
  }
}

export default EndGame;
