import React from 'react';

// ASSETS
import './CardFooter.scss';
import ImgFeatures from '../../../../assets/usecases/card-footer-usecases.png';

// COMPONENTS
import Button from '../../../../components/Button/Button';


const CardFooter = () => {
    return (
        <>
        <div className='container'>
            <div className='card-footer-content d-flex al-center jc-space-around'>
                <div className='card-footer-text'>
                    <h3>Let’s Create Your Next Success Story</h3>
                    <p>
                        Contact us today to learn more about how our digital 
                        marketing services can help your business grow and succeed online.
                    </p>
                    <Button to='' buttonStyle='secondary'>Get your free proposal</Button>
                </div>
                <img src={ImgFeatures} alt="Features" />
            </div>
        </div>
        </>
    );
};

export default CardFooter;