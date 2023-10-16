import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export const Navbar = () => {
	return (
		<div className='main-navbar navbar-radius '>
			<div className='logo-img'>
				<Link to='#'>
					<img src={logo} />
				</Link>
			</div>
			<div className='login-link'>
				<Link to='/login'>LogIn</Link>
			</div>
		</div>
	);
};
