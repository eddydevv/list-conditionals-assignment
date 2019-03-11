import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inputLength: 0
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler = (e) => {
    let inputLength = e.target.value.length
    this.setState({
      inputLength: inputLength
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.onChangeHandler} />
          <p>The input is {this.state.inputLength} characters!</p>
        </header>
      </div>
    );
  }
}

export default App;
