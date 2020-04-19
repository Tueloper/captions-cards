import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addTag } from './../redux/actions/index';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    addTag: tag => dispatch(addTag(tag))
  }
}

class TagForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      tag: ''
    }
    this.state = this.initialState;

    // bind action function
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    setAlert: PropTypes.func.isRequired,
    addTag: PropTypes.func.isRequired
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.tag === '') {
      this.props.setAlert('Please Type in A Word Tag!!.. 😡', 'dark');
    } else {
      this.props.setAlert('Thank You For adding A Tag😁', 'success');
      await this.props.addTag(this.state);
      this.setState(this.initialState);
      // window.location.reload();
    }
  }

  render() {
    return (
      <div className="my-3 text-center" style={{ display: 'flex', justifyContent: 'center'}}>
        <form
          className='form mt-2'
          onSubmit={this.onSubmit}
          style={{ width: '600px' }}>
          <input
            type='text'
            name='tag'
            className="form-control"
            value={this.state.tag}
            onChange={this.onChange}
            placeholder='Type in Your Tag....'
          />
          <button type='submit' className='btn btn-danger  btn my-2' style={{ width: '120px', height: '35px', fontSize: '1rem'}}>
            Add Tag
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TagForm);
