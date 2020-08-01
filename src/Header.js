import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

function Header(props) {
        return (
					<header>
						<Link to='/?page=home'>
							<h1>Rush iToonz</h1>
						</Link>
						<Search filterAlbums={props.filterAlbums} />
					</header>
				);
    }

export default Header;