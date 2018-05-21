import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const app=(
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
);


const Apple = (
class Apple extends Component {
  render (){
    return (
      <div>

        <h1>I got 0 instruction on this. </h1>
        <p>I bought a UDEMY course, and have been watching that, but man, this is so hard. im going to need a whole lot of instruction on this react thing before I understand it.  even after buying the Udemy course i had to spend several hours figuring it out!</p>
      </div>
    )
  }
}
)

const Pear = (
class Bear extends Component {
  render (){
    return (
      <div>
      <h1>This is the hardest coding thing i have ever done.</h1>
      <p>Like for real this was so so hard</p>
      </div>
    )
  }
}
)


const HelpMe = (
  class Putos extends Component {
    render (){
      return (
        <div>
          <h1>"I'm really exited for DevMountain"</h1>
          <p>But i sure hope they are able to explain React to me. it is still extreemly forign to me. I understand HTML, CSS (to some extent), and JavaScript (at least what i have been taught), but this React thing. goes so far over my head for the time being!</p>

        </div>
      )

    }


  }

)



export {Apple}
export {Pear}
export {HelpMe}
