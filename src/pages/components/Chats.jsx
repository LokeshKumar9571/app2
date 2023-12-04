import React from 'react'
import img2 from "../../images/img2.jpeg"

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userchat">
        <img src={img2} alt="" className='img2' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p id='p1'>Hello</p>
        </div>
      </div>

      <div className="userchat">
        <img src={img2} alt="" className='img2' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p id='p1'>Hello</p>
        </div>
      </div>

      <div className="userchat">
        <img src={img2} alt="" className='img2' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p id='p1'>Hello</p>
        </div>
      </div>

      <div className="userchat">
        <img src={img2} alt="" className='img2' />
        <div className="userChatInfo">
          <span>Jane</span>
          <p id='p1'>Hello</p>
        </div>
      </div>

    </div>
  )
}

export default Chats