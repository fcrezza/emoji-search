import React from "react";
import "./Row.css";

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
