import React from 'react';
import styled from 'styled-components'
import './Link.css';

// 책에 있으니까 해봤는데 이건 아닌것 같다
// 모든 css 를 갈아치우는 부분이 있었는데 안해
const InnerLink = styled.a`color:#61dafb;`;

const Link = ({url, title}) => {
	return (
		// <a
		<InnerLink
			className="App-link"
			href={url}
			target="_blank"
			rel="noopener noreferrer"
		>
			{title}
		</InnerLink>
		// </a>
	)
}

export default Link;