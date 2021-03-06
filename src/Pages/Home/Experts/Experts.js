import React from 'react';
import expert1 from '../../../images/exparts/mechanic-1.jpg';
import expert2 from '../../../images/exparts/mechanic-2.jpg';
import expert3 from '../../../images/exparts/mechanic-3.jpg';
import expert4 from '../../../images/exparts/mechanic-4.jpg';
import expert5 from '../../../images/exparts/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Messy', img: expert3 },
    { id: 4, name: 'Ronaldo', img: expert4 },
    { id: 5, name: 'Rocky', img: expert5 },
]

const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='text-primary text-center'>Our experts</h2>
            <div className="row">
                {experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)}
            </div>
        </div>
    );
};

export default Experts;