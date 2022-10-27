import React from 'react';

const Blog = () => {
	return (
		<div className="md:container md:mx-auto py-20">
			<h2 className="text-4xl text-center text-warning font-bold pb-10">
				BLOG PAGE
			</h2>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">what is cors?</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						What is CORS? CORS stands for Cross-Origin Resource Sharing . It
						allows us to relax the security applied to an API. This is done by
						bypassing the Access-Control-Allow-Origin headers, which specify
						which origins can access the API. Cross-Origin Resource Sharing
						(CORS) is an HTTP-header based mechanism that allows a server to
						indicate any origins (domain, scheme, or port) other than its own
						from which a browser should permit loading resources
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						Why are you using firebase? What other options do you have to
						implement authentication?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						Firebase helps you develop high-quality apps, grow your user base,
						and earn more money. Each feature works independently, and they work
						even better together.
					</p>
					<p>
						Usually, authentication by a server entails the use of a user name
						and password. Other ways to authenticate can be through cards,
						retina scans, voice recognition, and fingerprints.
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						How does the private route work?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						The private route component is similar to the public route, the only
						change is that redirect URL and authenticate condition. If the user
						is not authenticated he will be redirected to the login page and the
						user can only access the authenticated routes If he is authenticated
						(Logged in).
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						What is Node? How does Node work?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<p>
						Node. js is a JavaScript runtime environment that achieves low
						latency and high throughput by taking a “non-blocking” approach to
						serving requests. In other words, Node. js wastes no time or
						resources on waiting for I/O requests to return.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
