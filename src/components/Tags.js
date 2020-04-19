import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from './../redux/actions/index';
import Spinner from './Spinner';
import TagCard from './Cards';

class Tags extends Component {
  async componentDidMount() {
    await this.props.getAllTags();
  }

  render() {
    const { tags } = this.props;
    const tagText = tags.map((tag) => {
      // the keyRef was generated to aviod duplicate keys as some tag names where repeated
      let keyRef = Math.floor(Math.random() * 8999 + 1000);
      keyRef = `${tag}_${keyRef}`;
      return <TagCard key={keyRef} content={tag} />
    })
    if (tags.length < 1) {
      return <Spinner/>
    } else {
      return (
        tags &&
        <div className='d-flex justify-content-center flex-wrap'>
          {tagText}
        </div>
      )
    }

  }
}

const mapStateToProps = state => {
  return { tags: state.tags }
}

export default connect(mapStateToProps, { getAllTags })(Tags)
