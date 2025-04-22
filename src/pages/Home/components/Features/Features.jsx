// ASSETS
import './Features.scss';
import ImgFeatures from '../../../../assets/home/img-features.svg'
import ArrowGren from '../../../../assets/home/arrow-green.svg'


// COMPONENTS
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';
import WorkingCards from '../../../../components/WorkingCards/WorkingCards';
import StorieCard from '../../../../components/StorieCard/StorieCard'

const Features = () => {
    const workingCardsData = [
        {
            title: '01',
            subtitle: 'Consultation',
            description: 'We discuss your business goals, target audience, and current marketing efforts to create a tailored roadmap for success.',
        },
        {
            title: '02',
            subtitle: 'Research and Strategy Development',
            description: 'In-depth research helps us analyze your industry and competitors to develop a strategy aligned with your objectives.',
        },
        {
            title: '03',
            subtitle: 'Implementation',
            description: 'We execute strategies efficiently, ensuring all campaign aspects align with your goals for measurable growth.',
        },
        {
            title: '04',
            subtitle: 'Monitoring and Optimization',
            description: 'We track performance metrics and optimize campaigns using data-driven adjustments for sustained success.',
        },
        {
            title: '05',
            subtitle: 'Reporting and Communication',
            description: 'Regular updates and detailed reports keep you informed about campaign progress and outcomes.',
        },
        {
            title: '06',
            subtitle: 'Continual Improvement',
            description: 'We refine strategies over time to adapt to market changes, ensuring long-term growth and success.',
        },
    ];

    const StoryData = [
        {
            titleModal: 'E-commerce Fashion Brand',
            content: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
            textModal: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales. Our approach included keyword research, ad copy optimization, and A/B testing to ensure maximum ROI. We also focused on local SEO strategies to enhance the restaurant\'s visibility in local search results, driving more foot traffic to their locations. These efforts not only boosted online orders but also increased in-store visits, contributing to the overall growth of the business.',
        },
        {
            titleModal: 'B2B Software Company',
            content: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
            textModal: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic. Our comprehensive approach included on-page optimization, content marketing, and link-building strategies that significantly improved the company’s online presence and lead generation.',
        },
        {
            titleModal: 'E-commerce Fashion Brand',
            content: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
            textModal: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales. Our strategy focused on engaging content and targeted ads to reach a broader audience, resulting in higher engagement and sales conversion rates.',
        },
    ]

    return (
        <>
            <div className='container features-content d-flex al-center jc-space-around'>
                <div className='features-text'>
                    <h3>Let’s make things happen</h3>
                    <p>
                        Contact us today to learn more about how our 
                        digital marketing services can help your business 
                        grow and succeed online.
                    </p>
                    <Link to='/pricing'>
                        <Button buttonStyle='secondary'>Get your free proposal</Button>
                    </Link>
                </div>
                <img src={ImgFeatures} alt="Features" />
            </div>
            <div className='container title-content d-flex al-center '>
                <h3>Case Studies</h3>
                <div>
                    <p>
                        Explore Real-Life Examples of Our Proven Digital Marketing<br/>
                        Success through Our Case Studies
                    </p>
                </div>
            </div>
            <WorkingCards data={workingCardsData} />

            <div className="container title-content d-flex al-center">
                <h3>Our Working Process </h3>
                <p>
                    Step-by-Step Guide to Achieving <br/>
                    Your Business Goals. 
                </p>
            </div>

            <StorieCard data={StoryData} />
        </>
    );
};

export default Features;