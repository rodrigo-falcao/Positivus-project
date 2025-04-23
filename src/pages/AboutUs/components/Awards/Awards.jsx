import { useState, useEffect } from 'react';

// ASSETS
import './Awards.scss';
import ImgTextPresident from '../../../../assets/about/img-president.svg'
import CardAward1 from '../../../../assets/about/card-award1.svg'
import CardAward2 from '../../../../assets/about/card-award2.svg'
import CardAward3 from '../../../../assets/about/card-award3.svg'
import CardAward4 from '../../../../assets/about/card-award4.svg'
import JoinTeam from '../../../../assets/about/join-team.svg'

// COMPONENTS
import Button from '../../../../components/Button/Button';

const Awards = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        handleCloseModal();
    }
    useEffect(() => {
        if (isModalOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        };
    }, [isModalOpen]);
    // DATA
    const AwardsData = [
        { 
            img: CardAward1,
            title: "Best Small Business Digital Marketing Agency of the Year", 
            text: "Celebrating our success in delivering innovative strategies and measurable results for small business clients.",
        },
        { 
            img: CardAward2,
            title: "Innovative Website Design", 
            text: "Honoring our expertise in developing visually stunning, user-friendly websites that capture a brand’s essence and boost conversions.",
        },
        { 
            img: CardAward3,
            title: "Top Performing PPC Campaign of the Year", 
            text: "Acknowledging our ability to design and execute a high-impact pay-per-click campaign that drove exceptional client results.",
            },
        { 
            img: CardAward4,
            title: "Expertise in Social Media Marketing", 
            text: "Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engaging content.",
        }
    ]
    return (
        <>
        <div className='Awards'>
            <div className='container president-title d-flex al-center jc-space-between'>
                <img src={ImgTextPresident} alt="President Image" />
                <div className='president-text d-flex flex-column'>
                    <h3>
                        "At Positivus, we believe that success is built on innovation, collaboration, and a 
                        relentless focus on delivering results"
                    </h3>
                    <p>- John Smith, Founder of Positivus</p>
                </div>
            </div>
            <div className='container title-content d-flex al-center'>
                <h3>Awards & Recognition</h3>
                <div>
                    <p>
                        At Positivus, our commitment to excellence has been recognized<br/> 
                        by industry leaders. Here are some of our proudest achievements:
                    </p>
                </div>
            </div>
            {/* CARDS AREA */}
            <div className='container awards-item '>
                {AwardsData.map((award, index) => (
                    <div key={index} className='awards-card d-flex flex-column al-center'>
                        <img src={award.img} alt={award.title} />
                        <div className='awards-text d-flex flex-column'>
                            <h3>{award.title}</h3>
                            <p>{award.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* CAREER AREA */}
            <div className='container awards-carres d-flex jc-space-around al-center'>
                <div className='awards-carres-text'>
                    <h3>Join Our Team</h3>
                    <p>
                        At Positivus, we thrive on innovation and collaboration. 
                        We're always looking for passionate individuals to join 
                        our team and help businesses grow. Ready to make an impact?
                    </p>
                    <Button buttonStyle='secondary' onClick={handleOpenModal}>Explore Careers</Button>
                </div>
                <img src={JoinTeam} alt="Join Team" />
            </div>
            {isModalOpen && (
                <div className='modal-form'>
                    <div className='modal-content-form' onClick={(e) => e.stopPropagation()}>
                        <Button className='close-modal-form' onClick={handleCloseModal}>
                            X
                        </Button>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="">Linkedin</label>
                            <input type="text" placeholder='linkedin.com/yourprofile' required/>
                            <label htmlFor="">Github</label>
                            <input type="text" placeholder='github.com/yourprofile' required/>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='your.email@example.com' required/>
                            <textarea placeholder='Tell us about yourself (Optional)'></textarea>
                        </form>
                        <p></p>
                        <Button buttonStyle='secondary' onClick={handleCloseModal}>send contact form</Button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default Awards;