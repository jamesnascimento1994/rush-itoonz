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
                <h4>Currency:{albumToDisplay.currency}</h4>
                <h4>Country:{albumToDisplay.country}</h4>
                <h4>Track Count:{albumToDisplay.trackCount}</h4>
			</div>
		);
	}
}

export default AlbumDisplay;