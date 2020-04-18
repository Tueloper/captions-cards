import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addCaption } from './../redux/actions/index';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
	return {
		addCaption: caption => dispatch(addCaption(caption))
	}
}
class Form extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			caption: ''
		}
		this.state = this.initialState;

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
  static propTypes = {
    setAlert: PropTypes.func.isRequired
  }

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e) => {
		e.preventDefault();
		if (this.state.caption === '') {
			this.props.setAlert('  Please Type In Your Caption', 'dark');
		}
		else {
			this.props.setAlert('Thank You For adding A Captions, Hope You added a Reasonable one though😋...', 'success');
			await this.props.addCaption(this.state);
			this.setState(this.initialState);
			window.location.reload();
		}
	};

	render () {
		return (
			<div className="my-3 text-center" style={{ display: 'flex', justifyContent: 'center'}}>
        <form
          className='form mt-2'
          onSubmit={this.onSubmit}
           style={{ width: '600px' }}>
					<input
						type='text'
            name='caption'
            className="form-control"
						value={this.state.caption}
						onChange={this.onChange}
						placeholder='Type in Your Caption....'
					/>
					<button type='submit' className='btn btn-danger  btn my-2' style={{ width: '120px', height: '35px', fontSize: '1rem'}}>
						Add Caption
					</button>
				</form>
			</div>
		);
	};
}

const formTable = connect(
	null,
	mapDispatchToProps
)(Form)

export default formTable;
