import React from 'react';

// COMPONENTS
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';

// ASSETS
import './Banner.scss';
import ArrowGreen from '../../../../assets/arrow-green.svg'
import ArrowWhite from '../../../../assets/arrow-white.svg'
import ImgCard1 from '../../../../assets/home/img-card1.svg'
import ImgCard2 from '../../../../assets/home/img-card2.svg'
import ImgCard3 from '../../../../assets/home/img-card3.svg'
import ImgCard4 from '../../../../assets/home/img-card4.svg'
import ImgCard5 from '../../../../assets/home/img-card5.svg'
import ImgCard6 from '../../../../assets/home/img-card6.svg'

const Banner = () => {
    const cardBannerData = [
        {
            title: 'Search engine optimization',
            img: ImgCard1,
            color: 'primary',
        },
        {
            title: 'Pay-per-click adverting',
            img: ImgCard2,
            color: 'secondary',
        },
        {
            title: 'Social Media Marketing',
            img: ImgCard3,
            color: 'tertiary',
        },
        {
            title: 'Email Marketing',
            img: ImgCard4,
            color: 'primary',
        },
        {
            title: 'Content Creation',
            img: ImgCard5,
            color: 'secondary',
        },
        {
            title: 'Analytics and Tracking',
            img: ImgCard6,
            color: 'tertiary',
        }
    ]
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Services</h3>
            <div>
                <p>
                    At our digital marketing agency, we offer a range of services to <br/>
                    help businesses grow and succeed online. These services include:
                </p>
            </div>
        </div>
        <div className='container'>
            <div className='banner-cards d-grid al-center'>
                {cardBannerData.map((card, index) => (
                    <div className={`card-banner d-flex al-center jc-space-between ${card.color}`} key={index}>
                        <div className='card-text d-flex flex-column jc-space-between'>
                            <h3>{card.title}</h3>
                            <div className='banner-btn d-flex al-center'>
                                <Link className='d-flex' to='/'>
                                    <Button><img src={ArrowGreen} alt="Arrow Green" /></Button>
                                    <p>Learn more</p>
                                </Link>
                            </div>
                        </div>
                        <img src={card.img} alt="Image Card" className='banner-img'/>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Banner;