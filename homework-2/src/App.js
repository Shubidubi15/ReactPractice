import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation'
import CharBox from './Components/CharBox'

class App extends Component {
  state = {
    enteredText: ""
  }

  changeHandler = (event) => {
    this.setState({enteredText: event.target.value});
  }

  removeLetter = (index) => {
    let textArray = this.state.enteredText.split('');
    textArray.splice(index, 1);
    let newText = textArray.join('');
    this.setState({enteredText: newText});
  }

  showBoxes(){
    let text = this.state.enteredText;
    if(text.length >= 8){
      let characters = text.split('');
      return characters.map((c, index) => {
        return (<CharBox letter={c} key={index} click={() => this.removeLetter(index)}/>)
      })
    } else{
      return null;
    }
  }

  render() {
    let texto = this.state.enteredText;
    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={texto}/>
        <Validation charNum={this.state.enteredText.length}/>
        { this.showBoxes() }
      </div>
    );
  }
}

export default App;
