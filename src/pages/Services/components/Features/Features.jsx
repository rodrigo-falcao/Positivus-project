import React from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import './Features.scss';
import Vector from '../../../../assets/home/comand-carousel-green.svg'
import Vector01 from '../../../../assets/services/vector01.svg'
import Vector02 from '../../../../assets/services/vector02.svg'
import Vector03 from '../../../../assets/services/vector03.svg'
import Vector04 from '../../../../assets/services/vector04.svg'
import Vector05 from '../../../../assets/services/vector05.svg'
import Vector06 from '../../../../assets/services/vector06.svg'
import ArrowGren from '../../../../assets/home/arrow-green.svg'

// COMPONENTS
import Button from '../../../../components/Button/Button';

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
            <div className='container case-stories d-flex  jc-space-between'>
                <div className='case-story'>
                    <h3>E-commerce Fashion Brand</h3>
                    <p>
                        We implemented a tailored SEO strategy that boosted organic 
                        search rankings, leading to a 150% increase in website traffic 
                        and a 50% rise in online sales within six months.
                    </p>
                    <Link to='/' className='d-flex btn-case'>
                        <p>Learn More</p>
                        <Button><img src={ArrowGren} alt="" /></Button>
                    </Link>
                </div>
                <div className='case-story'>
                    <h3>Local Restaurant Chain</h3>
                    <p>
                        By optimizing local SEO and enhancing Google My Business profiles, 
                        we increased visibility, driving a 300% boost in online reservations 
                        and foot traffic. This is a great example of SEO can drive business.
                    </p>
                    <Link to='/' className='d-flex btn-case'>
                        <p>Learn More</p>
                        <Button><img src={ArrowGren} alt="" /></Button>
                    </Link>
                </div>
                <div className='case-story'>
                    <h3>Healthcare Provider</h3>
                    <p>
                        Through content optimization and targeted keyword strategy, 
                        we helped a healthcare provider rank on the first page for 
                        critical services, resulting in a 180% increase in inquiries 
                        and patient bookings.
                    </p>
                    <Link to='/' className='d-flex btn-case'>
                        <p>Learn More</p>
                        <Button><img src={ArrowGren} alt="" /></Button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Features;