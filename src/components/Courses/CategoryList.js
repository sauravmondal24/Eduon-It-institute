import React from 'react';
import './Courses.css';

import { Link } from 'react-router-dom';

const CategoryList = ({ category }) => {
	const { id, title, img } = category;

	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img src={img} alt="Shoes" className="rounded-xl" />
				</figure>
				<div className="card-body items-center text-start">
					<h2 className="card-title">{title}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions">
						<Link to={`/category/${id}`} className="btn btn-primary">
							Enroll Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
