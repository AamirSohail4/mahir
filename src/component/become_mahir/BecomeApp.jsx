import { Link } from 'react-router-dom';
import becomeAppMobile from '../../assets/images/become-mahir.webp';
import googlePlaystoreIcon from '../../assets/images/booked-company/google-playstore-icon.svg';
import arrowRight from '../../assets/images/booked-company/arrow-right.svg';
import './style.css';

export const BecomeApp = () => {
	return (
		<div className='become-container'>
			<section className='become-mahir'>
				<div className='become-wrap'>
					<div className='become-column column_left'>
						<div className='app-view become-mobile-img'>
							<picture>
								<source
									media='(min-width: 768px)'
									srcSet={becomeAppMobile}
									type='image/webp'
								/>
								<source
									media='(min-width: 768px)'
									srcSet={becomeAppMobile}
									type='image/png'
								/>
								<img
									className='banner-bg'
									src={becomeAppMobile}
									alt='Become Mahir'
								/>
							</picture>
						</div>
					</div>
					<div className='become-column become-right'>
						<h2>Become a Mahir</h2>
						<p>
							<strong>161+</strong> Home Maintenance Services
						</p>
						<p className='vb-details with-bottom-margin'>
							<strong>38+</strong> Personal Care Services
						</p>
						<div className='become-arrow-wrap'>
							<div className='arrow-left'>
								<img src={arrowRight} alt='' />
							</div>
							<div className='our-apps'>
								<Link
									to='https://play.google.com/store/apps/details?id=com.mrmahir.technician'
									target='_blank'
								>
									<img src={googlePlaystoreIcon} alt='image' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
