import { useState } from 'react';

// ASSETS
import './Testimonials.scss';
import Arrowgren from '../../assets/arrow-green.svg';
import ComandCarousel from '../../assets/home/comand-carousel.svg';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. Their dedication and expertise have exceeded our expectations, and we couldn't be happier with the results.",
            name: "John Smith",
            position: "Marketing Director at XYZ Corp",
        },
        {
            text: "The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence. Their innovative strategies and personalized approach make them stand out from the competition.",
            name: "Jane Doe",
            position: "CEO at ABC Inc",
        },
        {
            text: "Positivus has been a game-changer for our business. Their expertise in digital marketing has helped us achieve remarkable growth. We are thrilled with the progress we've made and look forward to continuing our partnership with them.",
            name: "Michael Brown",
            position: "CTO at DEF Ltd",
        },
        {
            text: "Working with Positivus has been an incredible experience. Their team is knowledgeable, dedicated, and always goes the extra mile to deliver results. They have truly become an invaluable part of our success story.",
            name: "Emily Davis",
            position: "COO at GHI Solutions",
        },
        {
            text: "Positivus helped us refine our digital strategy and achieve our goals. Their insights and expertise have been invaluable to our success. We are grateful for their support and highly recommend their services to others.",
            name: "Robert Wilson",
            position: "Founder at JKL Enterprises",
        },
    ];
    // MUDANÇA DO CARD COM O CLIQUE DO BOTÃO
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    // MUDANÇA DO CARD COM O DESLIZAR DO MOUSE (versão mobile)
    let startX = 0; 
    let endX = 0; 

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX; 
    };

    const handleTouchMove = (e) => {
        endX = e.touches[0].clientX; 
    };

    const handleTouchEnd = () => {
        if (startX - endX > 50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        } else if (endX - startX > 50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        }
    };
    return (
        <>
        <div className="container title-content d-flex al-center">
            <h3>Testimonials</h3>
            <p>
                Hear from Our Satisfied Clients: Read Our Testimonials <br/>
                to Learn More about Our Digital Marketing Services.
            </p>
        </div>
        <div className='container'>
            <div className='testimonials-carousel'>
                <div
                    className="carousel"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="carousel-item">
                            <div className="carousel-text">
                                <p>{testimonial.text}</p>
                            </div>
                            <div className="carousel-name">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-controls">
                    <button className="prev" onClick={handlePrev}>
                        <img src={Arrowgren} alt="Arrow Green" />
                    </button>
                    <div className="carousel-indicators">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${
                                    index === currentIndex ? "active" : ""
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img src={ComandCarousel} alt="" />
                            </span>
                        ))}
                    </div>
                    <button className="next" onClick={handleNext}>
                        <img src={Arrowgren} alt="Arrow Green" />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;