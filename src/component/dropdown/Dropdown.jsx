import './style.css';
import './drop';
import { myFunction } from './drop';
export const Dropdown = () => {
	return (
		<>
			<div className='dropdown'>
				<button onClick={myFunction} className='dropbtn'>
					Select City
				</button>
				<div id='myDropdown' className='dropdown-content'>
					<div className='drop-seection'>
						<span></span>
					</div>
					<a href='#karchi'>Karachi</a>
					<a href='#Lahore'>La</a>
					<a href='#contact'>Contact</a>
				</div>
			</div>
		</>
	);
};
