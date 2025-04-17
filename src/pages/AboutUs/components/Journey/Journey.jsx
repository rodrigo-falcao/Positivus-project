import React from 'react';

// ASSETS
import './Journey.scss';
import VectorGreen from '../../../../assets/about/Vector.svg'

const Journey = () => {
    const journeyData = [
        {
            year: "2019",
            title: "The Beginning",
            description: "Positivus was founded to help businesses navigate the digital world and achieve online success."
        },
        {
            year: "2021",
            title: "Industry Recognition",
            description: "Positivus was named among the top 50 global digital agencies, affirming our leadership."
        },
        {
            year: "2023",
            title: "Innovation and Growth",
            description: "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive."
        },
        {
            year: "2024",
            title: "Leading the Future",
            description: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing."
        }
    ];

    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Our Journey</h3>
            <div>
                <p>
                From humble beginnings to industry leaders, discover how Positivus has <br/>
                evolved to drive success for businesses worldwide.
                </p>
            </div>
        </div>
        <div className='container journey-container d-flex flex-column'>
            {journeyData.map((item, index) => (
                <div key={index} className='journey-years d-flex'>
                    <h3>{item.year}</h3>
                    <div className='journey-card'>
                        <img src={VectorGreen} alt="Vector" className='vector-img'/>
                        <div className='d-flex flex-column'>
                            <h3>{item.title}</h3>   
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Journey;