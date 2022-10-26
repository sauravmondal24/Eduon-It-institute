import React from 'react';
import { Link } from 'react-router-dom';
import Pic from '../Assets/img/error.jpg';

const ErrorPage = () => {
	return (
		<div>
			<Link to="/">
				<img style={{ height: '100vh', width: '100%' }} src={Pic} alt="" />
			</Link>
		</div>
	);
};

export default ErrorPage;
