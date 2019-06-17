import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<h1>
				<span role="img" aria-label="jsx-ally/accessible-emoji">
					😆
				</span>{" "}
				Emoji Search{" "}
				<span role="img" aria-label="jsx-ally/accessible-emoji">
					😆
				</span>
			</h1>
		</header>
	);
}
