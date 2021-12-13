import React from 'react';

import '../styles/Footer.scss';

export const Footer = () => {
	return (
		<div className="footer">
				<div className="footer-container">
					<div className="row-bottom">
						<p>
							Copyright &copy;{new Date().getFullYear()} Patrick Huynh | Created with ReactJS
						</p>
					</div>
				</div>
		</div>
	);
};