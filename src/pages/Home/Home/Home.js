import React from 'react';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Service/>
            <Contact/>
        </div>
    );
};

export default Home;