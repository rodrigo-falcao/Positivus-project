import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ASSETS
import './CasesCards.scss';
import ArrowGren from '../../assets/arrow-background-green.svg';

// COMPONENTS
import Button from '../Button/Button';

const CasesCards = ({ data }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedCase, setSelectedCase] = useState({});
    
    const handleOpenModal = (caseItem) => {
        setSelectedCase(caseItem);
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setSelectedCase({});
    };

    useEffect(() => {
        if (isOpenModal) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        };
    }, [isOpenModal]);

    return (
        <>
        <div className='container'>
            <div className='case-cards'>
                {data.map((caseItem, index) => (
                    <div className='case-card' key={index}>
                        <h3>{caseItem.title}</h3>
                        <p>{caseItem.description}</p>
                        <Link 
                        className='d-flex btn-case-card al-center'
                        onClick={() => handleOpenModal(caseItem)}
                        >
                            <Button><img src={ArrowGren} alt=""/></Button>
                            <p>Learn More</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        {isOpenModal && (
            <div className='modal-overlay-cards' onClick={handleCloseModal}>
                <div className='modal-content-cards' onClick={(e) => e.stopPropagation()}>
                    <button className='modal-close-cards' onClick={handleCloseModal}>
                        X
                    </button>
                    <h3>{selectedCase.title}</h3>
                    <p>{selectedCase.modalDescription}</p>
                </div>
            </div>
        )}
        </>
    );
};

export default CasesCards;