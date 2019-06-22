import React from "react";
import "./Row.css";
import PropTypes from "prop-types"

export default function Row(props) {
	const { symbol, title } = props.emoji;
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
	);
}

Row.propTypes = {
	emoji: PropTypes.object.isRequired
}