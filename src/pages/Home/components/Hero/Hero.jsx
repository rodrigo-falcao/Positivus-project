// ASSETS
import './Hero.scss';
import imgHero from '../../../../assets/home/img-hero.svg';
import CompanyAmazon from '../../../../assets/companies/logo-amazon.svg';
import CompanyDribble from '../../../../assets/companies/logo-dribble.svg';
import CompanyHubsport from '../../../../assets/companies/logo-hubspot.svg';
import CompanyNetflix from '../../../../assets/companies/logo-netflix.svg';
import CompanyNotion from '../../../../assets/companies/logo-notion.svg';
import CompanyZoom from '../../../../assets/companies/logo-zoom.svg';

// COMPONENTS
import Button from '../../../../components/Button/Button';

const Hero = () => {
    return (
        <>
            <div className='container hero-content d-flex al-center jc-space-between'>
                <div className="text-hero">
                    <h3>Navigating the digital landscape for success</h3>
                    <p>
                        Our digital marketing agency helps businesses grow 
                        and succeed online through a range of services 
                        including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <Button to='/pricing' buttonStyle='secondary'>Book a consultation</Button>
                </div>
                <div className="image-hero">
                    <img src={imgHero} alt="Hero" />
                </div> 
            </div>
            <div className="container companies d-flex al-center jc-center">
                <ul className='companies-list d-flex al-center jc-space-around'>
                    <li><img src={CompanyAmazon} alt="Amazon" /></li>
                    <li><img src={CompanyDribble} alt="Dribbble" /></li>
                    <li><img src={CompanyHubsport} alt="Hubspot" /></li>
                </ul>
                <ul className='companies-list d-flex al-center jc-space-around'>
                    <li><img src={CompanyNetflix} alt="Netflix" /></li>
                    <li><img src={CompanyNotion} alt="Notion" /></li>
                    <li><img src={CompanyZoom} alt="Zoom" /></li>
                </ul>
            </div>
        </>
    );
};

export default Hero;