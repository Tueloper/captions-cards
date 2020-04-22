import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from './../redux/actions/tag';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import TagCard from './Cards';

const Tags = ({ getAllTags, tags, loading }) => {
  useEffect(() => {
    getAllTags();
  }, [getAllTags])

  if (loading) {
    return <Spinner/>
  } else {
    return (
      tags &&
      <div className='d-flex justify-content-center flex-wrap'>
        {
          tags.map((tag) => {
            // the keyRef was generated to aviod duplicate keys as some tag names where repeated
            let keyRef = Math.floor(Math.random() * 8999 + 1000);
            keyRef = `${tag}_${keyRef}`;
            return <TagCard key={keyRef} content={tag} />
          })
        }
      </div>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    tags: state.Tags.tags,
    loading: state.Tags.loading
  }
}

export default connect(mapStateToProps, { getAllTags })(Tags)
