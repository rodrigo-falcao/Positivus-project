import { Link } from 'react-router-dom';

// ASSETS
import './CasesCards.scss';
import ArrowGren from '../../assets/arrow-background-green.svg';

// COMPONENTS
import Button from '../Button/Button';

const CasesCards = ({ data }) => {
    return (
        <>
        <div className='container'>
            <div className='case-cards'>
                {data.map((caseItem, index) => (
                    <div className='case-card' key={index}>
                        <h3>{caseItem.title}</h3>
                        <p>{caseItem.description}</p>
                        <Link className='d-flex btn-case-card al-center'>
                            <Button><img src={ArrowGren} alt=""/></Button>
                            <p>Learn More</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default CasesCards;