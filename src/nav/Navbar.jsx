import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-black text-white px-32 pt-10'>
            <div><img src={logo} alt="" className='w-64'/></div>
            <div className=''>
                <ul className='flex justify-center'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar; 