import React from 'react';
import './Courses.css';
import { FaStar } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const CourseItem = ({ categories }) => {
	const { _id, title, image_url, rating, details, lessons, student } =
		categories;

	return (
		<div>
			<div className="card w-72 bg-base-100 shadow-xl courseItemPart">
				<figure className="px-4 pt-5">
					<img src={image_url} alt="Shoes" className="rounded-xl" />
				</figure>

				<div className="card-body items-start text-start py-3 px-4">
					<h2 className="card-title text-base font-bold">
						{title.slice(0, 70)}
					</h2>
					<p className="text-start font-bold text-warning flex items-center">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar /> {rating.number} (rating)
					</p>
					<p>{details.slice(0, 80) + '...'}</p>
					<div className="card-actions">
						<Link to={`/courseDetails/${_id}`} className="btn btn-primary ">
							Enroll Now
						</Link>
					</div>
				</div>
				<div className="card-footer px-5 ">
					<hr />
					<div className="flex items-center justify-between py-2">
						<div>
							<h3 className="font-bold">Lessons:{lessons}</h3>{' '}
						</div>
						<div>
							<h3 className="font-bold">Student:{student}</h3>{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseItem;
