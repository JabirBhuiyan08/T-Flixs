import React, { useState } from 'react';

const ShareEarn = () => {
    const [activeTab, setActiveTab] = useState('how-it-works');

    const referralStats = [
        { number: "$2", label: "Per Referral" },
        { number: "Instant", label: "Payout" },
        { number: "No Limit", label: "Earning Potential" },
        { number: "24/7", label: "Support" }
    ];

    const successStories = [
        {
            name: "Sarah M.",
            earnings: "$50",
            story: "Shared with my college group, made $50 in first week!",
            avatar: "👩‍🎓"
        },
        {
            name: "Mike R.",
            earnings: "$32",
            story: "Told a few friends about the service, easy earnings!",
            avatar: "👨‍💼"
        },
        {
            name: "Jessica L.",
            earnings: "$78",
            story: "Posted in my community groups, steady income!",
            avatar: "👩‍💻"
        }
    ];

    const howItWorks = [
        {
            step: "1",
            title: "Share with Friends",
            description: "Tell your friends about our Netflix Premium service",
            icon: "💬"
        },
        {
            step: "2",
            title: "They Purchase",
            description: "They contact us on WhatsApp to buy accounts",
            icon: "🛒"
        },
        {
            step: "3",
            title: "You Earn $2",
            description: "Get $2 for every successful referral",
            icon: "💰"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                        Share & Earn
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-6">
                        Earn <span className="text-green-400 font-bold">$2 Per Referral</span>
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Refer friends to our Netflix Premium service and earn $2 for every successful purchase. 
                        Simple and straightforward!
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {referralStats.map((stat, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
                            <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                            <div className="text-gray-300 text-sm lg:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center mb-8 border-b border-gray-700">
                    {[
                        { id: 'how-it-works', label: 'How It Works' },
                        { id: 'success', label: 'Success Stories' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 font-semibold transition-all duration-300 border-b-2 ${
                                activeTab === tab.id 
                                    ? 'text-green-400 border-green-400' 
                                    : 'text-gray-400 border-transparent hover:text-green-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 lg:p-8 mb-12">
                    {/* How It Works */}
                    {activeTab === 'how-it-works' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-center text-green-400 mb-8">How It Works</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {howItWorks.map((step, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                            {step.icon}
                                        </div>
                                        <div className="text-green-400 font-bold text-lg mb-2">Step {step.step}</div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                        <p className="text-gray-300">{step.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Simple Instructions */}
                            <div className="bg-gray-700/50 rounded-xl p-6 mt-8">
                                <h3 className="text-xl font-bold mb-4 text-white text-center">💡 Simple Process</h3>
                                <div className="space-y-4 text-center">
                                    <p className="text-gray-300">
                                        Just tell your friends to contact us on WhatsApp and mention your name. 
                                        When they make a purchase, you get <strong className="text-green-400">$2</strong>!
                                    </p>
                                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                                        <p className="text-green-300 font-semibold">
                                            No complicated codes. No tracking links. Just simple referrals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Success Stories */}
                    {activeTab === 'success' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-center text-green-400 mb-8">Success Stories</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {successStories.map((story, index) => (
                                    <div key={index} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                                        <div className="flex items-center mb-4">
                                            <div className="text-2xl mr-4">{story.avatar}</div>
                                            <div>
                                                <div className="font-bold text-white">{story.name}</div>
                                                <div className="text-green-300 font-bold">Earned: {story.earnings}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm italic">"{story.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-green-400 mb-8">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                question: "How do I get paid for referrals?",
                                answer: "When your friend makes a purchase and mentions your name, you receive $2 via your preferred payment method."
                            },
                            {
                                question: "When do I get paid?",
                                answer: "Payments are processed weekly. We support PayPal, bank transfer, and mobile money."
                            },
                            {
                                question: "Is there any cost to participate?",
                                answer: "No, it's completely free to refer friends and earn commissions."
                            },
                            {
                                question: "How many friends can I refer?",
                                answer: "There's no limit! Refer as many friends as you want and earn $2 for each one."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                                <p className="text-gray-300 text-sm">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-green-400">
                        Ready to Start Earning?
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                        Contact us on WhatsApp to learn more about our referral program and start earning $2 per referral today!
                    </p>
                    <a 
                        href="https://wa.me/6591208154"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-green-500 hover:bg-green-600 border-none text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                        </svg>
                        Contact on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ShareEarn;