import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';

const Footer = () => {
	return (
		<footer className="footer p-10 bg-base-200 text-base-content">
			<div>
				<img src={logo} alt="" />
				<p>Eduon It institute. Providing reliable tech since 1992</p>
			</div>
			<div>
				<span className="footer-title font-bold">Services</span>
				<Link className="link link-hover">Branding</Link>
				<Link className="link link-hover">Design</Link>
				<Link className="link link-hover">Marketing</Link>
				<Link className="link link-hover">Advertisement</Link>
			</div>
			<div>
				<span className="footer-title font-bold">Company</span>
				<Link className="link link-hover">About us</Link>
				<Link className="link link-hover">Contact</Link>
				<Link className="link link-hover">Jobs</Link>
				<Link className="link link-hover">Press kit</Link>
			</div>
			<div>
				<span className="footer-title font-bold text-black">Legal</span>
				<Link className="link link-hover">Terms of use</Link>
				<Link className="link link-hover">Privacy policy</Link>
				<Link className="link link-hover">Cookie policy</Link>
			</div>
		</footer>
	);
};

export default Footer;
