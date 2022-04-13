import React from 'react';
import google from '../../../images/social/google.png';
import { FcGoogle } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || errorGithub) {
        errorElement = <p className='text-danger'>Error: {error?.message} {errorGithub?.message}</p>


    }

    if (user || userGithub) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary btn-lg d-flex align-items-center w-50 mx-auto my-2'>
                    <FcGoogle></FcGoogle>
                    <span className='px-2'> Google Sign In</span>
                </button>
                <button className='btn btn-outline-primary btn-lg d-flex align-items-center w-50 mx-auto my-2'>
                    <MdFacebook></MdFacebook>
                    <span className='px-2'> Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-primary btn-lg d-flex align-items-center w-50 mx-auto'>
                    <AiFillGithub></AiFillGithub>
                    <span className='px-2'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;