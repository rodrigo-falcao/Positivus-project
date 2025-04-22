import { useState } from 'react';

// COMPONENTS
import Button from '../Button/Button';

// ASSETS
import './BannerSection.scss';

const BannerSection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', contentModal: '', modalColor: '' });
    const openModal = (title, text, color) => {
        setModalContent({ title: title, contentModal: text, modalColor: color });
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
        <>
        <div className='container'>
            <div className='banner-cards d-grid al-center'>
                {data.map((data, index) => (
                    <div className={`card-banner d-flex al-center jc-space-between ${data.color}`} key={index}>
                        <div className='card-text d-flex flex-column jc-space-between'>
                            <h3>{data.title}</h3>
                            <div 
                            className='banner-btn d-flex al-center'
                            onClick={() => openModal(data.title, data.contentModal, data.modalColor)}
                            >
                                <Button>
                                    <img src={data.arrow} alt="Arrow" />
                                </Button>
                                <p>Learn more</p>
                            </div>
                        </div>
                        <img src={data.img} alt="Image Card" className='banner-img'/>
                    </div>
                ))}
            </div>
        </div>
        {isModalOpen && (
            <div className="modal-overlay-banner" onClick={closeModal}>
                <div className={`modal-banner ${modalContent.modalColor}`} onClick={(e) => e.stopPropagation()}>
                    <button className='modal-close-banner' onClick={closeModal}>
                        X
                    </button>
                    <h3>{modalContent.title}</h3>
                    <p>{modalContent.contentModal}</p>
                </div>
            </div>
        )}
        </>
    );
};

export default BannerSection;