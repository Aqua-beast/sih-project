import React from 'react'
import './GetStarted.css'
import { TypeAnimation } from 'react-type-animation';
import {AiOutlineArrowRight} from 'react-icons/ai'

function GetStarted() {
    return (
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
                Our powerful sentiment analysis engine dives deep into the social media chatter to <b>uncover the emotions</b> and opinions behind the trends. Know whether the world is buzzing with excitement, concern, or curiosity.
                </p>
            <a href='/' className="home-button">
                Get Started <AiOutlineArrowRight />
            </a>
        </div>
    )
}

export default GetStarted
