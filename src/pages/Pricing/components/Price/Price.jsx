import React from 'react';

// ASSETS
import './Price.scss';
import Check from '../../../../assets/Pricing/check-price.svg'
import ImgPopular from '../../../../assets/Pricing/popular-img.png'

// COMPONENTS
import Button from '../../../../components/Button/Button';

const Price = () => {
    const priceData = [
        {
            title: 'Basic Plan',
            price: '500',
            img: '',
            features: [
                'Website optimization',
                'Social media setup and management (1 platform)',
                'Monthly progress report',
                'Email support',
                'Basic competitor analysis',
                'Initial SEO audit'
            ]
        },
        {
            title: 'Pro Plan',
            price: '1000',
            img: ImgPopular,
            features: [
                'Includes all from the Basic Plan',
                'Social media setup and management (up to 3 platforms)',
                'PPC ad campaign management',
                'Email and phone support',
                'On-page SEO improvements',
                'Monthly content recommendations',
            ]
        },
        {
            title: 'Elite Plan',
            price: '2000',
            img: '',
            features: [
                'Includes all from the Pro Plan',
                'Website design and development',
                'Comprehensive SEO strategy',
                'Social media setup and management (up to 5 platforms)',
                'Content marketing strategy and implementation',
                'In-depth analytics and reporting',
            ]
        }
    ];
    return (
        <>
        <div className="container">
            <div className="price-content">
                <h1 className="price-title">Pricing</h1>
                <p className="price-description">Elevate Your Online Presence: Competitive Pricing<br/> for Exceptional Results</p>
            </div>
            <div className="price-cards d-grid jc-center">
                {priceData.map((plan, index) => (
                    <div className="price-card d-flex flex-column jc-center" key={index}>
                        <h3 className="price-card-title">{plan.title}</h3>
                        <img className='price-img-popular' src={plan.img} alt="" />
                        <div className='price-card-cost d-flex al-baseline '>
                            <h3 className="price-card-price">${plan.price}</h3>
                            <p className="price-card-month">/month</p>
                        </div>
                        <div className='price-card-buttons d-flex flex-column'>
                            <Button buttonStyle='secondary'>Get Started</Button>
                            <Button buttonStyle='primary'>Request a quote</Button>
                        </div>
                        <ul className="price-card-features d-flex flex-column">
                            {plan.features.map((feature, featureIndex) => (
                                <li className='d-flex' key={featureIndex}>
                                    <img src={Check} alt="" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Price;