import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Score from './Score'

class App extends Component {
  state = {
    totalAnswers: 0,
    correctAnswers: 0
  };

  updateMarks = (isCorrect) => {
    let correct = isCorrect ? 1 : 0
    
    this.setState((current) => ({
      correctAnswers: current.correctAnswers + correct,
      totalAnswers: current.totalAnswers + 1
    }))
  };
  
  render() {
    return (
      <div className="App">
        <h1> Math Quiz </h1>
        <h3> Is this True or False? </h3>
        <Game updateMarks={this.updateMarks} />
        <Score correctAnswers={this.state.correctAnswers} totalAnswers={this.state.totalAnswers} />
      </div>
    )
  }
}

export default App;
