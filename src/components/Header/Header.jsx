import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// ASSETS
import './Header.scss';
import ImgLogo from '/logo-header.svg';

// COMPONENTS
import Button from '../Button/Button';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    // Toggles the menu open and close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // Closes the menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    // Scrolls the window to the top smoothly
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Close the menu when the user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Disable body scroll when the menu is open
    useEffect(() => {
        if (isMenuOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`; 
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px'; 
        }
    }, [isMenuOpen]);
    return (
        <header>
            <div className="container header-container">

                <Link 
                    to='/' 
                    className="header-logo" 
                    onClick={() => {
                        closeMenu();
                        handleScrollToTop();
                    }}>
                    <img src={ImgLogo} alt="Logo"/>
                </Link>

                <div className='mobile-menu' onClick={toggleMenu}>
                    <Button buttonStyle='secondary'>
                        ☰
                    </Button>
                </div>
                <nav ref={navRef} className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className='header-close' onClick={closeMenu}>
                        <Button >
                            X
                        </Button>
                    </div>
                    <ul className="header-list d-flex al-center">
                        <li><Link to='/' onClick={() => { closeMenu(); handleScrollToTop(); }}>Home</Link></li>
                        <li><Link to='/aboutus' onClick={() => { closeMenu(); handleScrollToTop(); }}>About Us</Link></li>
                        <li><Link to='/services' onClick={() => { closeMenu(); handleScrollToTop(); }}>Services</Link></li>
                        <li><Link to='/usecases' onClick={() => { closeMenu(); handleScrollToTop(); }}>Use Cases</Link></li>
                        <li><Link to='/pricing' onClick={() => { closeMenu(); handleScrollToTop(); }}>Pricing</Link></li>
                        <li><Link to='/blog' onClick={() => { closeMenu(); handleScrollToTop(); }}>Blog</Link></li>
                        <Button to='/pricing' buttonStyle='primary' >
                            Request a quote
                        </Button>
                    </ul> 
                </nav>
            </div> 
        </header>
    );
} 

export default Header;