import React from 'react'
import ChatNavbar from './ChatNavbar'
import {FaLocationArrow} from 'react-icons/fa'

const ChatBox = ({text,analyzeSentiment,handleTextChange}) => {
  return (
    <div className='sentiment-box'>
      <div className='whats-app-navbar'>
      <ChatNavbar contactName='Rohan' />
      </div>
      <div className='chat'>
        <div className='left-chats'>
          <div className='chat1'>
            <p>hii ..how r u ?</p>
          </div>
        
        </div>
        <div className='right-chats'>
          <div className='chat1'>
            <p>Hello, I am great :). Thanks for asking hope you r good too ?</p>
          </div>
        
        </div>
        <div className='left-chats'>
          <div className='chat1'>
            <p>So, what you been upto for as of now ?</p>
          </div>
        
        </div>
      </div>
    <div className="text-area">
      <textarea
        placeholder="Message"
        rows="2"
        cols="60"
        value={text}
        onChange={handleTextChange}
      />
      <button className='button-whatsapp' onClick={analyzeSentiment}><FaLocationArrow color='white' size={28}/></button>
      </div>
    </div>
  )
}

export default ChatBox