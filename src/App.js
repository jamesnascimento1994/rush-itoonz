import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import { albums } from './data';
import Albums from './Albums';
import { Route } from 'react-router-dom';
import AlbumDisplay from './AlbumDisplay';

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
				return album.collectionName
					.toLowerCase()
					.includes(searchVal.toLowerCase());
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
				<Route
					path='/:page'
					render={(routerProps) => {
            console.log(routerProps.match.params.page);
            let albums;
						if (
							routerProps.match.params.page === 'home' ||
							!this.state.filterAlbums
						) {
							albums = this.state.albums;
						} else {
							albums = this.state.filterAlbums;
						}
						return (
							<Albums
								routerProps={routerProps}
								// albums={
								// 	this.state.filterAlbums && routerProps.match.params.page !== "home" 
								// 		? this.state.filterAlbums
								// 		: this.state.albums
                // }
                albums = {albums}
								collectionName={this.state.collectionName}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/album/:name'
					render={(routerProps) => {
						return (
							<AlbumDisplay
								match={routerProps.match}
								albums={this.state.albums}
							/>
						);
					}}
				/>
			</div>
		);
	}
}

export default App;
