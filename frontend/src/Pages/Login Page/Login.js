import './Login.css'
import React, { useRef, useState } from 'react'
import loginImg from '../../Assets/Mockups.png'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Login() {
const navigate = useNavigate()
const email = useRef(null)
const password = useRef(null)
  const[userData , setUserData] = useState({
    email:"" , password:""
  })

async function handleClick () {
   email.current.textContent = ""
        password.current.textContent = ""
    const empty = Object.values(userData).some(val => val === "")
    if (empty) {
        alert("Fill all the fields")
    }

    if (!empty) {
        await axios.post('https://adminbackend-1-fiia.onrender.com/user/login', {
            email: userData.email,
            password: userData.password,
        }, { withCredentials: true }).then(res => {
          console.log(res)
            if(res.data.user) navigate('/Dashboard')
            setUserData({password: "", email: "" })
        })
            .catch(err => {
              console.log(err.response.data)
             
                email.current.textContent = err.response.data.email
                password.current.textContent = err.response.data.password
            })


    }
  }
function navigateSignup(){
  navigate('/Signup')
}
  return (
    <>
      <div className='login-main'>
        <div className='login-left'>
          <img src={loginImg} />
        </div>
        <div className='login-right'>
          <div className='logo'></div>
          <p style={{fontSize:"1.5rem" , fontWeight:"600" }}>Log in</p>
          <div className='login-input-1'>
            <p>Email <span style={{ color: "red", fontSize: "0.75rem", border: "0", cursor: "default", marginLeft: "2rem" }} ref={email}></span></p>
            <input value={userData.email}  onChange={(event)=>{
              let data = event.target.value.trim()
              setUserData({...userData , email:data})
            }}></input>
          </div>
          <div className='login-input-2'>
            <p>Your password <span style={{ color: "red", fontSize: "0.75rem", border: "0", cursor: "default", marginLeft: "2rem" }} ref={password}></span></p>
            <input  value={userData.password}  onChange={(event)=>{
              let data = event.target.value.trim()
              setUserData({...userData , password:data})
            }}></input>
          </div>
          <button onClick={()=>handleClick()}>Log in</button>

          <div>
            <p>Don't have an account? <span onClick={()=>navigateSignup()}>Sign Up</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login