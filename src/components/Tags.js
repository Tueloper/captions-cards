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
            return <TagCard key={tag.id} content={tag.tag} id={tag.id} captionBtn={true}/>
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
