import React from 'react';
import Search from './Search';

function Header(props) {
        return (
			<header>
			    <h1>Rush iToonz</h1>
                <Search filterAlbums={props.filterAlbums} />
			</header>
				);
    }

export default Header;