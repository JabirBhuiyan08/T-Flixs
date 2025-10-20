import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed top-0 w-full h-16 px-4 lg:px-8 flex items-center justify-between z-50 ${
                showBackground ? 'bg-[#141414] shadow-lg' : 'bg-transparent'
            }`}>
                {/* Left Section - Logo and Links */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-red-600 font-bold text-2xl lg:text-3xl">T-flixs</span>
                    </div>

                    {/* Navigation Links - Desktop (lg and above) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="#home" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                            Home
                        </Link>
                        <Link to={"share-earn"} className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                            Share & Earn
                        </Link>
                        
                        <Link href="#new" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                            News & Popular
                        </Link>
                        <Link  to={'privacy-policy'} className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                {/* Right Section - Search, Notifications, Profile */}
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <Link
                    to={"https://wa.me/6591208154"} target='blank'
                    className=' lg:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium'>
                        WhatsApp
                    </Link>
                    {/* <button className='w-full bg-red-400 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium text-center'>Login</button> */}
                    {/* WhatsApp Button - Hidden on mobile and medium, show on large */}
                    {/* Hamburger Menu Button - Show on mobile and medium (lg:hidden) */}
                    <button 
                        className="lg:hidden text-white hover:text-gray-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Show on mobile and medium (lg:hidden) */}
            {isMobileMenuOpen && (
                <div className="fixed top-16 left-0 w-full bg-[#141414] shadow-lg z-40 lg:hidden">
                    <div className="flex flex-col py-4">
                        <Link 
                            href="#home" 
                            className="text-white hover:bg-gray-800 transition-colors px-6 py-3 text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to={"share-earn"}
                            className="text-white hover:bg-gray-800 transition-colors px-6 py-3 text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Share & Earn
                        </Link>
                        
                        <Link 
                            href="#new" 
                            className="text-white hover:bg-gray-800 transition-colors px-6 py-3 text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            News & Popular
                        </Link>
                        <Link 
                            to={'privacy-policy'}
                            className="text-white hover:bg-gray-800 transition-colors px-6 py-3 text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Privacy Policy
                        </Link>
                        <div className="border-t border-gray-700 flex flex-col gap-5 mt-2 pt-2 px-6">
                            {/* WhatsApp Button in Mobile Menu */}
                            <Link  to={"https://wa.me/6591208154"} target='blank' 
                                className='w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium text-center'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                WhatsApp
                            </Link>
                            <button className='w-full bg-red-400 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium text-center'>Login</button>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;