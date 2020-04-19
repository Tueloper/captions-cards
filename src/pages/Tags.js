import React, { Component } from 'react'
import AllTags from './../components/Tags';
import { Helmet } from 'react-helmet';

export class Tags extends Component {
  render() {
    return (
      <div>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Tags</title>
      </Helmet>
        <AllTags/>
      </div>
    )
  }
}

export default Tags
