import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<>
				<p>Loading.....</p>
			</>
		);
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
	return children;
};

export default PrivateRoute;
