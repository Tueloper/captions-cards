import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from './../redux/actions/index'

class Tags extends Component {
  async componentDidMount() {
    await this.props.getAllTags();
  }

  render() {
    return (
      <div>
hdhhd
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tags: state.tags }
}

export default connect(mapStateToProps, { getAllTags })(Tags)
