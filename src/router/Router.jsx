import { Routes, Route } from 'react-router-dom';
import { FrontEndLayout } from '../layout/FrontEndLayout';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<FrontEndLayout />}>
				<Route index element={<Home />} />
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
};
