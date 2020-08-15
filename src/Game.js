import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {

    super(props)

    let [value1, value2, value3, processedTotal] = this.generateValues()
    this.state = {
      value1: value1,
      value2: value2,
      value3: value3,
      processedTotal: processedTotal 
    }
  }
  
  updateState = () => {
    let [value1, value2, value3, processedTotal] = this.generateValues()
    this.setState((current) => ({
      value1: value1,
      value2: value2,
      value3: value3,
      processedTotal: processedTotal
    }))
  }

  generateValues = () => {
    let value1 = Math.floor(Math.random() * 100)
    let value2 = Math.floor(Math.random() * 100)
    let value3 = Math.floor(Math.random() * 100)
    let processedTotal = Math.floor(Math.random() * 3) + value1 + value2 + value3

    return [value1, value2, value3, processedTotal]
  }

  checkAnswer = (valSelected) => {
    let total = this.state.value1 + this.state.value2 + this.state.value3
    let isCorrect = (this.state.processedTotal === total && valSelected === 'true') || 
      (this.state.processedTotal !== total && valSelected === 'false')

    this.props.updateMarks(isCorrect)
    this.updateState()
  }

  render() {
    return (
      <div>

        <div className="equation">
          
          {this.state.value1} + {this.state.value2} + {this.state.value3} = {this.state.processedTotal} </div>
        
        <div className="game-buttons">
          <button onClick={() => this.checkAnswer('true')}> True </button>
          <button onClick={() => this.checkAnswer('false')}> False </button>
        </div>
        
      </div>
    )
  }
}

export default Game