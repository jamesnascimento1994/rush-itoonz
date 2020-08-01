import React, { Component } from 'react';
import Album from './Album';

class Albums extends Component {
    render() {
        console.log(this.props.routerProps)
        return (
            <div className="albums">
                {this.props.albums && this.props.albums.map((album, index) => {
                    return <Album album={album} key={`${index}-${album.collectionName}`} />
                })}
            </div>
        );
    }
}

export default Albums;