import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllCaptions } from '../redux/actions/index'
import Spinner from './Spinner'
import CaptionCard from './Cards';
import PropTypes from 'prop-types'

class Captions extends Component {
  async componentDidMount() {
    await this.props.getAllCaptions();
  }

  render() {
    const { captions } = this.props;
    const captionText =  captions.map((caption) => <CaptionCard key={caption.id} content={caption.caption}/>);
    if (this.props.captions.length < 1) {
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
}

Captions.prototypes = {
  getAllCaptions: PropTypes.func.isRequired,
  caption: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return { captions: state.captions }
};

export default connect(mapStateToProps, { getAllCaptions })(Captions);
