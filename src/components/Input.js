import React, { Component } from "react";
import "./Input.css";
import PropTypes from 'prop-types'

export default class Input extends Component {
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.value}
					onChange={this.props.handleChange}
				/>
			</div>
		);
	}
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
}