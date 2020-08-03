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
				<h4>Personnel:</h4>
				<ul>
					{albumToDisplay.personnel.map(person => {
                        return <li key={person}>{person}</li>
                    })}
				</ul>
                <h4>Track Listing:</h4>
                <ul>
                {albumToDisplay.trackListing.map(track => {
                    return <li key={track}>{track}</li>
                })}
                </ul>
			</div>
		);
	}
}

export default AlbumDisplay;