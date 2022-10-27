import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/LogIn/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Blog from '../components/Blog/Blog';
import CourseDetails from '../components/Courses/CourseDetails';
import Courses from '../components/Courses/Courses';
import FAQ from '../components/FAQ/FAQ';
import Home from '../components/Home/Home';
import TermsAndCondition from '../components/Others/TermsAndCondition';
import ErrorPage from '../Error/ErrorPage';
import Main from '../Layout/Main';
import PrivateRoute from './Private/PrivateRoute';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},

			{
				path: '/courses/:id',
				element: (
					<PrivateRoute>
						<Courses></Courses>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://eduon-server-side.vercel.app/category/${params.id}`)
			},
			{
				path: '/courseDetails/:id',
				element: <CourseDetails></CourseDetails>,
				loader: ({ params }) =>
					fetch(`https://eduon-server-side.vercel.app/course/${params.id}`)
			},

			{
				path: '/faq',
				element: <FAQ></FAQ>
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			},
			{
				path: '/terms',
				element: <TermsAndCondition></TermsAndCondition>
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage></ErrorPage>
	}
]);
