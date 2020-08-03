import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
	function handleHeaderClick() {
		props.resetSearchVal();
	}

	return (
		<header>
			<Link to='/' onClick={handleHeaderClick} className="home">
				<h1>Rush iToonz</h1>
			</Link>
		</header>
	);
}

export default Header;
