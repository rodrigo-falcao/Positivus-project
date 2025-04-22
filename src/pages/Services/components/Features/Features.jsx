import React from 'react';
import { useState } from 'react';

// ASSETS
import './Features.scss';
import Vector from '../../../../assets/home/comand-carousel-green.svg'
import Vector01 from '../../../../assets/services/vector01.svg'
import Vector02 from '../../../../assets/services/vector02.svg'
import Vector03 from '../../../../assets/services/vector03.svg'
import Vector04 from '../../../../assets/services/vector04.svg'
import Vector05 from '../../../../assets/services/vector05.svg'
import Vector06 from '../../../../assets/services/vector06.svg'

// COMPONENTS
import Button from '../../../../components/Button/Button';
import CaseStories from '../../../../components/CaseStories/CaseStories';

const Features = () => {
    const engineData = [
        {
            img: Vector01,
            title: "Website Audit & Analysis",
            text: "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
        },
        {
            img: Vector02,
            title: "Keyword Research & Strategy",
            text: "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
        },
        {
            img: Vector03,
            title: "On-Page Optimization",
            text: "We optimize your website’s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
        },
        {
            img: Vector04,
            title: "Content Creation & Optimization",
            text: "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
        },
        {
            img: Vector05,
            title: "Link Building",
            text: "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
        },
        {
            img: Vector06,
            title: "Monitoring & Reporting",
            text: "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
        }
    ]
    const caseStoriesData = [
        {
            title: 'E-commerce Fashion Brand',
            content: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a significant increase in traffic and sales.',
            textModal: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a significant increase in traffic and sales. Our approach included keyword research, on-page optimization, and content creation, ensuring the brand stood out in a competitive market. Additionally, we focused on improving the website\'s technical performance, enhancing user experience, and building high-quality backlinks to further strengthen the brands online presence. These efforts resulted in sustained growth, increased customer engagement, and a stronger competitive edge in the market.',
        },
        {
            title: 'Local Restaurant Chain',
            content: 'By optimizing local SEO, we increased visibility, driving a boost in online reservations and foot traffic.',
            textModal: 'By optimizing local SEO, we increased visibility, driving a boost in online reservations and foot traffic. Our targeted approach helped the restaurant chain attract more customers and improve its online presence. Additionally, we focused on enhancing their Google My Business profiles, ensuring accurate and engaging information for potential customers. We also implemented a review management strategy to build trust and credibility, further increasing customer engagement. These efforts resulted in sustained growth, improved brand recognition, and a stronger connection with the local community.',
        },
        {
            title: 'Healthcare Provider',
            content: 'Through content optimization, we helped a healthcare provider rank higher, resulting in more inquiries and bookings.',
            textModal: 'Through content optimization, we helped a healthcare provider rank higher, resulting in more inquiries and bookings. Our efforts improved their online visibility and enhanced patient engagement. Additionally, we focused on creating high-quality, informative content tailored to the needs of their target audience, ensuring that patients could easily find the services they were looking for. We also implemented a targeted keyword strategy to improve search engine rankings for critical healthcare services, driving more organic traffic to their website. These efforts resulted in a significant increase in patient inquiries, improved trust in the provider\'s expertise, and a stronger online presence in the healthcare industry.',
        },
    ];
    return (
        <>
        <div className='container'>
            <div className='engine-container d-flex jc-space-around'>
                <div className='engine-title'>
                    <img src={Vector} alt="Vector graphic" />
                    <h3>Search engine <br/>optimization</h3>
                </div>
                <div className='engine-text d-flex flex-column'>
                    <p>
                        SEO is the process of improving your website’s 
                        visibility on search engines like Google. 
                        By optimizing your content and site structure, 
                        we help your business rank higher in search results, 
                        driving more organic traffic and potential customers.
                    </p>
                    <Button buttonStyle='primary'>Boost My Rankings</Button>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='engine-cards d-flex flex-column'>
                {engineData.map((feature, index) => (
                    <div key={index} className='engine-card d-flex al-center'>
                        <img src={feature.img} alt={feature.title} />
                        <div className='engine-text d-flex flex-column'>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container title-content d-flex al-center">
                <h3>Use Cases</h3>
                <p>
                    Explore Real-Life Examples of Our Proven Digital Marketing<br/> 
                    Success through Our Case Studies
                </p>
            </div>
            <CaseStories data={caseStoriesData} />
        </div>
        </>
    );
}

export default Features;