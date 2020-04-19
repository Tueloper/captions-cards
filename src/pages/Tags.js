import React, { Component } from 'react'
import AllTags from './../components/Tags';
import { Helmet } from 'react-helmet';
import TagForm from './../components/TagForm';

export class Tags extends Component {
  render() {
    return (
      <div>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Tags</title>
      </Helmet>
      <TagForm setAlert={this.props.setAlert}/>
        <AllTags/>
      </div>
    )
  }
}

export default Tags
