import React from "react";

const NetflixPriceSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      devices: "1 Device",
      originalPrice: "SGD $15.98",
      sellPrice: "$9.59",
      discount: "40% OFF",
      duration: "per month",
      description: "Perfect for individual viewers",
      features: [
        "1 Netflix Premium Account",
        "HD Available",
        "Watch on 1 device at a time",
        "Full HD Streaming",
        "Email & Password Provided",
        "30 Days Warranty",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      devices: "2 Devices",
      originalPrice: "SGD $22.98",
      sellPrice: "$13.79",
      discount: "40% OFF",
      duration: "per month",
      description: "Great for couples & friends",
      features: [
        "1 Netflix Premium Account",
        "Ultra HD Available",
        "Watch on 2 devices at a time",
        "4K Streaming",
        "Email & Password Provided",
        "30 Days Warranty",
        "Priority Support",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      devices: "4 Devices",
      originalPrice: "SGD $29.98",
      sellPrice: "$17.99",
      discount: "40% OFF",
      duration: "per month",
      description: "Ideal for family viewing",
      features: [
        "1 Netflix Premium Account",
        "Ultra HD Available",
        "Watch on 4 devices at a time",
        "4K & HDR Streaming",
        "Email & Password Provided",
        "30 Days Warranty",
        "24/7 Support",
        "Instant Delivery",
      ],
      popular: false,
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "6591208154";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Netflix Branded Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-600 px-4 py-2 rounded-lg">
              <span className="text-white font-bold text-2xl tracking-wide">
                NETFLIX
              </span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Premium Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get{" "}
            <span className="text-red-500 font-semibold">
              Netflix Premium Accounts
            </span>{" "}
            at unbeatable prices. All accounts come with full email access and
            warranty.
          </p>
          <div className="mt-4 bg-red-600 inline-block px-6 py-2 rounded-full">
            <span className="font-bold text-lg">
              🔥 40% DISCOUNT ON NETFLIX PREMIUM!
            </span>
          </div>
        </div>

        {/* Netflix-themed Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-lg p-6 mt-5 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-b from-red-900 to-black border-2 border-red-500 transform scale-105 shadow-2xl shadow-red-500/20"
                  : "bg-gradient-to-b from-gray-900 to-black border border-gray-700"
              }`}
            >
              {/* Netflix Logo Badge */}
              <div className="absolute -top-3 left-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                  NETFLIX
                </div>
              </div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 mt-7">
                  <span
                    className=" bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold sm:text-sm 
                  sm:px-4 sm:py-1 whitespace-nowrap shadow-md"
                  >
                    🏆 MOST POPULAR
                  </span>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute -top-3 right-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {plan.discount}
                </span>
              </div>

              {/* Plan Name & Devices */}
              <div className="text-center mb-4 pt-2 mt-4">
                <h3 className="text-2xl font-bold mb-1 text-white">
                  {plan.name}
                </h3>
                <p className="text-red-400 text-sm font-semibold">
                  {plan.devices}
                </p>
                <div className="w-12 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-green-400">
                    {plan.sellPrice}
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    {plan.originalPrice}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">{plan.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center mb-6 text-sm">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 text-red-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        feature.includes("Netflix")
                          ? "text-red-400 font-semibold"
                          : "text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
          </svg>
          Get Netflix Premium Now
        </button>

        {/* Netflix Benefits Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-8 text-red-500">
            Why Choose Our Netflix Accounts?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "🎬",
                title: "All Netflix Content",
                description: "Full access to movies, series & originals",
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                description: "Ready to stream immediately",
              },
              {
                icon: "🛡️",
                title: "Full Warranty",
                description: "30-day replacement guarantee",
              },
              {
                icon: "📧",
                title: "Email Access",
                description: "Complete account control",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-700"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="text-center mt-12 bg-gradient-to-r from-red-900 to-black rounded-2xl p-8 border border-red-500/30">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            Ready to Start Streaming Netflix?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Contact us now on WhatsApp to get your Netflix Premium account
            instantly!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
            </svg>
            Get Netflix Premium Now
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Instant setup • 24/7 support • Full warranty
          </p>
        </div>

        {/* Additional Netflix Features */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              🎯 What's Included in Every Netflix Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">✓</span>
                </div>
                Full Netflix Library Access
              </div>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">✓</span>
                </div>
                4K Ultra HD Streaming
              </div>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">✓</span>
                </div>
                Multiple Device Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetflixPriceSection;
