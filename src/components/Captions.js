import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllCaptions } from './../redux/actions/caption'
import Spinner from './Spinner'
import CaptionCard from './Cards';
import PropTypes from 'prop-types'

class Captions extends Component {
  async componentDidMount() {
    console.log('I have loaded')
    await this.props.getAllCaptions();
  }

  static prototypes = {
    getAllCaptions: PropTypes.func.isRequired,
    caption: PropTypes.array.isRequired
  }

  render () {
    return null
    const captionText =  this.props.captions.map((caption) => <CaptionCard key={caption.id} content={caption.caption}/>);
    if (this.props.captions.length < 1) {
      return <Spinner/>
    } else {
      return (
        this.props.captions &&
        <div className="d-flex justify-content-center flex-wrap">
          {captionText}
        </div>
      )
    }
  }
}



const mapStateToProps = (state) => ({
  captions: state.captions,
  loading: state.loading
});

export default connect(mapStateToProps, { getAllCaptions })(Captions);
