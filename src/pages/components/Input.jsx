import React from 'react'

const input = () => {
  return (
    <div className='input' id='inp1'>

<input type="text" placeholder='type anything.....'  id='inpa'/>
<div className="send">
<button>Send</button>
 
<input type="file" style={{display:"none"}} id='file' />
<label htmlFor="file">
<img src="" alt="" />
</label>
<img src="" alt="" />
</div>
    </div>
  )
}

export default input