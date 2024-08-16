import React, { useState, useRef } from 'react';
import axios from 'axios';
import './SignUp.css';
import img from '../../Assets/SignUpImg.png';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [userData, setUserData] = useState({
        email: "", password: "", firstName: "", lastName: ""
    });
    const email = useRef(null)
    const password = useRef(null)
const navigate = useNavigate()

    async function handleFormSubmit() {
        email.current.textContent = ""
        password.current.textContent = ""

        const empty = Object.values(userData).some(val => val === "")
        if (empty) {
            alert("Fill all the fields")
        }

        if (!empty) {
            await axios.post('https://adminbackend-1-fiia.onrender.com/user/add', {
                email: userData.email,
                password: userData.password,
                firstName: userData.firstName,
                lastName: userData.lastName
            }, { withCredentials: true }).then(res => {
                if(res.data.user) navigate('/Dashboard')
                setUserData({ firstName: "", lastName: "", password: "", email: "" })
            })
                .catch(err => {
                    console.log(err)
                    email.current.textContent = err.response.data.email
                    password.current.textContent = err.response.data.password
                })


        }
    }
    function navigateLogin(){
        navigate('/')
    }
    return (
        <>
            <div className='signup-main'>
                <div className='signup-left'>
                    <div className='signup-inputs'>
                        <p style={{ fontSize: "2rem", fontWeight: "500" }}>Welcome to the Furniro Community</p>
                        <p style={{ fontSize: "0.9rem" }}>Already have an account? <span onClick={()=>navigateLogin()} >Log In</span></p>
                    </div>
                    <div className='signup-input-1'>
                        <p>First Name</p>
                        <input value={userData.firstName} onChange={(event) => {
                            let data = event.target.value.trim();
                            setUserData({ ...userData, firstName: data });
                        }} />
                    </div>
                    <div className='signup-input-1'>
                        <p>Last Name</p>
                        <input value={userData.lastName} onChange={(event) => {
                            let data = event.target.value.trim();
                            setUserData({ ...userData, lastName: data });
                        }} />
                    </div>
                    <div className='signup-input-2'>
                        <p>Email <span style={{ color: "red", fontSize: "0.75rem", border: "0", cursor: "default", marginLeft: "2rem" }} ref={email}></span> </p>
                        <input value={userData.email} onChange={(event) => {
                            let data = event.target.value.trim();
                            setUserData({ ...userData, email: data });
                        }} />
                    </div>
                    <div className='singup-input-3'>
                        <p>Password <span style={{ color: "red", fontSize: "0.75rem", border: "0", cursor: "default", marginLeft: "2rem" }} ref={password}></span> </p>
                        <input value={userData.password} onChange={(event) => {
                            let data = event.target.value.trim();
                            setUserData({ ...userData, password: data });
                        }} />
                    </div>

                    <p>By creating an account, you agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
                    <button onClick={() => handleFormSubmit()}>Create an account</button>
                </div>
                <div className='signup-right'>
                    <img alt='signupImage' src={img} />
                </div>
            </div>
        </>
    );
}

export default SignUp;
