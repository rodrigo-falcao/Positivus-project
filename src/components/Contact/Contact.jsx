import { useState } from 'react';

// ASSETS
import './Contact.scss';
import ImgContact from '../../assets/img-contact.png'

// COMPONENTS
import Button from '../Button/Button';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contactOption: 'sayHi', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSent(false);
        // Simulate sending the form data
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                message: '',
                contactOption: 'sayHi',
            });
        }, 1500);
    };
    return (
        <>
        <div className='container'>
            <div className='title-content d-flex al-center'>
                <h3>Contact US</h3>
                <div>
                <p>
                    Connect with Us: Let's Discuss Your <br/>
                    Digital Marketing Needs
                </p>
                </div>
            </div>
            <div className='contact-container d-flex al-center'>
                <form className='contact-form d-flex flex-column jc-space-between' onSubmit={handleSubmit}>
                    <div className="radio-options">
                        <label>
                            <input  
                            type="radio" 
                            name="contactOption" 
                            value="sayHi" 
                            checked={formData.contactOption === 'sayHi'}
                            onChange={handleChange}/>
                            <p>Say Hi</p>
                        </label>
                        <label>
                            <input 
                            type="radio" 
                            name="contactOption" 
                            value="getQuote" 
                            checked={formData.contactOption === 'getQuote'}
                            onChange={handleChange}/>
                            <p>Get a Quote</p>
                        </label>
                    </div>
                    <label className='label-form' htmlFor="name">Name *</label>
                    <input 
                        type="text" 
                        name='name'
                        placeholder="Name" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required/>
                    <label className='label-form' htmlFor="email">Email *</label>
                    <input 
                        type="email" 
                        name='email'
                        placeholder="Email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required />
                    <label className='label-form' htmlFor="message">Message *</label>
                    <textarea 
                        className="text-area" 
                        name='message'
                        placeholder="Message" 
                        id="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required></textarea>
                    <Button buttonStyle='secondary' type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                    <div className="success-message-container">
                        {isSent && <p className="success-message">Message sent successfully!</p>}
                    </div>
                </form>
                <img src={ImgContact} alt="Contact" />
            </div>
        </div>
        </>
    );
};

export default Contact;