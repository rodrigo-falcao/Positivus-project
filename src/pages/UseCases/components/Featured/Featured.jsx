import { Link } from 'react-router-dom';

// ASSETS
import './featured.scss';
import ArrowGren from '../../../../assets/arrow-background-green.svg';
import Button from '../../../../components/Button/Button';

// COMPONENTS
import CasesCards from '../../../../components/CasesCards/CasesCards';

const Featured = () => {
    const caseData = [
        {
            title: 'E-commerce Fashion Brand',
            description: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.',
            modalDescription: 'We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months. We also optimized the website for mobile devices, resulting in a 30% increase in mobile traffic and a 20% increase in mobile sales. Additionally, we launched a targeted PPC campaign that reduced cost-per-click (CPC) by 75%, further enhancing the brand\'s online visibility and sales performance.',
        },
        {
            title: 'Local Restaurant Chain',
            description: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.',
            modalDescription: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic. We also implemented a targeted social media marketing strategy that increased engagement by 200%, leading to a significant rise in brand awareness and customer loyalty.',
        },
        {
            title: 'Healthcare Provider',
            description: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.',
            modalDescription: 'Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings. We also implemented a comprehensive email marketing campaign that improved patient retention by 40%, further enhancing the provider\'s online presence and patient engagement.',
        },
        {
            title: 'B2B Software Company',
            description: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
            modalDescription: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic. We also launched a targeted content marketing campaign that generated high-quality leads, resulting in a 150% increase in conversion rates. Additionally, we implemented a comprehensive PPC strategy that reduced cost-per-click (CPC) by 60%, further enhancing the company\'s online visibility and lead generation efforts.'
        },
        {
            title: 'Travel Agency',
            description: 'We implemented a comprehensive PPC campaign that resulted in a 50% increase in bookings and a 30% reduction in cost-per-click (CPC).',
            modalDescription: 'We implemented a comprehensive PPC campaign that resulted in a 50% increase in bookings and a 30% reduction in cost-per-click (CPC). We also optimized the website for mobile devices, leading to a 40% increase in mobile traffic and a 25% increase in mobile bookings. Additionally, we launched a targeted email marketing campaign that improved customer retention by 35%, further enhancing the agency\'s online presence and customer engagement.'
        },
        {
            title: 'Real Estate Firm',
            description: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.',
            modalDescription: 'By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic. We also implemented a targeted social media marketing strategy that increased engagement by 200%, leading to a significant rise in brand awareness and customer loyalty.'
        },
    ]
    return (
        <>
        <div className='container'>
            <div className='featured-container d-flex jc-space-between al-flex-start flex-wrap'>
                <div className="featured-text d-flex flex-column jc-space-between">
                    <h3>Featured Success Story</h3>
                    <h4>Scaling Success for a Leading E-Commerce Brand</h4>
                    <p>
                        Through a comprehensive SEO and PPC strategy, we 
                        helped this e-commerce brand increase visibility, 
                        drive traffic, and boost sales.
                    </p>
                    <Link to='/' className='d-flex btn-text'>
                        <Button><img src={ArrowGren} alt=""/></Button>
                        <p>Read</p>
                    </Link>
                </div>
                <div className='featured-cards d-flex jc-space-between al-center flex-wrap'>
                    <div className='featured-card d-flex flex-column al-center'>
                        <h3>200%</h3>
                        <p>increase in organic traffic</p>
                    </div>
                    <div className='featured-card d-flex flex-column al-center'>
                        <h3>150%</h3>
                        <p>rise in online sales</p>
                    </div>
                    <div className='featured-card d-flex flex-column al-center'>
                        <h3>75%</h3>
                        <p>reduction in cost-per-click (CPC)</p>
                    </div>
                    <div className='featured-card d-flex flex-column al-center'>
                        <h3>300%</h3>
                        <p>improvement in conversion rate</p>
                    </div>
                </div>
            </div>
            <div className="title-content d-flex al-center">
                <h3>All Success Stories</h3>
                <p>
                    Explore Real-Life Examples of Our Proven Digital Marketing <br/>
                    Success through Our Case Studies
                </p>
            </div>
        </div>
        
        <CasesCards data={caseData} />
        </>
    );
};

export default Featured;