import React from 'react';
import './Home.scss'

// COMPONENTS
import Header from '../../components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Team from './components/Team/Team';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Banner />
            <Features />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;