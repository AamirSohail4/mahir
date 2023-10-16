import { Link } from 'react-router-dom';
import appViewMobile from '../../assets/images/booked-company/app-view-mobile.webp';
import appleStoreIcon from '../../assets/images/booked-company/apple-store-icon.svg';
import googlePlaystoreIcon from '../../assets/images/booked-company/google-playstore-icon.svg';
import doorStep from '../../assets/images/icons/s1.svg';
import verifiedStep from '../../assets/images/icons/s2.svg';
import guaranteedStep from '../../assets/images/icons/s3.svg';
import adherenceStep from '../../assets/images/icons/s4.svg';
import minsStep from '../../assets/images/icons/s5.svg';
import fairServicesStep from '../../assets/images/icons/s6.svg';
import arrowRight from '../../assets/images/booked-company/arrow-right.svg';
import './company-app.css';

export const CompanyApp = () => {
	return (
		<div className='app-container'>
			<section className='app-info'>
				<h2>Book a Mahir</h2>
				<p>
					<strong>100,000 +</strong> Active Users
				</p>
				<div className='store-link-wrap'>
					<div className='store-links'>
						<Link
							to='https://apps.apple.com/pk/app/mr-mahir-home-maintenance/id1576178647'
							target='_blank'
						>
							<img src={appleStoreIcon} alt='' />
						</Link>
						<Link
							to='https://play.google.com/store/apps/details?id=com.mrmahir.customer&amp;utm_source=website&amp;utm_medium=home-page&amp;utm_campaign=app-clicks-from-web&amp;utm_term=app-clicks-from-web'
							target='_blank'
						>
							<img src={googlePlaystoreIcon} alt='' />
						</Link>
					</div>
					<div className='arrow-right'>
						<img src={arrowRight} alt='image' />
					</div>
				</div>
				<div className='app-mobile-image'>
					<picture>
						<source
							media='(max-width: 767px)'
							sizes='1px'
							srcSet='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w'
						/>
						<source
							media='(min-width: 768px)'
							srcSet={appViewMobile}
							type='image/webp'
						/>
						<source
							media='(min-width: 768px)'
							srcSet={appViewMobile}
							type='image/png'
						/>
						<img className='bg-img' src={appViewMobile} alt='App View' />
					</picture>
				</div>
			</section>
			<section className='why-choose-container'>
				<div className='why-choose-wrapper'>
					<div className='wrapper-left'>
						<div className='floatbox-container'>
							<div
								className='floatbox fb-6 active'
								data-index='6'
								style={{ zIndex: '6' }}
							>
								<p className='floatbox-icon'>
									<img src={fairServicesStep} alt='' />
								</p>
								<p className='floatbox-title'>Fair Services Charges</p>
							</div>
							<div className='floatbox fb-5' data-index='5'>
								<p className='floatbox-icon'>
									<img src={doorStep} alt='image' />
								</p>
								<p className='floatbox-title'>Doorstep Services</p>
							</div>
							<div className='floatbox fb-4' data-index='4'>
								<p className='floatbox-icon'>
									<img src={verifiedStep} alt='' />
								</p>
								<p className='floatbox-title'>Verified Experts</p>
							</div>
							<div className='floatbox fb-3' data-index='3'>
								<p className='floatbox-icon'>
									<img src={guaranteedStep} alt='' />
								</p>
								<p className='floatbox-title'>Guaranteed Results</p>
							</div>
							<div className='floatbox fb-2' data-index='2'>
								<p className='floatbox-icon'>
									<img src={adherenceStep} alt='' />
								</p>
								<p className='floatbox-title'>Adherence to SOPs</p>
							</div>
							<div className='floatbox fb-1' data-index='1'>
								<p className='floatbox-icon'>
									<img src={minsStep} alt='' />
								</p>
								<p className='floatbox-title'>60 mins Arrival Time</p>
							</div>
						</div>
					</div>
					<div className='wrapper-right'>
						<h2>Our Unique Selling Points Make Us the Most Reliable Choice</h2>
						<p>
							We understand your fears about letting a stranger come inside your
							home. We know that you cannot trust just any Tom, Dick, Or Harry
							with your home possessions and your family’s safety. That is why
							we have come up with services that cater to all your fears and
							concerns
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
