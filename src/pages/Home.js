import React, { Component } from 'react'
import Captions from './../components/Captions';
import Form from '../components/CaptionForm';
import { Helmet } from 'react-helmet';

export class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8'/>
          <title>Captions</title>
        </Helmet>
        <div className="App">
          <Form setAlert={this.props.setAlert}/>
          <Captions/>
        </div>
      </div>

    )
  }
}

export default Home
