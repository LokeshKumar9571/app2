import React from 'react'
import img2 from "../../images/img2.jpeg"
const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" id='inp' placeholder='Find a user'/>
       
      </div>
<div className="userchat">
  <img src={img2} alt="" className='img2'/>
  <div className="userChatInfo">
    <span>Jane</span>
  </div>
</div>

    </div>
  )
}

export default Search