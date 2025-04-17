import React from 'react';
import './Services.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import OtherServices from '../../pages/Services/components/OtherServices/OtherServices';


// ASSETS
import ImgHeroServices from '../../assets/services/hero-services.svg'
import Features from './components/Features/Features';
import CardFooter from './components/CardFooter/CardFooter';

const Services = () => {
    return (
        <div>
            <Header />
            <HeroSection 
                title="Expert Digital Marketing Services" 
                description="Unlock your business’s full potential with tailored strategies designed to drive growth and deliver results." 
                imgHero={ImgHeroServices}
            />
            <Features />
            <OtherServices />
            <CardFooter />
            <Footer />
        </div>
    );
};

export default Services;