import React from 'react';
import sleeping from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>Mechanic is sleping</h2>
            <img className='w-75 mx-auto' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;