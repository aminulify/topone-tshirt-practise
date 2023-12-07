import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import { Toaster } from 'react-hot-toast';

const Header = () => {
    return (
       <div>
           <div className='flex justify-between mx-20 items-center my-3'>
            <div className='text-3xl font-bold text-slate-700'>
                <h1>TopOne</h1>
            </div>
            <nav className='text-slate-700'>
                    <Link to='/'>Home</Link>
                    <Link to='/review'>Order Review</Link>
                    <Link to='/grandpa'>Grandpa</Link>
                    <Link to='/contact'>Contact</Link>
            </nav>   
                </div>
            <hr className='mt-3' />
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Header;