import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllCaptions } from '../redux/actions/caption'
import Spinner from './Spinner'
import CaptionCard from './Cards';
import PropTypes from 'prop-types'

const Captions = ({ getAllCaptions, captions }) => {
  useEffect(() => {
    getAllCaptions();
  }, [getAllCaptions])

  const captionText =  captions.map((caption) => <CaptionCard key={caption.id} content={caption.caption}/>);
  if (captions.length < 1) {
    return <Spinner/>
  } else {
    return (
      captions &&
      <div className="d-flex justify-content-center flex-wrap">
        {captionText}
      </div>
    )
  }
}

Captions.prototypes = {
  getAllCaptions: PropTypes.func.isRequired,
  caption: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return { captions: state.captions }
};

export default connect(mapStateToProps, { getAllCaptions })(Captions);
