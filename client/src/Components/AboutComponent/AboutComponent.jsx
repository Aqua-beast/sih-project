import React from 'react'
import './AboutComponent.css'

function AboutComponent() {
    return (
        <div className='contain'>
            <div className='about'>
                <span className='head'>About</span>
                <div className='container'>
                    <p className='container-desc'>
                        Our powerful sentiment analysis engine dives deep into the social media chatter to uncover the emotions and opinions behind the trends. Know whether the world is buzzing with excitement, concern, or curiosity.
                    </p>
                </div>
            </div>
            <div className='mission'>
                <span className='head'>Mission</span>
                <div className='container'>
                    <p className='container-desc'>Syntentanalysis is committed to advancing natural language understanding and text analysis technologies to empower individuals and organizations to make informed decisions, improve communication, and enhance efficiency. Our mission is to develop cutting-edge solutions that enable the extraction of valuable insights from text data, making information more accessible and actionable</p>
                </div>
            </div>
            <div className='values'>
                <span className='head'>Values</span>
                <div className='container'>
                    <p className='container-desc'>
                        <span className='small-head'>Innovation:</span> We foster a culture of innovation, continuously pushing the boundaries of text analysis technology to deliver the most advanced solutions to our customers.

                        <span className='small-head'>Integrity:</span> We uphold the highest ethical standards in our work, ensuring the responsible and ethical use of natural language processing to protect user privacy and data security.

                        <span className='small-head'>Collaboration:</span> We believe in the power of collaboration, working closely with our partners, clients, and the broader NLP community to drive progress and knowledge sharing.

                        <span className='small-head'>Accessibility:</span> We are dedicated to creating text analysis tools and services that are user-friendly and accessible to a wide range of users, regardless of technical expertise.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
