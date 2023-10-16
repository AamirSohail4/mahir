import { useState, useEffect } from 'react';
import './style.css';
import image1 from '../../assets/images/banner-slider/banner-homecare.webp';
import image2 from '../../assets/images/banner-slider/banner-homeservice2.webp';

export const BannerSlider = () => {
	const sliderimages = [image1, image2];
	const [animatedImage, setAnimatedImage] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setAnimatedImage((prevIndex) => {
				const nextIndex = prevIndex + 1;
				return nextIndex < sliderimages.length ? nextIndex : 0;
			});
		}, 4000);

		return () => {
			clearInterval(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='slider-image-wrap'>
			<img src={sliderimages[animatedImage]} alt='image' />
		</div>
	);
};
