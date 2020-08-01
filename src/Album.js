import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Album extends Component {
    render() {
        return (
					<div className='album'>
						<Link to={"/album/"+this.props.album.collectionName}>
							{' '}
							<img src={this.props.album.artworkUrl100} alt='artwork' />
							<h2>{this.props.album.collectionName}</h2>{' '}
						</Link>
					</div>
				);
    }
}

export default Album;