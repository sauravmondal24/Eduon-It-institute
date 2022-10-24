import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<div className="text-center lg:text-left">
								<h1 className="text-xl font-bold">
									Please Create a New Account
								</h1>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									name="name"
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									name="email"
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									name="password"
									type="text"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<Link href="#" className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
