import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import './frontendlayout.css';
import { Footer } from './footer/Footer';
import { CopyRight } from './footer/CopyRight';

export const FrontEndLayout = () => {
	return (
		<div className='main-layout'>
			<Navbar />
			<Outlet />
			<Footer />
			<CopyRight />
		</div>
	);
};
