import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    setAlert: PropTypes.func.isRequired
  }

	state = {
		caption: ''
  };

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
    e.preventDefault();
    // return console.log(this.state.caption)
		if (this.state.caption === '') {
			this.props.setAlert('  Please Type In Your Caption', 'dark');
		}
		else {

		}
	};

	render () {
		return (
			<div className="my-3 text-center" style={{ display: 'flex', justifyContent: 'center'}}>
        <form
          className='form mt-2'
          onSubmit={this.onSubmit}
           style={{ width: '600px'}}>
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
	}
}

export default Form;
