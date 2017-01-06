import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };

		this.onInputChange = this.onInputChange.bind(this); // replace onInput change with new bound instance of onInputChange
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		// fetch weather data
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn bt-secondary">Submit</button>
				</span>
			</form>
		)
	}
}