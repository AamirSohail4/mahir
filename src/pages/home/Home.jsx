import { Banner } from '../../component/banner/Baner';
import { BecomeApp } from '../../component/become_mahir/BecomeApp';
import { CompanyApp } from '../../component/book_company/CompanyApp';
import { CompanySection } from '../../component/company_section/CompanySection';
import { BrandSlider } from '../../component/slider/BrandSlider';

import './home-style.css';

export const Home = () => {
	return (
		<>
			<Banner />
			<CompanySection />
			<CompanyApp />
			<BecomeApp />
			<BrandSlider />
		</>
	);
};
