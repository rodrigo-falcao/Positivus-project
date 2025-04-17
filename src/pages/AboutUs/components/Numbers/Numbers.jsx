import React from 'react';
import './Numbers.scss';

const Numbers = () => {
    const data = [
        { value: '8+', label: 'Years of Experience' },
        { value: '50+', label: 'Experts' },
        { value: '100+', label: 'Successful Campaigns' },
        { value: '20+', label: 'Industry Awards' },
        { value: '500%', label: 'ROI for our clients' },
    ];
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Our Impact in Numbers</h3>
            <div>
                <p>
                    A snapshot of the milestones and achievements<br/> that drive our success
                </p>
            </div>
        </div>
        <div className="container numbers-container">
            {data.map((item, index) => (
                <div key={index} className="number-item">
                    <h3 className="number-value">{item.value}</h3>
                    <p className="number-label">{item.label}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Numbers;