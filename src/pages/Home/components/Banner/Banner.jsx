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
        <div className='container banner-cards d-grid al-center'>
            <div className="card-banner d-flex al-center jc-space-between primary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Search engine optimization</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <button><img src={ArrowGreen} alt="Arrow Green" /></button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard1} alt="Image Card" className='banner-img'/>
            </div>

            <div className="card-banner d-flex al-center jc-space-between secondary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Pay-per-click adverting</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <Button><img src={ArrowGreen} alt="Arrow Green" /></Button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard2} alt="Image Card" className='banner-img'/>
            </div>

            <div className="card-banner d-flex al-center jc-space-between tertiary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Social Media Marketing</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <Button><img src={ArrowWhite} alt="Arrow Green" /></Button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard3} alt="Image Card" className='banner-img'/>
            </div>

            <div className="card-banner d-flex al-center jc-space-between primary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Email Marketing</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <Button><img src={ArrowGreen} alt="Arrow Green" /></Button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard4} alt="Image Card" className='banner-img'/>
            </div>

            <div className="card-banner d-flex al-center jc-space-between secondary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Content Creation</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <Button><img src={ArrowGreen} alt="Arrow Green" /></Button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard5} alt="Image Card" className='banner-img'/>
            </div>

            <div className="card-banner d-flex al-center jc-space-between tertiary">
                <div className='card-text d-flex flex-column jc-space-between'>
                    <h3>Analytics and Tracking</h3>
                    <div className='banner-btn d-flex al-center'>
                        <Link className='d-flex' to='/'>
                            <Button><img src={ArrowWhite} alt="Arrow Green" /></Button>
                            <p>Learn more</p>
                        </Link>
                    </div>
                </div>
                <img src={ImgCard6} alt="Image Card" className='banner-img'/>
            </div>
        </div>
        </>
    );
};

export default Banner;