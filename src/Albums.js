import React, { Component } from 'react';
import Album from './Album';

class Albums extends Component {
    render() {
        return (
            <div className="albums">
                {this.props.albums.map(album => {
                    return <Album album={album.artworkUrl60} key={album.collectionName} />
                })}
            </div>
        );
    }
}

export default Albums;