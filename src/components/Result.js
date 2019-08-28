import React, { Component } from "react"
import Row from "./Row"
import "./Result.css"

export default class result extends Component {
	render() {
		return (
			(this.props.emojis.length !== 0 &&
				<div className="result">
					{this.props.emojis.map(emoji => (
						<Row emoji={emoji} key={emoji.title} />
					))}
				</div>
			)
		)
	}
}
