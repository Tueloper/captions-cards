import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Captions from './components/Captions';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container mt-4">

          <Captions/>
        </div>
      </div>
    )
  }
}

export default App
