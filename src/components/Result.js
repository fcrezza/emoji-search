import React, { Component } from "react";
import ClipboardJS from "clipboard";
import Row from "./Row";
import "./Result.css";

export default class result extends Component {
	componentDidMount() {
		this.clipboard = new ClipboardJS(".btn");
	}

	componentWillUnmount() {
		this.clipboard.destroy();
	}

	render() {
		return (
			(this.props.emojis.length !== 0 &&
				<div className="result">
					{this.props.emojis.map(emoji => (
						<Row emoji={emoji} key={emoji.title} />
					))}
				</div>
			)
		);
	}
}
