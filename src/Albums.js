import React, { Component } from 'react';
import Album from './Album';
import Search from './Search';

class Albums extends Component {
 handleHeaderClick = () => {
		this.props.resetSearchVal();
	}
    render() {
        console.log(this.props.routerProps)
        return (
					<div>
						<Search
							setSearchVal={this.props.setSearchVal}
							searchVal={this.props.searchVal}
							filterAlbums={this.props.filterAlbums}
						/>
						<div className='albums'>
							{this.props.albums &&
								this.props.albums.map((album, index) => {
									return (
										<Album
											album={album}
											key={`${index}-${album.collectionName}`}
										/>
									);
								})}
						</div>
					</div>
				);
    }
}

export default Albums;