import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryList from './CategoryList';
import './Courses.css';
import LeftSideBar from './LeftSideBar';

const Courses = () => {
	const [categories, setCategories] = useState([]);

	const BannerImg = {
		backgroundImage:
			"url('https://templates.hibootstrap.com/eduon/default/assets/img/page-bg/page-bg-4.jpg')",
		height: '70vh',
		fontSize: '50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};

	useEffect(() => {
		fetch('http://localhost:5000/course-category')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div className="bg-cyan-600">
			<div style={BannerImg}>
				<h2 className="text-center font-bold pt-40 text-6xl text-neutral-50">
					Courses
				</h2>
			</div>

			<div className="container">
				<div className="row">
					<div className=" grid grid-cols-4">
						<LeftSideBar></LeftSideBar>
					</div>
					<div className="grid grid-cols-8 py-20">
						<div className="courseList">
							{categories.map((category) => (
								<CategoryList
									key={category.id}
									category={category}
								></CategoryList>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
