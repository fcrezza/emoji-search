import React, { Component } from "react";
import "./Input.css";

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
