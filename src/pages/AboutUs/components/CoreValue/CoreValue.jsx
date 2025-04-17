import React from 'react';

// ASSETS
import './CoreValue.scss';
import ImgCoreAbout1 from '../../../../assets/about/img-card-about.svg'
import ImgCoreAbout2 from '../../../../assets/about/img-card-about2.svg'

const CoreValue = () => {
    const CoreData = [
        {
            title: "Client Success First",
            imgCore: "",
            description: "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success."
        },
        {
            title: "Innovation",
            imgCore: ImgCoreAbout1,
            description: "We constantly strive to stay ahead of industry trends."
        },
        {
            title: "Collaboration",
            imgCore: ImgCoreAbout2,
            description: "We believe in the power of teamwork and partnership."
        },
        {
            title: "Transparency",
            imgCore: "",
            description: "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity."
        }
    ];
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Core Values</h3>
            <div>
                <p>
                    At the heart of everything we<br/> do are our core values:
                </p>
            </div>
        </div>
            <div className='container core-value-item'>
                {CoreData.map((value, index) => (
                <div key={index} className='core-value-card d-flex jc-space-between'>
                    <div className='core-value-text d-flex flex-column'>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                    {value.imgCore && ( 
                        <img src={value.imgCore} alt={value.title} />
                    )}
                </div>
            ))}
            </div>
        </>
    );
};

export default CoreValue;