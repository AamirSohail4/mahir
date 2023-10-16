import './copyright.css';
import footerlogo from '../../assets/images/logo footer.png';
export const CopyRight = () => {
	return (
		<div className='copyright'>
			<div className='copyright-inner-section'>
				<div className='copyright-content'>
					<p>© Copyright 2022 Mrmahir.com (pvt) Ltd.</p>
				</div>
				<div className='copyright-content'>
					<img src={footerlogo} alt='' />
				</div>
			</div>
		</div>
	);
};
