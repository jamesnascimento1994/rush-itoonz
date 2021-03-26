import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Album.css';

class Album extends Component {
    render() {
        return (
					<div className='album'>
						<Link className="album-link" to={"/album/"+this.props.album.collectionName}>
							{' '}
							<img src={this.props.album.artworkUrl100} alt='artwork' />
						</Link>
					</div>
				);
    }
}

export default Album;