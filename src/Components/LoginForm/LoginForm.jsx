import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";

const loginForm = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' requried />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' requried />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forget password?</a>
                </div>
                <button type="sumbit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};
export default loginForm;