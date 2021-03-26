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
				<h1>Track Listing</h1>
				{albumToDisplay.trackListing.map((track) => {
					return (
						<ul key={track}>
							<li className="track">{track}</li>
						</ul>
					);
				})}
				<h1>Album Personnel</h1>
				{albumToDisplay.personnel.map((member) => {
					return <li key={member} className="personnel">{member}</li>
				})}
			</div>
		);
	}
}


export default AlbumDisplay;