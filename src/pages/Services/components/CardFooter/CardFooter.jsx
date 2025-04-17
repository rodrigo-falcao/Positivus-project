import React from 'react';

// ASSETS
import './CardFooter.scss';
import ImgCardFooter from '../../../../assets/services/card-footer.svg';

// COMPONENTS
import Button from '../../../../components/Button/Button';

const CardFooter = () => {
    return (
        <>
        <div className="container">
            <div className="card-footer d-flex al-center jc-space-between">
                <div className='card-text d-flex flex-column'>
                    <h3>Ready to Elevate Your Search Rankings?</h3>
                    <p>
                        Our proven SEO strategies are designed to help your business 
                        achieve long-lasting success in search engines. Whether you want 
                        to boost organic traffic, improve keyword rankings, or increase
                        conversions, we’re here to make it happen.
                    </p>
                    <h4>Let's work together to grow your online presence.</h4>
                    <Button buttonStyle='terciary'>Start My SEO Journey</Button>
                </div>
                <img src={ImgCardFooter} alt="Image Footer" />
            </div>
        </div>
        </>
    );
};

export default CardFooter;