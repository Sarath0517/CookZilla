import React, { useEffect, useState } from 'react';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

function Login() {
    const [values, setValues] = useState({
        username: '',
        dob: '',
        email: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const navigate = useNavigate();

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.login-link');
        const registerLink = document.querySelector('.register-link');

        const handleRegisterClick = () => {
            wrapper.classList.add('active');
        }

        const handleLoginClick = () => {
            wrapper.classList.remove('active');
        }

        registerLink.addEventListener('click', handleRegisterClick);
        loginLink.addEventListener('click', handleLoginClick);

        // Cleanup function to remove event listener on unmount
        return () => {
            registerLink.removeEventListener('click', handleRegisterClick);
            loginLink.removeEventListener('click', handleLoginClick);
        };
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/login', values);
            if (res.data.Login) {
                navigate('/');
            } else {
                alert('No Record');
            }
            console.log(res);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleRegistration = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/register', values);
            if (res.data) {
                navigate('/');
            } else {
                alert('No Record');
            }
            console.log(res);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='loginimg'>
            <header>
                <nav className="navigation">
                    {/* Navigation content */}
                </nav>
            </header>
            <div className="wrapper">
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-unread"></ion-icon></span>
                            <input type="email" name="email" value={values.email} onChange={handleInput} required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" name="password" value={values.password} onChange={handleInput} required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account?
                                <Link to="#" className="register-link">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div id="registrationform" className="form-box Register">
                    <h2>Registration</h2>
                    <form onSubmit={handleRegistration}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="text" name="username" value={values.username} onChange={handleInput} required />
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="calendar"></ion-icon></span>
                            <input type="text" name="dob" value={values.dob} onChange={handleInput} required />
                            <label>DOB</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-unread"></ion-icon></span>
                            <input type="email" name="email" value={values.email} onChange={handleInput} required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" name="password" value={values.password} onChange={handleInput} required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account?
                                <Link to="#" className="login-link">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;