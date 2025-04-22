import { useState, useEffect } from 'react';

// ASSETS
import ArrowGren from '../../assets/home/arrow-green.svg';
import './CaseStories.scss';

// COMPONENTS
import Button from '../Button/Button';

const CaseStories = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', textModal: '' });
    const openModal = (title, textModal) => {
        setModalContent({ title, textModal });
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
        <div className='container case-stories d-flex  jc-space-between'>
                {data.map((story, index) => (
                        <div key={index} className="case-story">
                        <h3>{story.title}</h3>
                        <p>{story.content.substring(0, 100)}...</p>
                        <div
                            className="d-flex btn-case"
                            onClick={() => openModal(story.title, story.textModal)}
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
                        <h3>{modalContent.title}</h3>
                        <p>{modalContent.textModal}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CaseStories;