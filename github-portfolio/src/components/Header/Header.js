import React from 'react';
import './Header.css';
import * as PropType from "prop-types";

const Header = () => {
	return (
		<header className="App-header">
			{/*<img src={logo} className="App-logo" alt="logo"/>*/}
			<h1>My Github Portfolio</h1>
		</header>
	)
}

Header.propTypes = {
	logo: PropType.string
}


export default Header;