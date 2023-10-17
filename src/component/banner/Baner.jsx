import handy from '../../assets/images/handyman1.webp';
import cleaning1 from '../../assets/images/cleaning1.webp';
import mbm1 from '../../assets/images/mbm1.png';
import solar from '../../assets/images/solar.webp';
import inspection from '../../assets/images/home-inspection.webp';
import beautician1 from '../../assets/images/beautician1.png';
import mahir from '../../assets/images/mahir.svg';
import chat from '../../assets/images/chat.svg';
import mobile from '../../assets/images/mobile.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
import { BannerSlider } from '../slider/BannerSlider';
// import './banner';
import './banner.css';
import { selectData } from './selectData';
import { useState } from 'react';

export const Banner = () => {
	const [active, setActive] = useState(false);
	const [select, setSelect] = useState('');

	const selectHandler = () => {
		setActive(!active);
	};

	const updateSelectValue = (item) => {
		console.log(item.target.innerText);
		setSelect(item.target.innerText);
		setActive(!active);
	};

	return (
		<div className='main-container '>
			<div className='banner-text'>
				<h1>On Time, Done Right.</h1>
				<p>
					Connecting customers and technicians for quick, safe, and affordable
					bookings.
				</p>
			</div>
			<div className='select-city-container'>
				<h4>Select City</h4>
				<input
					type='text'
					value={select}
					readOnly
					placeholder='Please select city'
					onClick={selectHandler}
				/>
				<div
					className={active ? 'select-content active' : 'select-content hide'}
				>
					<ul>
						{selectData.map((item, index) => {
							return (
								<li key={index} onClick={updateSelectValue}>
									<img src={item.icon} alt='' />
									<span>{item.label}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className='banner-content-leftside'>
				<div className='services-leftside'>
					<div className='services-box'>
						<div className='img-box'>
							<img src={handy} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner'>Home Services</span>
						</div>
					</div>
					<div className='services-box'>
						<div className='img-box'>
							<img src={cleaning1} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner'>Cleaning Services</span>
						</div>
					</div>
					<div className='services-box'>
						<div className='img-box'>
							<img src={beautician1} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner'>Persanal Care</span>
						</div>
						<span className='inner-sec'>Femails Only</span>
					</div>
					<div className='services-box'>
						<div className='img-box'>
							<img src={solar} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner'>Soller Services</span>
						</div>
					</div>
					<div className='services-box'>
						<div className='img-box'>
							<img src={inspection} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner-inspection'>Home inspection </span>
						</div>
					</div>
					<div className='services-box'>
						<div className='img-box'>
							<img src={mbm1} alt='' />
						</div>
						<div className='services-text'>
							<span className='inner'>
								Smart Home
								<img src={mahir} alt='' />
							</span>
						</div>
					</div>
				</div>
				<div className='banner-content-rightside'>
					<BannerSlider />
				</div>
				<div className='contact-info'>
					<div className='social-info'>
						<div className='whatimg'>
							<img src={whatsapp} alt='' />
						</div>
						<div>0301-9858485</div>
					</div>
					<div className='social-info '>
						<div className='whatimg '>
							<img src={mobile} alt='' />
						</div>
						<div>0301-9696321</div>
					</div>
					<div className='social-info '>
						<div className='whatimg   chat-img '>
							<img src={chat} alt='' />
						</div>
						<div>chat</div>
					</div>
				</div>
			</div>
		</div>
	);
};
