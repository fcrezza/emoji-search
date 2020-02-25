import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import filterEmojis from "./filterEmojis";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			filteredEmoji: []
		};
	}

	handleChange = event => {
		this.setState({
			value: event.target.value,
			filteredEmoji: filterEmojis(this.state.value.toLowerCase(), 10)
		});
	}

	render() {
		return (
			<div className="emojiApp">
				<Header />
				<Input
					value={this.state.value}
					handleChange={this.handleChange}
				/>
				<Result emojis={this.state.filteredEmoji} />
			</div>
		);
	}
}

export default App;
