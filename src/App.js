import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Albums from './Albums';
import { Route } from 'react-router-dom';
import AlbumDisplay from './AlbumDisplay';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			albums: null,
			searchVal: '',
			filterAlbums: null,
		};
	}
	componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		fetch(proxyUrl + 'https://itunes.apple.com/search?term=rush&entity=album')
			.then((res) => res.json())
			.then((json) => {
        console.log(json);
				this.setState({ albums: json.results });
			});
	}

	setSearchVal = (searchVal) => {
		this.setState({ searchVal });
		this.filterAlbums(searchVal);
	};

	resetSearchVal = () => {
		this.setState({ searchVal: '' });
		this.filterAlbums('');
	};
	filterAlbums = (searchVal) => {
		const filteredAlbums = this.state.albums
			.filter((album) => album.collectionName)
			.filter((album) => {
				if (typeof album.collectionName !== 'undefined') {
					return album.collectionName
						.toLowerCase()
						.includes(searchVal.toLowerCase());
				}
				return false;
			});
		this.setState({
			filterAlbums: filteredAlbums,
		});
	};
	render() {
		return (
			<div className='App'>
				<Header resetSearchVal={this.resetSearchVal} />
				<Route
					exact
					path='/'
					render={() => {
						return (
							<Albums
								resetSearchVal={this.resetSearchVal}
								searchVal={this.state.searchVal}
								setSearchVal={this.setSearchVal}
								filterAlbums={this.filterAlbums}
								albums={
									this.state.filterAlbums
										? this.state.filterAlbums
										: this.state.albums
								}
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
