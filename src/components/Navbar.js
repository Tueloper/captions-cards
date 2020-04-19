import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="container">
          <Link className="navbar-brand" to="/">Caption Cards</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Captions <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tags">Tags </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tag/caption">CaptionTags</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
