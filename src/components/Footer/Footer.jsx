import { Link } from 'react-router-dom';
import { useState } from 'react';

// COMPONENTS
import Button from '../Button/Button';

// ASSETS
import './Footer.scss'; 
import ImgLogo from '/logo-white.svg';
import iconFacebook from '../../assets/social-Icon/icon-facebook.svg';
import iconLinkedin from '../../assets/social-Icon/icon-linkedin.svg';
import iconTwitter from '../../assets/social-Icon/icon-twitter.svg';

const Footer = () => {
    // Scrolls the window to the top smoothly
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSent(false);
        // Simulate sending the email
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            // Clear the email field
            setEmail('');
        }, 1500);
    };
    return (
        <footer className="container footer-container">
            <div className="header-footer d-flex al-center jc-space-between">
                <Link to='/' onClick={handleScrollToTop}> <img src={ImgLogo} alt="Logo" /></Link>
                <ul className="footer-list d-flex al-center">
                    <li><Link to='/' onClick={handleScrollToTop}>Home</Link></li>
                    <li><Link to='/aboutus' onClick={handleScrollToTop}>About Us</Link></li>
                    <li><Link to='/services' onClick={handleScrollToTop}>Services</Link></li>
                    <li><Link to='/usecases' onClick={handleScrollToTop}>Use Cases</Link></li>
                    <li><Link to='/pricing' onClick={handleScrollToTop}>Pricing</Link></li>
                    <li><Link to='/blog' onClick={handleScrollToTop}>Blog</Link></li>
                </ul>
                <ul className="social-list d-flex al-center">
                    <li><a href="https://google.com" target='_blank'><img src={iconLinkedin} alt="LinkedIn" /></a></li>
                    <li><a href="https://google.com" target='_blank'><img src={iconFacebook} alt="Facebook" /></a></li>
                    <li><a href="https://google.com" target='_blank'><img src={iconTwitter} alt="Twitter" /></a></li>
                </ul>
            </div> 
            <div className="footer-contact d-flex al-center jc-space-between">
                <div className='list-contact'>
                    <h3>Contact us:</h3>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>  
                    <p>Address: 1234 Main St<br/>
                    Moonstone City, Stardust State 12345</p>
                </div>
                <form className='input-footer d-flex al-center jc-space-around' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <Button buttonStyle='terciary btn-footer' type="submit" disabled={isSending}>
                        {isSending ? 'Subscribing...' : 'Subscribe to news'}
                    </Button>
                </form>
            </div>
            <div className="footer-message">
                {isSent && <p className="success-message-footer">Subscribed successfully!</p>}
            </div>
            <div className="copy-footer d-flex al-center jc-start">
                <p>© 2025 Positivus. All rights reserved.</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;