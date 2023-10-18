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
import kvi from '../../assets/images/Tawk.svg';
import { BannerSlider } from '../slider/BannerSlider';
import { Icon } from '@iconify/react';
import './banner.css';
import { selectData } from './selectData';
import { useState } from 'react';

export const Banner = () => {
	const [active, setActive] = useState(false);
	const [select, setSelect] = useState('');
	const [showform, setShowform] = useState('false');
	const [showmanuform, setManuform] = useState('false');
	const [myform, setMyform] = useState('false');
	const selectHandler = () => {
		setActive(!active);
	};

	const updateSelectValue = (item) => {
		console.log(item.target.innerText);
		setSelect(item.target.innerText);
		setActive(!active);
	};
	const buttonHanddler = () => {
		setShowform(!showform);
	};
	const butnbarManuform = () => {
		setManuform(!showmanuform);
	};
	const toggleForm = () => {
		setMyform(!myform);
	};
	return (
		<div className='main-container '>
			<div className='banner-text'>
				<h1>On Time, Done Right.</h1>
				<p>
					Connecting customers and technicians for quick,<br></br> safe, and
					affordable bookings.
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

				{/* Social Toggle Buttons applied Transitions mover right left */}
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
					{/*Chat us Toggle Buttons open /close */}
					<div className='chatus-togglebtn'>
						<span>
							<Icon icon='fa6-solid:x' className='closingsvg' />
						</span>
						<span>
							<Icon
								icon='fluent:chat-24-regular'
								className='chatingsvg'
								onClick={buttonHanddler}
							/>
						</span>
					</div>
					{/*Chat us Form That are open on  Toggle Buttons open /close */}
					<div className={`chat-form  ${showform ? 'hide' : 'visibal'}`}>
						<div className='chatform-header'>
							<div className='cordinater-section' onClick={butnbarManuform}>
								<span>
									<Icon icon='mdi:customer-service' />
								</span>
								<span>
									<Icon icon='fe:bar' />
								</span>
							</div>

							<div className='chat-text-demo'>
								<p>
									We are live and ready to chat with you now. Say something to
									start a live chat.
								</p>
							</div>
						</div>
						<div className='chatform-middle-section'>
							<textarea className='text-area'></textarea>
						</div>
						<div className='chatform-footer-section'>
							<div className='addfree-chat'>
								<img src={kvi} />
								Add free<b>live chat to</b>your sight
							</div>
							<div className='chat-here'>
								<textarea placeholder='Write a Reply...'></textarea>
								<div className='imog-section'>
									<span>
										<Icon icon='cil:thumb-up' />
									</span>
									<span>
										<Icon icon='iconoir:attachment' />
									</span>
									<span>
										<Icon icon='mingcute:emoji-line' />
									</span>
								</div>
							</div>
						</div>
						{/* Form inner manu box  */}
						<div className={`manu-box ${showmanuform ? 'hide' : 'visibal'}`}>
							<div className='manu-item'>
								<span>
									<Icon icon='raphael:customer' />
								</span>
								<span>Change Name</span>
							</div>
							<div className='manu-item'>
								<span>
									<Icon icon='mdi-light:email' />
								</span>
								<span>Email Transcript</span>
							</div>
							<div className='manu-item'>
								<span>
									<Icon icon='ph:bell-thin' />
								</span>
								<span>Sound ON</span>
							</div>
							<div className='manu-item'>
								<span>
									<Icon icon='carbon:popup' />
								</span>
								<span>Add to Cart your website</span>
							</div>
						</div>
						{/* End Form inner manu box  */}
					</div>
				</div>
			</div>
		</div>
	);
};
