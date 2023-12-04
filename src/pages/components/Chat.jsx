import React from 'react'
import cam2 from "../../images/cam2.png"
import user from "../../images/user.png"
import more from "../../images/more.png"
import Messages from './Messages'

const Chat = () => {
  return (
  
    <div className='chat'>
   
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
       
       <img src={cam2} alt="" />
        <img src={user} alt="" />
        <img src={more} alt="" />

        </div>
    
      </div>
     
      <Messages/>
      
    </div>
  
  )
}

export default Chat