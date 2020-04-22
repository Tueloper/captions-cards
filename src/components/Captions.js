import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllCaptions } from './../redux/actions/caption'
import Spinner from './Spinner'
import CaptionCard from './Cards';
import PropTypes from 'prop-types'

const Captions = ({ getAllCaptions, captions, loading }) => {
  useEffect(() => {
    getAllCaptions();
  }, [getAllCaptions]);

    // return console.log(loading);
    if (loading) {
      return <Spinner/>
    }
    return null

      // return (
      //   this.props.captions &&
      //   <div className="d-flex justify-content-center flex-wrap">
      //     {
      //     this.props.captions.map((caption) =>
      //       <CaptionCard key={caption.id} content={caption.caption}/>)
      //     }
      //   </div>
      // )


}

Captions.prototypes = {
  getAllCaptions: PropTypes.func.isRequired,
  caption: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  captions: state.captions,
  loading: state.loading
});

export default connect(mapStateToProps, { getAllCaptions })(Captions);
