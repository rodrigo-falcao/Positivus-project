import React from 'react';
import './Blog.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';

// ASSETS
import ImgHeroBlog from '../../assets/home/img-hero.svg';

const Blog = () => {
    return (
        <div>
            <Header />
            <HeroSection
                className="hero-blog"
                title="PPC vs. Organic Marketing: Which One Is Right for Your Business?"
                description="PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance."
                imgHero={ImgHeroBlog}
            />
            <Footer />
        </div>
    );
};

export default Blog;