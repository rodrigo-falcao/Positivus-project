import React from 'react';

// ASSETS
import './OtherServices.scss';
import ImgCard1 from '../../../../assets/home/img-card1.svg';
import ImgCard2 from '../../../../assets/home/img-card2.svg';
import ImgCard3 from '../../../../assets/home/img-card3.svg';
import ImgCard4 from '../../../../assets/home/img-card4.svg';
import ImgCard5 from '../../../../assets/home/img-card5.svg';
import ImgCard6 from '../../../../assets/home/img-card6.svg';
import ArrowGreen from '../../../../assets/arrow-green.svg';

// COMPONENTS
import BannerSection from '../../../../components/BannerSection/BannerSection';

const OtherServices = () => {
    const servicesData = [
        {
            title: 'Search engine optimization',
            contentModal: 'Search engine optimization (SEO) is the process of optimizing a website to improve its visibility and ranking on search engines like Google. This involves various techniques such as keyword research, on-page optimization, link building, and content creation. The goal of SEO is to increase organic traffic to a website and improve its online presence. Search engine optimization (SEO) is the process of optimizing a website to improve its visibility and ranking on search engines like Google. This involves various techniques such as keyword research, on-page optimization, link building, and content creation. The goal of SEO is to increase organic traffic to a website and improve its online presence.',
            img: ImgCard2,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
        {
            title: 'Pay-Per-Click Advertising',
            contentModal: 'Pay-per-click advertising (PPC) is an online advertising model where advertisers pay each time a user clicks on one of their ads. It is a way to buy visits to your site, rather than attempting to “earn” those visits organically. Pay-per-click advertising (PPC) is an online advertising model where advertisers pay each time a user clicks on one of their ads. It is a way to buy visits to your site, rather than attempting to “earn” those visits organically.',
            img: ImgCard3,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
        {
            title: 'Social Media Marketing',
            contentModal: 'Social media marketing is the use of social media platforms and websites to promote a product or service. It involves creating and sharing content on social media networks to achieve marketing and branding goals. Social media marketing is the use of social media platforms and websites to promote a product or service. It involves creating and sharing content on social media networks to achieve marketing and branding goals.',
            img: ImgCard4,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
        {
            title: 'Email Marketing',
            contentModal: 'Email marketing is a digital marketing strategy that involves sending emails to a list of subscribers or potential customers. It is used to promote products, services, or events, and to build relationships with customers. Email marketing is a digital marketing strategy that involves sending emails to a list of subscribers or potential customers. It is used to promote products, services, or events, and to build relationships with customers.',
            img: ImgCard5,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
        {
            title: 'Content Creation',
            contentModal: 'Content creation is the process of generating topic ideas that appeal to your buyer persona, creating written or visual content around those ideas, and making that information accessible to your audience as a blog, video, infographic, or other format. Content creation is the process of generating topic ideas that appeal to your buyer persona, creating written or visual content around those ideas, and making that information accessible to your audience as a blog, video, infographic, or other format.',
            img: ImgCard6,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
        {
            title: 'Analytics and Tracking',
            contentModal: 'Analytics and tracking are essential components of digital marketing. They involve collecting and analyzing data related to website traffic, user behavior, and marketing campaign performance. Analytics and tracking are essential components of digital marketing. They involve collecting and analyzing data related to website traffic, user behavior, and marketing campaign performance.',
            img: ImgCard1,
            arrow: ArrowGreen,
            color: 'primary',
            modalColor: 'modal-primary',
        },
    ]
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Our Other Services</h3>
            <div>
                <p>
                    At our digital marketing agency, we offer a range of services to<br/> 
                    help businesses grow and succeed online. These services include:
                </p>
            </div>
        </div>

        <BannerSection data={servicesData} />
        </>
    );
};

export default OtherServices;