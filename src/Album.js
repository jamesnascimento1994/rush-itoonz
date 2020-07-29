import React, { Component } from 'react';

class Album extends Component {
    render() {
        return (
            <div className="album">
                <img src={this.props.album.artworkUrl100} alt="artwork" />
        <h2>{this.props.album.artistName}</h2>
        <h3>{this.props.album.collectionName}</h3>
        <h4>{this.props.album.releaseDate}</h4>
            </div>
        );
    }
}

export default Album;