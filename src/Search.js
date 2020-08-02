import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hideToolTip: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.props.setSearchVal(event.target.value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.setSearchVal(this.props.searchVal);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='search'>Search</label>
				<input
					id='search'
					type='text'
					onChange={this.handleChange}
					value={this.props.searchVal}
				/>
			</form>
		);
	}
}

export default Search;