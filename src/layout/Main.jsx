import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='w-full  text-white'>
            <Navbar></Navbar>
            <div className='min-h-screen lg:p-20 p-5 pt-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;