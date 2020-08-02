import React, { Component } from 'react';
import './AlbumDisplay.css';

class AlbumDisplay extends Component {
	handleChange = (event) => {
		this.setState({ hideToolTip: true });
	};
	render() {
		const albums = this.props.albums;
		const name = this.props.match.params.name;
		const albumToDisplay = albums.find((album) => {
			return album.collectionName === name;
		});
		return (
			<div>
				<img src={albumToDisplay.artworkUrl100} alt='artwork' />
				<h2>{albumToDisplay.collectionName}</h2>
				<h3>{albumToDisplay.releaseDate}</h3>
			</div>
		);
	}
}

export default AlbumDisplay;