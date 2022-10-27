import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './CourseItem';
import './Courses.css';
import LeftSideBar from './LeftSideBar';

const Courses = () => {
	const AllCategories = useLoaderData();

	const BannerImg = {
		backgroundImage:
			"url('https://templates.hibootstrap.com/eduon/default/assets/img/page-bg/page-bg-4.jpg')",
		height: '70vh',
		fontSize: '50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	};

	return (
		<div className="bg-cyan-600">
			<div style={BannerImg}>
				<h2 className="text-center font-bold pt-40 text-6xl text-blue-900">
					Courses
				</h2>
			</div>

			<div className="md:container md:mx-auto">
				<div className="coursePage py-20">
					<div>
						<LeftSideBar></LeftSideBar>
					</div>
					<div className="grid md:grid-cols-8 ">
						<div className="courseList">
							{AllCategories.map((categories) => (
								<CourseItem
									key={categories._id}
									categories={categories}
								></CourseItem>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courses;
