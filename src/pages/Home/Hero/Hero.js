import React from 'react';
import './Hero.css';
// import resume from './enan-resume.pdf';
import { Link } from 'react-router-dom';
import devImg from '../../../Images/web-dev-1.png';
const Hero = () => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-100 lg:py-28'>
                <div className='text-left px-5 md:pl-20'>
                    <h1 className='lg:text-7xl text-4xl text-slate-800 font-bold'>Hi I'm <br /> <span className='text-amber-500'>Abu Naem</span></h1>
                    <h3 className='text-slate-800 lg:text-3xl text-2xl font-semibold mt-6'>Full-stack developer specializing in MERN stack development</h3>
                    <button className='bg-blue-200 text-blue-900 px-6 py-3 font-semibold mt-8 rounded-lg' >
                        <a download="" href="https://moonlit-lily-0300ec.netlify.app//Update-Resume.pdf">Download</a>
                    </button>
                </div>
                <div>
                    <img className='w-96 mx-auto md:w-auto' src={devImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;