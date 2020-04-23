import React from 'react'
import { connect } from 'react-redux';
import Spinner from './../components/Spinner'
import TagCard from './../components/TagCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const CaptionsTag = ({ tagCaptions, tag, loading = true }) => {
  return (
    <div>
      <Link to='/tags'>
        <button className="btn btn-success">Back To Tags</button>
      </Link>
      <h1> Captions For {tag}</h1>

      { tagCaptions.length < 1 && <h1>No Captions Found</h1>}
      {loading && <Spinner/>}
      {tagCaptions &&
        <div className="d-flex align-items-flex-start flex-wrap">
          {
          tagCaptions.map((caption, index) =>
            <TagCard key={index} content={caption}  id={index}/>)
          }
        </div>
        }
    </div>
  )
}

CaptionsTag.prototypes = {
  getAllCaptions: PropTypes.func.isRequired,
  caption: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    tagCaptions: state.Captions.tagCaptions,
    tag: state.Captions.tag,
    loading: state.Captions.loading
  }
);

export default connect(mapStateToProps)(CaptionsTag);
