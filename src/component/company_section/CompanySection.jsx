import { Link } from 'react-router-dom';
import './company_style.css';
import arrow_icon from '../../assets/icons/right-arrow.svg';

export const CompanySection = () => {
	return (
		<div className='company-container'>
			<div className='wrapper'>
				<h3>Mr. Mahir is Now Mahir Company!</h3>
				<p>
					Previously known as Mr. Mahir. Mahir Company is your go-to and
					on-demand expert for all your Home &amp; Personal Care Services. We
					are serving you 24/7 since 2019. The trust and love you have shown us
					over this period, has inspired us to go bigger &amp; better. Now
					accelerating &amp; expanding our operations to become even more
					accessible, reliable, fast, safe, and pocket-friendly for you, our
					users. And a pioneer of enablement and empowerment to our vendors.
				</p>
				<Link to='https://mahircompany.com/blog/category/news/' target='_blank'>
					<span>Read more</span>
					<img src={arrow_icon} alt='' />
				</Link>
			</div>
		</div>
	);
};
