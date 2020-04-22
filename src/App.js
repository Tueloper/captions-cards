import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './pages/Home';
import Tags from './pages/Tags';
import CaptionTag from './pages/CaptionTags';
import Notification from './components/Notification';

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
      <Router>
        <div className="App">
          <Navbar/>
          <Notification/>
          <div className="container" style={{ marginTop: '9rem'}}>
            <Alert alert={this.state.alert}/>
            <Switch>
              {/* Captions */}
              <Route exact path='/' render={(props) => {
                return <Home {...props} setAlert={this.setAlert}/>
              }}/>
              {/* Tags */}
              <Route exact path='/tags' render={(props) => {
                return <Tags {...props} setAlert={this.setAlert}/>
              }}/>
              {/* Caption Tags */}
              <Route exact path='/tag/caption' component={CaptionTag}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
