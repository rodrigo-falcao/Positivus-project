import { useState } from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './WorkingCards.scss';

// COMPONENTS
import Button from '../Button/Button';
import ButtonMinus from '../../assets/button-.svg'
import ButtonPlus from '../../assets/button+.svg'

const WorkingCards = ({ data }) => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className='container'>
            <div className='working-cards'>
                {data.map((caseStudy, index) => (
                    <div
                        key={index}
                        className={`work-story ${expandedCard === index ? 'expanded' : ''}`}
                        onClick={() => toggleCard(index)}
                    >
                        <div className='d-flex al-center jc-space-between'>
                            <div className='d-flex al-center jc-center stroy-card-title'>
                                <h3>{caseStudy.title}</h3>
                                <p>{caseStudy.subtitle}</p>
                            </div>
                            <Link className='d-flex btn-case'>
                                <Button>
                                    <img
                                        src={expandedCard === index ? ButtonMinus : ButtonPlus}
                                        alt={expandedCard === index ? 'Collapse' : 'Expand'}
                                    />
                                </Button>
                            </Link>
                        </div>
                        {expandedCard === index && (
                            <>
                                <div className="divider"></div>
                                <div className="card-content">
                                    <p>{caseStudy.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingCards;