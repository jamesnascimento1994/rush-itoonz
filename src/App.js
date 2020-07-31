import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { albums } from './data';
import Albums from './Albums';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			albums: albums,
			// searchVal: null,
			filterAlbums: null,
		};
	}
	componentDidMount() {
		fetch('https://itunes.apple.com/search?term=rush&entity=album')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json });
			});
	}
	filterAlbums = (searchVal) => {
		console.log(searchVal);
		console.log(this.state.albums);
		const filteredAlbums = this.state.albums
			.filter((album) => album.collectionName)
			.filter((album) => {
				return album.collectionName.toLowerCase().includes(searchVal.toLowerCase());
			});
		this.setState({
			filterAlbums: filteredAlbums,
		});
		console.log(this.state.filterAlbums);
	};
	render() {
		return (
			<div className='App'>
				<Header filterAlbums={this.filterAlbums} />
				<Albums
					albums={
						this.state.filterAlbums
							? this.state.filterAlbums
							: this.state.albums
					}
					collectionName={this.state.collectionName}
				/>
			</div>
		);
	}
}

export default App;
