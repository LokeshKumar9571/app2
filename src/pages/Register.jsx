import React from 'react'
import add from "../images/add1.png"

const Register = () => {
  return (
    <div className='formContainer'> 
    <div className="formWrapper">
    <span className='logo'>Lama Chat</span>
    <span className='title'>Register</span>

        <form>
        <input type="text" placeholder='display name' id='text'/>
        <input type="email" placeholder='email' id='email'/>
        <input type="password" placeholder='password' id='pass' />
        <input type="file" id='file'  />
        <label htmlFor="file">
        <span>   <img src={add} alt="" className='img1'/>
           Add An Avtar 
           </span> 
        </label>
        <button>Sign up</button>

        </form>
        <p>You do have an account? Login</p>
    </div>
    </div>
  )
}

export default Register