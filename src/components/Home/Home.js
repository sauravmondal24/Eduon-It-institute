import React from 'react';
import Banner1 from '../../Assets/img/banner-bg-1.png';
import Banner2 from '../../Assets/img/banner-img-1.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	// https://templates.hibootstrap.com/eduon/default/index.html
	return (
		<div>
			<div
				className="hero min-h-screen "
				style={{ backgroundImage: `url("${Banner1}")` }}
			>
				<div className="hero-overlay bg-opacity-10"></div>
				<div className="hero-content text-start text-neutral-content">
					<div className="hero min-h-screen">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src={Banner2}
								className="md:max-w-lg rounded-lg shadow-2xl "
								alt=""
							/>
							<div>
								<h1 className="md:text-6xl font-bold">
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

			<div className="hero min-h-screen bg-base-200">
				<div className="grid md:grid-cols-2 gap-4 hero-content flex-col lg:flex-row ">
					<div>
						<img
							src="https://templates.hibootstrap.com/eduon/default/assets/img/education-img.png"
							className="w-full rounded-lg shadow-2xl"
							alt=""
						/>
					</div>
					<div>
						<h3 className="text-warning">Education For All</h3>
						<h1 className="md:text-5xl font-bold">
							Why create an online course with
							<span className="text-warning">EDUON</span> ?
						</h1>
						<p className="py-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt.
						</p>
						<Link to="/courses" className="btn btn-warning text-white">
							View Courses
						</Link>
					</div>
				</div>
			</div>

			{/* <div className="container py-20">
				<h2 className="text-warning md:text-center text-2xl">Our Teachers</h2>
				<h2 className=" md:text-center md:text-5xl font-bold">
					Our international teachers
				</h2>
				<div className="grid md:grid-cols-4 gap-2 md:justify-between pt-10 ">
					<div className="card  bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://www.marwadiking.com/assets/img/pimg3.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title justify-center">Shuvo Mondal</h2>
							<p className="text-center">
								a person who teaches or instructs, especially as a profession;
								instructor.
							</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">More Details</button>
							</div>
						</div>
					</div>
					<div className="card  bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://www.marwadiking.com/assets/img/pimg3.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title justify-center">Shuvo Mondal</h2>
							<p className="text-center">
								a person who teaches or instructs, especially as a profession;
								instructor.
							</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">More Details</button>
							</div>
						</div>
					</div>
					<div className="card bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://www.marwadiking.com/assets/img/pimg3.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title justify-center">Shuvo Mondal</h2>
							<p className="text-center">
								a person who teaches or instructs, especially as a profession;
								instructor.
							</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">More Details</button>
							</div>
						</div>
					</div>
					<div className="card  bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://www.marwadiking.com/assets/img/pimg3.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title justify-center">Shuvo Mondal</h2>
							<p className="text-center">
								a person who teaches or instructs, especially as a profession;
								instructor.
							</p>
							<div className="card-actions justify-center">
								<button className="btn btn-primary">More Details</button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Home;
