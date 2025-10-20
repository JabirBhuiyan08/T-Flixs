import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPlayModal, setShowPlayModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const playModalRef = useRef(null);
    const infoModalRef = useRef(null);

    const carouselItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1489599809505-7c8e1c8bfd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "The Grand Adventure",
            description: "Experience the journey of a lifetime"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80",
            title: "Action Packed",
            description: "Thrilling moments await"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            title: "Mystery Unfolds",
            description: "Discover the secrets within"
        }
    ];

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (playModalRef.current && !playModalRef.current.contains(event.target)) {
                setShowPlayModal(false);
            }
            if (infoModalRef.current && !infoModalRef.current.contains(event.target)) {
                setShowInfoModal(false);
            }
        };

        if (showPlayModal || showInfoModal) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [showPlayModal, showInfoModal]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselItems.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+6591208154";
        const message = "Hello! I'm interested in purchasing Netflix Premium accounts. Can you provide more information?";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const handlePlayClick = () => {
        setShowPlayModal(true);
    };

    const handleInfoClick = () => {
        setShowInfoModal(true);
    };

    return (
        <>
            <div className="w-full h-screen relative overflow-hidden">
                {carouselItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div 
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            
                            {/* Content Container - Responsive */}
                            <div className="absolute bottom-16 lg:bottom-20 left-4 lg:left-16 text-white max-w-2xl w-[90%] sm:w-auto">
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-2xl leading-tight">
                                    {item.title}
                                </h1>
                                <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 drop-shadow-lg leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                    <button 
                                        onClick={handlePlayClick}
                                        className="btn btn-lg bg-white text-black hover:bg-gray-200 border-none font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                                    >
                                        ▶ Play Now
                                    </button>
                                    <button 
                                        onClick={handleInfoClick}
                                        className="btn btn-lg bg-gray-600/70 text-white hover:bg-gray-500/70 border-none font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                                    >
                                        ℹ More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons - Responsive */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
                >
                    ❮
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12"
                >
                    ❯
                </button>

                {/* Indicators - Responsive */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
                            }`}
                        >
                        </button>
                    ))}
                </div>
            </div>

            {/* Play Button Modal - Responsive */}
            {showPlayModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
                    <div 
                        ref={playModalRef}
                        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-red-500/30 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 transform animate-scale-in"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
                            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg">
                                🎬
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center">
                                Premium Access Required
                            </h3>
                        </div>

                        <div className="p-4 sm:p-6">
                            {/* Warning Section */}
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 backdrop-blur-sm">
                                <div className="flex items-center mb-2 sm:mb-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                                        <span className="text-white font-bold text-sm sm:text-lg">⚠️</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-white text-sm sm:text-base md:text-lg block">Streaming Not Available</span>
                                        <p className="text-red-200 text-xs sm:text-sm mt-1">
                                            Premium Netflix account required
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                        <span className="text-white text-xs sm:text-sm">HD</span>
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium block">4K Quality</span>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                        <span className="text-white text-xs sm:text-sm">📱</span>
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium block">Multi-Device</span>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                        <span className="text-white text-xs sm:text-sm">🚫</span>
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium block">No Ads</span>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                                        <span className="text-white text-xs sm:text-sm">🛡️</span>
                                    </div>
                                    <span className="text-white text-xs sm:text-sm font-medium block">Warranty</span>
                                </div>
                            </div>

                            {/* Discount Banner */}
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-center shadow-lg">
                                <div className="flex items-center justify-center mb-1">
                                    <span className="text-white font-bold text-sm sm:text-lg mr-1 sm:mr-2">🔥</span>
                                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">40% OFF!</span>
                                </div>
                                <p className="text-white/90 text-xs sm:text-sm">
                                    Limited time discount
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                <button 
                                    onClick={() => setShowPlayModal(false)}
                                    className="btn bg-gray-700 hover:bg-gray-600 border-none text-white font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-none text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                                >
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                                    </svg>
                                    Get Premium
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* More Info Button Modal - Responsive */}
            {showInfoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4">
                    <div 
                        ref={infoModalRef}
                        className="relative bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-2 transform animate-scale-in max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
                            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-blue-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg">
                                💎
                            </div>
                            <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center">
                                Netflix Premium Plans
                            </h3>
                        </div>

                        <div className="p-4 sm:p-6">
                            {/* Pricing Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                {/* Basic Plan */}
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600">
                                    <div className="text-center mb-2 sm:mb-3">
                                        <h4 className="font-bold text-white text-base sm:text-lg">Basic</h4>
                                        <div className="text-xl sm:text-2xl font-bold text-green-400">$9.59</div>
                                        <div className="text-gray-400 text-xs sm:text-sm">1 Device</div>
                                    </div>
                                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                                        <li>• HD Streaming</li>
                                        <li>• 1 Screen</li>
                                        <li>• 30-Day Warranty</li>
                                    </ul>
                                </div>

                                {/* Standard Plan */}
                                <div className="bg-gradient-to-b from-red-500/20 to-transparent backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-red-500 relative">
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                        POPULAR
                                    </div>
                                    <div className="text-center mb-2 sm:mb-3">
                                        <h4 className="font-bold text-white text-base sm:text-lg">Standard</h4>
                                        <div className="text-xl sm:text-2xl font-bold text-green-400">$13.79</div>
                                        <div className="text-gray-400 text-xs sm:text-sm">2 Devices</div>
                                    </div>
                                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                                        <li>• Full HD Streaming</li>
                                        <li>• 2 Screens</li>
                                        <li>• Priority Support</li>
                                    </ul>
                                </div>

                                {/* Premium Plan */}
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600">
                                    <div className="text-center mb-2 sm:mb-3">
                                        <h4 className="font-bold text-white text-base sm:text-lg">Premium</h4>
                                        <div className="text-xl sm:text-2xl font-bold text-green-400">$17.99</div>
                                        <div className="text-gray-400 text-xs sm:text-sm">4 Devices</div>
                                    </div>
                                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                                        <li>• 4K Ultra HD</li>
                                        <li>• 4 Screens</li>
                                        <li>• 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                                            <span className="text-white text-xs sm:text-sm">⚡</span>
                                        </div>
                                        <span className="font-bold text-white text-sm sm:text-base">Instant Delivery</span>
                                    </div>
                                    <p className="text-blue-200 text-xs sm:text-sm">
                                        Get account credentials immediately after purchase
                                    </p>
                                </div>

                                <div className="bg-green-500/10 border border-green-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                                            <span className="text-white text-xs sm:text-sm">🛡️</span>
                                        </div>
                                        <span className="font-bold text-white text-sm sm:text-base">100% Safe</span>
                                    </div>
                                    <p className="text-green-200 text-xs sm:text-sm">
                                        Full warranty protection & 24/7 support
                                    </p>
                                </div>
                            </div>

                            {/* Discount Banner */}
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-center shadow-lg">
                                <div className="flex items-center justify-center mb-1">
                                    <span className="text-white font-bold text-sm sm:text-lg mr-1 sm:mr-2">🎁</span>
                                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">40% DISCOUNT!</span>
                                </div>
                                <p className="text-white/90 text-xs sm:text-sm">
                                    Limited time offer on all plans
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                <button 
                                    onClick={() => setShowInfoModal(false)}
                                    className="btn bg-gray-700 hover:bg-gray-600 border-none text-white font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-none text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                                >
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                                    </svg>
                                    Contact on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add custom animation */}
            <style jsx>{`
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default HeroSection;