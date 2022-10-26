import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/course-category')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div className="bg-black-100 rounded-lg">
			<h2 className="bg-white text-2xl font-bold p-3">
				All Categories {categories.length}
				{categories.map((category) => (
					<>
						<ul>
							<li>
								<Link
									to={`/courses/${category.id}`}
									key={category.id}
									className="font-normal text-2xl"
								>
									{category.name}
								</Link>
							</li>
						</ul>
					</>
				))}
			</h2>
		</div>
	);
};

export default LeftSideBar;
