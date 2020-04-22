import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from './../redux/actions/tag';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import TagCard from './Cards';

const Tags = ({ getAllTags, tags }) => {
  useEffect(() => {
    getAllTags();
  }, [getAllTags])
  return null
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

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return { tags: state.tags }
}

export default connect(mapStateToProps, { getAllTags })(Tags)
