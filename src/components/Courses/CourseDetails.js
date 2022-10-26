import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
	const courseDetails = useLoaderData();
	const { title, details, image_url, category_id } = courseDetails;
	return (
		<div>
			<h1>this is course details{title}</h1>
			<p>{details}</p>
		</div>
	);
};

export default CourseDetails;
