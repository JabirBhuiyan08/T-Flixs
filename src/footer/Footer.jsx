import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#141414] text-gray-400 py-12 px-4 lg:px-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="mb-8">
                    <span className="text-red-600 font-bold text-2xl lg:text-3xl">T-flixs</span>
                    <p className="text-gray-400 mt-2 max-w-md">
                        Your trusted partner for premium streaming accounts at unbeatable prices.
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
                            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#netflix" className="hover:text-white transition-colors">Netflix Accounts</a></li>
                            <li><a href="#premium" className="hover:text-white transition-colors">Premium Plans</a></li>
                            <li><a href="#support" className="hover:text-white transition-colors">24/7 Support</a></li>
                            <li><a href="#warranty" className="hover:text-white transition-colors">Warranty</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                        <ul className="space-y-3">
                            <li><a href="#facebook" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#twitter" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#instagram" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-white font-semibold text-lg mb-2">Need Help?</h4>
                            <p className="text-gray-400">Contact us directly on WhatsApp for instant support</p>
                        </div>
                        <button 
                            onClick={() => window.open('https://wa.me/6591208154', '_blank')}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                            </svg>
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} T-flix. All rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-sm text-gray-500 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <p className="text-xs text-gray-600">
                            T-flix is not affiliated with Netflix. We provide premium account sharing services.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;