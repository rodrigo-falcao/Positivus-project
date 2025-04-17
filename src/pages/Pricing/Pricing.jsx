import './Pricing.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Price from './components/Price/Price';
import Question from './components/Question/Question';

const Pricing = () => {
    return (
        <div>
            <Header />
            <Price />
            <Question />
            <Footer />
        </div>
    );
};

export default Pricing;