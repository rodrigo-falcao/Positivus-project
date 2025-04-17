import React from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './OtherServices.scss';
import ImgCard1 from '../../../../assets/home/img-card1.svg';
import ImgCard2 from '../../../../assets/home/img-card2.svg';
import ImgCard3 from '../../../../assets/home/img-card3.svg';
import ImgCard4 from '../../../../assets/home/img-card4.svg';
import ImgCard5 from '../../../../assets/home/img-card5.svg';
import ImgCard6 from '../../../../assets/home/img-card6.svg';
import ArrowGreen from '../../../../assets/arrow-green.svg';

// COMPONENTS
import Button from '../../../../components/Button/Button';

const OtherServices = () => {
    const servicesData = [
        { title: 'Search Engine Optimization', imgSrc: ImgCard2 },
        { title: 'Pay-Per-Click Advertising', imgSrc: ImgCard3 },
        { title: 'Social Media Marketing', imgSrc: ImgCard4 },
        { title: 'Email Marketing', imgSrc: ImgCard5 },
        { title: 'Content Creation', imgSrc: ImgCard6 },
        { title: 'Analytics and Tracking', imgSrc: ImgCard1 },
    ]
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Our Other Services</h3>
            <div>
                <p>
                    At our digital marketing agency, we offer a range of services to<br/> 
                    help businesses grow and succeed online. These services include:
                </p>
            </div>
        </div>
        <div className='container banner-cards d-grid al-center'>
            {servicesData.map((service, index) => (
                <div className="card-banner d-flex al-center jc-space-between primary" key={index}>
                    <div className='card-text d-flex flex-column jc-space-between'>
                        <h3>{service.title}</h3>
                        <div className='banner-btn d-flex al-center'>
                            <Link className='d-flex' to='/'>
                                <Button><img src={ArrowGreen} alt="Arrow Green" /></Button>
                                <p>Learn more</p>
                            </Link>
                        </div>
                    </div>
                    <img src={service.imgSrc} alt="Image Card" className='banner-img'/>
                </div>
            ))}
        </div>
        </>
    );
};

export default OtherServices;