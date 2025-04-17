import './AboutUs.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Numbers from '../AboutUs/components/Numbers/Numbers';
import Journey from '../AboutUs/components/Journey/Journey';
import CoreValue from '../AboutUs/components/CoreValue/CoreValue';

// ASSETS
import ImgHeroAbout from '../../assets/about/hero-about.svg'
import Awards from './components/Awards/Awards';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <HeroSection
                title="Together for Success"
                description="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
                imgHero={ImgHeroAbout}
            />
            <Numbers />
            <Journey />
            <CoreValue />
            <Awards />
            <Footer />
        </div>
    );
};

export default AboutUs;

