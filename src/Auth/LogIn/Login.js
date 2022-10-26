import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [error, setError] = useState('');
	const { googleProviderLogin, signIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const googleAuthProvider = new GoogleAuthProvider();
	const handleGoogleSignIn = () => {
		googleProviderLogin(googleAuthProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.error('error', error));
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				setError('');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error('error', error);
				setError(error.message);
			});
	};

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleSignIn} className="card-body">
							<div className="text-center lg:text-left">
								<h1 className="text-5xl font-bold">Login now!</h1>
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
									<p
										href="#"
										className="label-text-alt text-red-600 link link-hover"
									>
										{error}
									</p>
									<Link
										href="#"
										to="/signup"
										className="label-text-alt text-blue-600 link text-center link-hover"
									>
										Please create a new account
									</Link>
								</label>
							</div>
							<div className="form-control mt-2">
								<button className="btn btn-primary">Login</button>
							</div>
							<div className="form-control mt-2">
								<button
									onClick={handleGoogleSignIn}
									className="btn btn-outline btn-primary"
								>
									<FaGoogle />
									Create an account with Google
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
