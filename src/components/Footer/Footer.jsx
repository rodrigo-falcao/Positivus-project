import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Button from '../Button/Button';

// ASSETS
import './Footer.scss'; 
import ImgLogo from '/logo-white.svg';
import iconFacebook from '../../assets/social-Icon/icon-facebook.svg';
import iconLinkedin from '../../assets/social-Icon/icon-linkedin.svg';
import iconTwitter from '../../assets/social-Icon/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className="container footer-container">
            <div className="header-footer d-flex al-center jc-space-between">
                <Link to='/'> <img src={ImgLogo} alt="Logo" /></Link>
                <ul className="footer-list d-flex al-center">
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/usecases'>Use Cases</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
                <ul className="social-list d-flex al-center">
                    <li><a href="https://linkedin.com"><img src={iconLinkedin} alt="LinkedIn" /></a></li>
                    <li><a href="https://facebook.com"><img src={iconFacebook} alt="Facebook" /></a></li>
                    <li><a href="https://twitter.com"><img src={iconTwitter} alt="Twitter" /></a></li>
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
                <div className='input-footer d-flex al-center jc-space-around'>
                    <input type="email" placeholder="Email" />
                    <Button buttonStyle='terciary btn-footer' type="submit">Subscribe to news</Button>
                </div>
            </div>
            <div className="copy-footer d-flex al-center jc-start">
                <p>© 2025 Positivus. All rights reserved.</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;