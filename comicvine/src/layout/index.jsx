import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// import './styles.css';

export default function Layout ({ children }) {
	return (
		<>
			<Header />
			<Content>{children}</Content>
			<Footer />
		</>
	)
}
