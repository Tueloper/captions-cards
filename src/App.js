import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notification from './components/Notification'
import Home from './pages/Home';
import Tags from './pages/Tags';
import CaptionTag from './pages/CaptionTags';

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
          <div className="container mt-4">
            <Notification alert={this.state.alert}/>
            <Switch>
              {/* Captions */}
              <Route exact path='/' render={(props) => {
                return <Home {...props} setAlert={this.setAlert}/>
              }}/>
              <Route exact path='/tags' component={Tags}/>
              <Route exact path='/tag/caption' component={CaptionTag}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
