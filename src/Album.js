import React, { Component } from 'react';

class Album extends Component {
    render() {
        return (
            <div className="album">
                <img src={this.props.album.artworkUrl100} alt="artwork" />
        <h2>{this.props.album.collectionName}</h2>
            </div>
        );
    }
}

export default Album;