import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Last updated: {new Date().toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                </div>

                {/* Content */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 lg:p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to our Netflix Premium Account service. We are committed to protecting your privacy 
                            and ensuring the security of your personal information. This Privacy Policy explains how 
                            we collect, use, disclose, and safeguard your information when you use our services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">2. Information We Collect</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-200">Personal Information</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    <li>Contact information (email address, WhatsApp number)</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                    <li>Communication records from customer support</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-200">Service Information</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    <li>Account preferences and service usage data</li>
                                    <li>Device information for account access</li>
                                    <li>Warranty and support history</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">3. How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                            <li>To provide and maintain our Netflix Premium Account services</li>
                            <li>To process your transactions and manage your account</li>
                            <li>To provide customer support and warranty services</li>
                            <li>To communicate with you about service updates and promotions</li>
                            <li>To ensure the security and proper functioning of our services</li>
                            <li>To comply with legal obligations and prevent fraudulent activities</li>
                        </ul>
                    </section>

                    {/* Data Sharing and Disclosure */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">4. Data Sharing and Disclosure</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties 
                                except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> We may share information with trusted third parties 
                                who assist us in operating our website, conducting our business, or servicing you</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information when required by law 
                                or to protect our rights, property, or safety</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, 
                                or acquisition</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">5. Data Security</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                                We implement appropriate security measures to protect your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Secure communication channels for all transactions</li>
                                <li>Limited access to personal information on a need-to-know basis</li>
                                <li>Regular security assessments and updates</li>
                                <li>Secure storage of account credentials</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                While we strive to use commercially acceptable means to protect your personal information, 
                                we cannot guarantee its absolute security.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">6. Your Rights</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                            <li><strong>Access:</strong> You can request access to your personal information</li>
                            <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                            <li><strong>Objection:</strong> You can object to processing of your personal information</li>
                            <li><strong>Portability:</strong> You can request transfer of your data to another service</li>
                        </ul>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            To exercise these rights, please contact us through WhatsApp at{' '}
                            <a href="https://wa.me/6591208154" className="text-green-400 hover:text-green-300 underline">
                                +65 9120 8154
                            </a>
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">7. Third-Party Services</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our service may involve third-party platforms including:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 ml-4">
                            <li><strong>WhatsApp:</strong> For customer communication and support</li>
                            <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                            <li><strong>Netflix:</strong> As the streaming service provider</li>
                        </ul>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            We are not responsible for the privacy practices of these third-party services. 
                            Please review their respective privacy policies.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">8. Data Retention</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We retain your personal information only for as long as necessary to:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 ml-4">
                            <li>Fulfill the purposes for which it was collected</li>
                            <li>Provide ongoing customer support and warranty services</li>
                            <li>Comply with legal obligations</li>
                            <li>Resolve disputes and enforce our agreements</li>
                        </ul>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Typically, we retain customer data for 2 years after the last service interaction 
                            or as required by law.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">9. Children's Privacy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our services are not directed to individuals under the age of 18. We do not knowingly 
                            collect personal information from children. If you become aware that a child has provided 
                            us with personal information, please contact us immediately.
                        </p>
                    </section>

                    {/* International Data Transfers */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">10. International Data Transfers</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Your information may be transferred to and maintained on computers located outside of 
                            your state, province, country, or other governmental jurisdiction where the data protection 
                            laws may differ from those of your jurisdiction.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">11. Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes 
                            by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                            You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-500">12. Contact Information</h2>
                        <div className="bg-gray-700/50 rounded-xl p-6">
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                                    </svg>
                                    <a 
                                        href="https://wa.me/6591208154" 
                                        className="text-green-400 hover:text-green-300 underline text-lg font-semibold"
                                    >
                                        +65 9120 8154
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                    <span className="text-gray-300 text-lg">Via WhatsApp Business</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Consent */}
                    <section className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-red-400 text-center">Your Consent</h2>
                        <p className="text-gray-300 text-center leading-relaxed">
                            By using our service, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </section>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        This Privacy Policy is designed to be transparent about our data practices while providing 
                        you with the premium Netflix account services you expect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;