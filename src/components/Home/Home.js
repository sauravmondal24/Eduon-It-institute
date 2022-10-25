import React from 'react';
import Banner1 from '../../Assets/img/banner-bg-1.png';
import Banner2 from '../../Assets/img/banner-img-1.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
	// https://templates.hibootstrap.com/eduon/default/index.html
	return (
		<div>
			<div
				className="hero min-h-screen"
				style={{ backgroundImage: `url("${Banner1}")` }}
			>
				<div className="hero-overlay bg-opacity-10"></div>
				<div className="hero-content text-start text-neutral-content">
					<div className="hero min-h-screen">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src={Banner2}
								className="max-w-lg rounded-lg shadow-2xl "
								alt=""
							/>
							<div>
								<h1 className="text-6xl font-bold">
									Study a recognized qualification with the online learning
									experts
								</h1>
								<p className="py-6">
									Receive German degree when studying online courses from home.
									Quality education does not need to be expensive. Save up to
									75% with a scholarship. 100% in English.
								</p>
								<Link to="/courses" className="btn btn-warning text-white">
									View Courses
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
