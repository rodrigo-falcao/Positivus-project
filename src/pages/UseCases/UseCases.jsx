import './UseCases.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

// ASSETS
import HeroUsecases from '../../assets/usecases/hero-usecases.svg'
import Featured from './components/Featured/Featured';
import Testimonials from '../../components/Testimonials/Testimonials';
import CardFooter from './components/CardFooter/CardFooter';

const UseCases = () => {

    return (
        <div>
            <Header />
            <HeroSection 
                title="Proven Success Stories" 
                description="See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together." 
                imgHero={HeroUsecases}
            />
            <Featured />
            <Testimonials />
            <CardFooter />
            <Footer />
        </div>
    );
};

export default UseCases;