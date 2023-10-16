import './footer.css';
import googlepaly from '../../assets/images/googleplay.svg';
import appleStoreIcon from '../../assets/images/apple.svg';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
export const Footer = () => {
	return (
		<div className='footer-section'>
			<div className='footer-inner-content'>
				<div className='inner-about-us'>
					<h5 className='title'>About Us</h5>
					<p>
						Previously known as Mr. Mahir, Mahir Company is your go-to and
						on-demand expert for all your Home & Personal Care needs. We are
						serving you 24/7 since 2019. Now as Mahir Company, we are offering
						more accessible, reliable, fast, safe, and pocket-friendly services
						to you.
					</p>
				</div>
				<div className='inner-about-Main Services'>
					<h5 className='title'>Main Services</h5>
					<ul>
						<li>
							<Link to=''>Home Services</Link>
						</li>
						<li>
							<Link to=''>Cleaning Services</Link>
						</li>
						<li>
							<Link to=''>Maintained by</Link>
						</li>
						<li>
							<Link to=''>Contact Us</Link>
						</li>
						<li>
							<Link to=''>Maher</Link>
						</li>
						<li>
							<Link to=''>FAQs</Link>
						</li>
						<li>
							<Link to=''>About us</Link>
						</li>
						<li>
							<Link to=''>Terms & Condition</Link>
						</li>
						<li>
							<Link to=''>Privacy Policy</Link>
						</li>
						<li>
							<Link to=''>Blogs</Link>
						</li>
					</ul>
				</div>
				<div className='inner-about-Contect with us'>
					<h5 className='title'>Contect Us</h5>
					<div className='social-icon'>
						<ul>
							<li>
								<Link to='/'>
									<Icon icon='ic:round-phone' className='myicon' />
									<span>+92-9837747377</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<span>
										<Icon icon='ion:logo-tiktok' className='myicon' />
									</span>
									<span>Tiktok</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<span>
										<Icon icon='fa-brands:pinterest-p' className='myicon' />
									</span>
									<span>Pinterest</span>
								</Link>
							</li>

							<li>
								<Link to='/'>
									<Icon icon='ri:facebook-fill' className='myicon' />
									<span>Facebook</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<Icon icon='ant-design:twitter-outlined' className='myicon' />
									<span>Twitter</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<Icon icon='ant-design:youtube-filled' className='myicon' />
									<span>Youtube</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='inner-about-News-allert'>
					<h5 className='title'>New Allert</h5>
					<div className='input-mailbox'>
						<label className='sapm-email'>We dont spam you.</label>
						<input type='text' className='inputfield' placeholder='Email' />
					</div>
					<div className='aap-buttons'>
						<img src={googlepaly} alt='' />
						<img src={appleStoreIcon} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};
