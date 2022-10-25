import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="container-md">
			<div className="navbar bg-sky-200 py-4">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/courses">COURSES</Link>
							</li>
							<li>
								<Link to="/faq">FAQ</Link>
							</li>
							<li>
								<Link to="/blog">BLOG</Link>
							</li>
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						<img src={Logo} alt="" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<Link className="text-xl font-medium" to="/">
								HOME
							</Link>
						</li>
						<li>
							<Link className="text-xl font-medium" to="/courses">
								COURSES
							</Link>
						</li>
						<li>
							<Link className="text-xl font-medium" to="/faq">
								FAQ
							</Link>
						</li>
						<li>
							<Link className="text-xl font-medium" to="/blog">
								BLOG
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<div>
						<Link className="btn btn-secondary mx-4">Download</Link>
					</div>
					<div className="btn-group btn-group-horizontal lg:btn-group-horizontal">
						<Link to="/login" className="btn  btn-active ">
							LogIn
						</Link>
						<Link to="signup" className="btn">
							SignUp
						</Link>
					</div>
					<div>
						<Link>{user?.displayName}</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
