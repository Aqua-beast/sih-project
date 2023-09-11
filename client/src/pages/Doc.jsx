import React from 'react'
import Navbar from '../components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const IntroComponent = () => {

    return (
        <div className='bg'>
            <Navbar />
            <div className="intro-container" >
                <h1 className="intro-heading">
                    Introducing {' '}
                    <TypeAnimation
                        sequence={[
                            'Social Sentiment Analyzer',
                            1000,
                            'Analyzing Social Media Trends',
                            1000,
                            'Understanding Public Perception',
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '3.2rem', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="intro-description">
                    Sentiment analysis is the process of harnessing the power of natural language processing and artificial intelligence to automatically determine the emotional tone and sentiment conveyed in text or speech. In the realm of social media, this technology becomes indispensable for gaining a deeper understanding of public sentiment, customer feedback, and brand perception.
                </p>
                <Link to="/Home" className="home-button">
                    Get Started
                </Link>
                <footer className="intro-footer">
                    &copy; 2023 Analyyzer
                </footer>
            </div>
        </div>
    );
};

function Doc() {
    return (
        <IntroComponent />
    )
}

export default Doc
