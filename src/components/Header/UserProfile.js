import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import resume from '../../Assets/img/resume.jpg';
import './Header.css';

const UserProfile = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	const pdfGenerate = () => {
		var doc = new jsPDF('landscape', 'px', 'a4', 'false');
		doc.addImage(resume, 'JPG', 65, 20, 500, 400);
		doc.save('cv.pdf');
	};
	return (
		<div className="flex md:items-center justify-between">
			<div className="hidden lg:block">
				<input type="checkbox" className="toggle" />
			</div>
			<div className="hidden lg:block">
				<Link onClick={pdfGenerate} className="btn btn-sm btn-secondary mx-4">
					Download
				</Link>
			</div>

			<div>
				<div>
					{user ? (
						<>
							<span>{user?.displayName}</span>
							<button
								onClick={handleLogOut}
								className="btn btn-warning btn-sm mx-2 logOutBtn"
							>
								LogOut
							</button>
						</>
					) : (
						<>
							<div className="btn-group btn-group-horizontal lg:btn-group-horizontal">
								<Link to="/login" className="btn  btn-active btn-sm">
									LogIn
								</Link>
								<Link to="signup" className="btn btn-sm">
									SignUp
								</Link>
							</div>
						</>
					)}
				</div>
			</div>

			<div className="text-center">
				<Link>
					{user?.photoURL ? (
						<img
							className="mask mask-circle"
							style={{ height: '30px' }}
							src={user?.photoURL}
							alt=""
						/>
					) : (
						<FaUser></FaUser>
					)}
				</Link>
			</div>
		</div>
	);
};

export default UserProfile;
