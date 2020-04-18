import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Captions from './components/Captions';
import Notification from './components/Notification';
import Form from './components/Form'

export class App extends Component {
  state = {
    alert: null
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }});
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container mt-4">
          <Notification alert={this.state.alert}/>
          <Form setAlert={this.setAlert}/>
          <Captions/>
        </div>
      </div>
    )
  }
}

export default App
