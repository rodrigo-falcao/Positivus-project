import { Link } from 'react-router-dom';

// COMPONENTS
import Button from '../Button/Button';

// ASSETS
import './Header.scss';
import ImgLogo from '/logo-header.svg';

function Header() {
    return (
        <header>
            <div className="container header-container">
                <Link to='/' className="header-logo">
                    <img src={ImgLogo} alt="Logo" />
                </Link>
                <nav>
                    <ul className="header-list d-flex al-center">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/usecases'>Use Cases</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
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