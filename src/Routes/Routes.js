import { createBrowserRouter } from 'react-router-dom';
import Login from '../Auth/LogIn/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Blog from '../components/Blog/Blog';
import Courses from '../components/Courses/Courses';
import FAQ from '../components/FAQ/FAQ';
import Home from '../components/Home/Home';
import Main from '../Layout/Main';

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
				path: '/courses',
				element: <Courses></Courses>
			},
			{
				path: '/faq',
				element: <FAQ></FAQ>
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			}
		]
	}
]);
