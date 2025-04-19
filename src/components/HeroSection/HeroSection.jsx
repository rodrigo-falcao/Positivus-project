import React from 'react';

// ASSETS
import './HeroSection.scss';

const HeroSection = ({className, title, description, imgHero}) => {
    return (
        <div className='container'>
            <div className='hero-section d-flex al-flex-start jc-space-around'>
                <div className='hero-image'>
                    <img className='img-hero' src={imgHero} alt={title} />
                </div>
                <div className={`hero-content d-flex flex-column jc-start al-center ${className}`}>
                    <h1 className='text-h1-description'>{title}</h1>
                    <p className='text-hero-description'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;