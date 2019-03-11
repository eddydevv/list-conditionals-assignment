import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inputString: "",
      inputLength: 0
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.deleteCharHandler = this.deleteCharHandler.bind(this)
  }

  onChangeHandler = (e) => {
    let inputString = e.target.value
    this.setState({
      inputString: inputString,
      inputLength: inputString.length
    })
  }
  
  deleteCharHandler = (e, index) => {
    let inputString = [...this.state.inputString]
    inputString.splice(index,1)
    this.setState({
      inputString: inputString.join(''),
      inputLength: inputString.length
    })
  }

  render() {
    let inputString = [...this.state.inputString]
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.onChangeHandler} value={this.state.inputString} />
          <p>The input is {this.state.inputLength} characters!</p>
          <ValidationComponent inputLength={this.state.inputLength} />
          {inputString.splice('').map((char, index) => <CharComponent char={char} deleteChar={() => this.deleteCharHandler(index)} />)}
        </header>
      </div>
    );
  }
}

export default App;
