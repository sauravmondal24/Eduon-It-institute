import React from 'react';
import './Courses.css';

import { Link } from 'react-router-dom';

const CourseItem = ({ categories }) => {
	const { _id, title, image_url } = categories;

	return (
		<div>
			<div className="card w-72 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src={image_url} alt="Shoes" className="rounded-xl" />
				</figure>
				<div className="card-body items-center text-start">
					<h2 className="card-title">{title}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions">
						<Link to={`/course/${_id}`} className="btn btn-primary">
							Enroll Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseItem;
