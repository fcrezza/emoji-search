import React from "react"
import "./Row.css"
import ClipboardJS from "clipboard"

export default class Row extends React.Component {
	componentDidMount() {
		this.clipboard = new ClipboardJS(".btn")
	}

	componentWillUnmount() {
		this.clipboard.destroy()
	}

	render() {
		const { symbol, title } = this.props.emoji

		return (
			<div className="row">
				<span role="img" aria-label="jsx-ally/accessible-emoji">
					{symbol}
				</span>
				<span>{title}</span>
				<button className="btn" data-clipboard-text={symbol}>
					copy
				</button>
			</div>
		)
	}
}
