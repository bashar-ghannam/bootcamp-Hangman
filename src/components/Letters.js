import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
      changeScore: props.changeScore,
    };
  }
  render() {
    return (
      <div>
        <div>Available Letters :</div>
        <div className="letters">
          {this.state.alphabet.map((e) => (
            <Letter key={e} char={e} changeScore={this.state.changeScore} />
          ))}
        </div>
      </div>
    );
  }
}

export default Letters;
