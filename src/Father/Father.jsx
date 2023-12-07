import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <div className='flex'>
            <MySelf ring = {ring}></MySelf>
            <Sister></Sister>
            <Brother></Brother>
            </div>
        </div>
    );
};

export default Father;