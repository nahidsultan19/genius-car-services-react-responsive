import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <button className="btn btn-primary">Register</button>
            </form>
            <p>Already have an account ? <Link to='/login' onClick={navigateLogin} className='text-danger text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;