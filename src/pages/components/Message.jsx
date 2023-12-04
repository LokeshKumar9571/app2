import React from 'react'
import img2 from '../../images/img2.jpeg'


const Message = () => {
  return (
    <div className='message'>

    
<div className="messageInfo">
<img src={img2} alt="" id='a' />
<span>Just now</span>
</div>
<div className="messageContent">
<p>Hello</p>
<img src={img2} alt="" id='b' />
</div> 

    </div>
    
  )

  }

export default Message