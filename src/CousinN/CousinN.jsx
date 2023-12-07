import React from 'react';
import Friend from '../Friend/Friend';

const CousinN = ({uncleCousinAge, children, hasFriend}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p className='text-center'><small>{children}</small></p>
            {
                (uncleCousinAge) && <p className='text-center'><small>Age: {uncleCousinAge}</small></p>
            }
            {
                hasFriend && <Friend></Friend>
            }
        </div>
    );
};

export default CousinN;