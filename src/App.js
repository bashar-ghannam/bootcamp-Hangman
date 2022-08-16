import { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';

class App extends Component {
  constructor(props) {
    super(props);
    const selectedElement = this.getData();
    this.state = {
      finish: false,
      isWin: false,
      score: 100,
      hint: selectedElement[0].hint,
      correctWord: selectedElement[0].correctWord,
      solution: new Array(selectedElement[1]).fill('_ '),
    };
  }

  getData() {
    const hangmanData = [
      { hint: 'test hint', correctWord: 'TEST' },
      { hint: 'your ideal mood when coding', correctWord: 'CALM' },
      { hint: 'number', correctWord: 'FOUR' },
      { hint: 'animal', correctWord: 'SHEEP' },
      { hint: 'job', correctWord: 'TEACHER' },
      { hint: 'body', correctWord: 'EYES' },
      { hint: 'body', correctWord: 'LEG' },
    ];
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNum = getRandomInt(7);
    const correctWordLength = hangmanData[randomNum].correctWord.length;
    return [hangmanData[randomNum], correctWordLength];
  }

  changeScore = (char) => {
    let newScore = this.state.score;
    if (this.state.correctWord.includes(char)) {
      if (this.state.score !== 100) {
        newScore += 5;
      }
      let i = 0;
      let newSolution = [];
      for (const c of this.state.correctWord) {
        if (c === char) {
          newSolution[i] = char;
          this.setState({ count: this.state.count - 1 });
        } else if (this.state.solution[i] === '_ ') {
          newSolution[i] = '_ ';
        } else {
          newSolution[i] = this.state.solution[i];
        }
        i++;
      }
      let count = 0;
      for (const solution of newSolution) {
        if (solution !== '_ ') count++;
      }
      if (count === newSolution.length) {
        this.setState({ finish: true });
        this.setState({ isWin: true });
      }
      this.setState({ solution: newSolution });
    } else {
      newScore -= 20;
    }
    if (newScore <= 0) {
      this.setState({ finish: true });
      this.setState({ isWin: false });
    }
    this.setState({ score: newScore });
  };

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return this.state.finish ? (
      <div>
        {this.state.isWin ? (
          <p>Congratulations!</p>
        ) : (
          <p>Alas, the word was {this.state.correctWord}</p>
        )}
        <button onClick={this.refreshPage}>Restart</button>
      </div>
    ) : (
      <div className="App">
        <Score score={this.state.score} />
        <Solution solution={this.state.solution} hint={this.state.hint} />
        <Letters changeScore={this.changeScore} />
      </div>
    );
  }
}

export default App;
