import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './style.css';

import { sliderimg } from './sliderData';

export const BrandSlider = () => {
	return (
		<Swiper
			autoplay={{
				delay: 1500,
			}}
			loop={true}
			modules={[Autoplay]}
			className='brand-slider'
			breakpoints={{
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}}
		>
			{sliderimg.map((item, index) => {
				return (
					<SwiperSlide className='myslides' key={index}>
						<img src={item} alt='img' />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
