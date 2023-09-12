import React from 'react';
import { BiUserCircle } from 'react-icons/bi'
import { FaSearch, FaEllipsisV } from 'react-icons/fa';

const ChatNavbar = ({ contactName }) => {
    return (
        <div className="chat-navbar">
            <div className='chat-navbar-info'>
                <BiUserCircle style={{marginRight: '1rem'}} size={40} />
                <div className="contact-info">
                    <h2>{contactName}</h2>
                    <span>Last seen 2 hours ago</span>
                </div>
            </div>
            <div className="menu-icons">
                <i className="fa"><FaSearch /></i>
                <i className="fa"><FaEllipsisV /></i>
            </div>
        </div>
    );
};

export default ChatNavbar;
