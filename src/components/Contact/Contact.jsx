// ASSETS
import React from 'react';
import './Contact.scss';
import ImgContact from '../../assets/img-contact.png'

// COMPONENTS
import Button from '../Button/Button';

const Contact = () => {
    return (
        <>
        <div className='container title-content d-flex al-center'>
            <h3>Contact US</h3>
            <div>
            <p>
                Connect with Us: Let's Discuss Your <br/>
                Digital Marketing Needs
            </p>
            </div>
        </div>
        <div className='container contact-container d-flex al-center'>
            <div className='contact-form d-flex flex-column jc-space-between'>
                <div className="radio-options">
                    <label>
                        <input  type="radio" name="contactOption" value="sayHi" defaultChecked/>
                        <p>Say Hi</p>
                    </label>
                    <label>
                        <input type="radio" name="contactOption" value="getQuote" />
                        <p>Get a Quote</p>
                    </label>
                </div>
                <label className='label-form' htmlFor="name">Name *</label>
                <input type="text" placeholder="Name" id="name" />
                <label className='label-form' htmlFor="email">Email *</label>
                <input type="email" placeholder="Email" id="email" />
                <label className='label-form' htmlFor="message">Message *</label>
                <textarea className="text-area" placeholder="Message" id="message"></textarea>
                <Button buttonStyle='secondary' type="submit">Send Message</Button>
            </div>
            <img src={ImgContact} alt="Contact" />
        </div>
        </>
    );
};

export default Contact;