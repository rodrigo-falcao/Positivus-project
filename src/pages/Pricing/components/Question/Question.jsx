import React from 'react';

// COMPONENTS
import WorkingCards from '../../../../components/WorkingCards/WorkingCards';

const Question = () => {
    const questionCardsData = [
        {
            title: '01',
            subtitle: 'Are there any additional fees or charges that may apply?',
            description: 'Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business. Additionally, we ensure complete transparency in our pricing structure, so you can rest assured that there are no hidden fees or unexpected charges.',
        },
        {
            title: '02',
            subtitle: 'Can I change or cancel my plan at any time?',
            description: 'You can modify or cancel your plan at any time without any hassle, ensuring flexibility and convenience for your business needs. Our customer support team is always available to assist you with any changes or cancellations, making the process smooth and stress-free.',
        },
        {
            title: '03',
            subtitle: 'Do you offer a free trial or consultation?',
            description: 'We provide a free consultation to help you understand our services and how they can be tailored to meet your business goals effectively. During the consultation, our experts will analyze your requirements and provide personalized recommendations to ensure the best outcomes for your business.',
        },
        {
            title: '04',
            subtitle: 'How do you bill and invoice your clients?',
            description: 'Our billing process is transparent and straightforward, with detailed invoices provided to ensure clarity and trust in our services. We offer multiple payment options and provide timely reminders to ensure a seamless experience for our clients.',
        },
        {
            title: '05',
            subtitle: 'Are your services guaranteed to deliver results?',
            description: 'While results may vary, our proven strategies and expertise are designed to maximize your business’s success and growth potential. We continuously monitor and optimize our efforts to ensure that your business achieves the best possible outcomes in the competitive digital landscape.',
        },
        {
            title: '06',
            subtitle: 'Do you offer contract-based or monthly retainer-based pricing?',
            description: 'We offer both contract-based and monthly retainer-based pricing options to provide flexibility and meet your specific business requirements. Our team will work closely with you to determine the best pricing model that aligns with your goals and budget.',
        },
    ];
    return (
        <>
        <div className='container'>
            <div className=' title-content d-flex al-center '>
                    <h3>Case Studies</h3>
                    <div>
                        <p>
                            Explore Real-Life Examples of Our Proven Digital Marketing<br/>
                            Success through Our Case Studies
                        </p>
                    </div>
            </div>
            <WorkingCards data={questionCardsData} />
        </div>
        </>
    );
};

export default Question;