import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';
import './Header.css';
import UserProfile from './UserProfile';

const Header = () => {
	return (
		<div className="bg-sky-200">
			<div className="md:container md:m-auto">
				<div className="navbar  py-4">
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
									<Link to="/courses/:id">COURSES</Link>
								</li>
								<li>
									<Link to="/faq">FAQ</Link>
								</li>
								<li>
									<Link to="/blog">BLOG</Link>
								</li>
								<UserProfile></UserProfile>
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
								<Link className="text-xl font-medium" to="/courses/:id">
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

					<div className="navbar-end profileSection">
						<UserProfile></UserProfile>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
