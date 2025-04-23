import { useState, useEffect } from 'react';

// ASSETS
import ArrowGren from '../../assets/home/arrow-green.svg';
import './StorieCard.scss';

// COMPONENTS
import Button from '../Button/Button';

const StorieCard = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const openModal = (titleModal, textModal) => {
        setModalContent({ titleModal, textModal });
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (isModalOpen) {
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
    }, [isModalOpen]);
    
    return (
        <>
        <div className='container case-stories d-flex jc-space-between'>
            {data.map((story, index) => (
                    <div key={index} className="case-story">
                    {story.title && <h3>{story.title}</h3>}
                    <p>{story.content}</p>
                    <div
                        className="d-flex btn-case"
                        onClick={() => openModal(story.titleModal, story.textModal)}
                    >
                        <p>Learn More</p>
                        <Button >
                            <img src={ArrowGren} alt="Arrow" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
        {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className='modal-close' onClick={closeModal}>
                        X
                    </button>
                    <h3>{modalContent.titleModal}</h3>
                    <p>{modalContent.textModal}</p>
                </div>
            </div>
        )}
        </>
    );
};

export default StorieCard;