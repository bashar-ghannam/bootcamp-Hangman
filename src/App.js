import { Component } from 'react';
import './App.css';
import EndGame from './components/EndGame';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 100,
      gameFinish: null,
      solution: this.getGuess(),
      letterStatus: this.generateLetterStatuses(),
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  selectLetter = (letter) => {
    let score = this.state.score;
    if (this.state.solution.word.includes(letter)) {
      score += 5;
    } else if (!['I', 'O', 'U', 'A', 'E  '].includes(letter)) {
      score -= 20;
    }
    this.setState({ score });
    let currentLetterStatus = this.state.letterStatus;
    currentLetterStatus[letter] = true;
    this.setState({ letterStatus: currentLetterStatus });
    this.checkGameState(score, currentLetterStatus);
  };

  checkGameState = (score, currentLetterStatus) => {
    if (score <= 0) {
      this.setState({ gameFinish: false });
    } else {
      let gameSolution = this.state.solution.word;
      let count = 0;
      for (const letter of gameSolution) {
        if (currentLetterStatus[letter] === true) {
          count++;
        }
      }
      if (gameSolution.length === count) {
        this.setState({ gameFinish: true });
      }
    }
  };

  restartGame = () => {
    this.setState({
      score: 100,
      gameFinish: null,
      solution: this.getGuess(),
      letterStatus: this.generateLetterStatuses(),
    });
  };

  getGuess() {
    let guesses = [
      {
        word: 'SNAKE',
        hint: 'animal',
      },
      {
        word: 'AUSTRALIA',
        hint: 'country',
      },
      {
        word: 'TREE',
        hint: 'nature',
      },
      {
        word: 'EARS',
        hint: 'body',
      },
      {
        word: 'THREE',
        hint: 'number',
      },
      {
        word: 'KEYBOARD',
        hint: 'device',
      },
      {
        word: 'CLOUDS',
        hint: 'nature',
      },
      {
        word: 'TIGER',
        hint: 'animal',
      },
      {
        word: 'FRANCE',
        hint: 'country',
      },
      {
        word: 'NINE',
        hint: 'number',
      },
      {
        word: 'PURPLE',
        hint: 'color',
      },
      {
        word: 'PHONE',
        hint: 'device',
      },
      {
        word: 'NOSE',
        hint: 'body',
      },
      {
        word: 'YELLOW',
        hint: 'color',
      },
      {
        word: 'MEXICO',
        hint: 'country',
      },
      {
        word: 'FLOWER',
        hint: 'nature',
      },
      {
        word: 'CAT',
        hint: 'animal',
      },
      {
        word: 'FOUR',
        hint: 'number',
      },
      {
        word: 'LAPTOP',
        hint: 'device',
      },
      {
        word: 'GREY',
        hint: 'color',
      },
    ];
    return guesses[Math.floor(Math.random() * 20)];
  }

  render() {
    this.getGuess();
    return (
      <div className="App">
        {this.state.gameFinish === null ? (
          <div>
            <Score score={this.state.score} />
            <Solution
              letterStatus={this.state.letterStatus}
              solution={this.state.solution}
            />
            <Letters
              letterStatus={this.state.letterStatus}
              selectLetter={this.selectLetter}
            />
          </div>
        ) : (
          <EndGame
            gameFinish={this.state.gameFinish}
            solution={this.state.solution.word}
            restartGame={this.restartGame}
          />
        )}
      </div>
    );
  }
}

export default App;
