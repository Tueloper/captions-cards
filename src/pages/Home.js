import React, { Component } from 'react'
import Captions from './../components/Captions';
import Form from './../components/Form';

export class Home extends Component {
  render() {
    return (
      <div className="App">
          <Form setAlert={this.props.setAlert}/>
          <Captions/>
      </div>
    )
  }
}

export default Home
