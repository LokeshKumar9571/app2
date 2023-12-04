import React from 'react'
import img2 from '../../images/img2.jpeg'
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <span className="logo">Lama Chat</span>
        <div className="user">
            <img src={img2} alt="" className='img2' />
            <span>John</span>
            <button>Logout</button>
        </div>


    </div>
  )
}

export default Navbar