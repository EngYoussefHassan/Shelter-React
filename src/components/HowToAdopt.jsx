import React, { useState } from 'react';

const HowToAdopt = () => {
  const adoptionSteps = [
    {
      title: "Step 1: Research",
      description:
        "Learn about the types of pets available for adoption and what suits your lifestyle.",
      image: "/src/assets/pics/search.jpg" // Replace with actual image URL
    },
    {
      title: "Step 2: Visit Us",
      description:
        "Come to our shelter to meet our animals and find your perfect match.",
      image: "/src/assets/pics/shelter.png" // Replace with actual image URL
    },
    {
      title: "Step 3: Complete the Application",
      description: "Fill out our adoption application to start the process.",
      image: "/src/assets/pics/application.jpg" // Replace with actual image URL
    },
    {
      title: "Step 4: Home Check",
      description:
        "We may conduct a home check to ensure a safe environment for your new pet.",
      image: "/src/assets/pics/homecheck.jpg" // Replace with actual image URL
    },
    {
      title: "Step 5: Bring Your Pet Home!",
      description: "Once approved, you can take your new furry friend home!",
      image: "/src/assets/pics/animalhome.jpg" // Replace with actual image URL
    },
  ];

  const faqs = [
    {
      question: "What is the cost of adopting a pet?",
      answer: "The adoption fee varies depending on the type of pet. It usually includes vaccinations, microchipping, and spaying/neutering."
    },
    {
      question: "Can I return a pet if it doesn’t work out?",
      answer: "Yes, we have a return policy to ensure the pet’s safety. Please contact us if you’re facing challenges."
    },
    {
      question: "Do I need to bring anything when adopting a pet?",
      answer: "Yes, please bring a valid ID and proof of address. For dogs, bring a leash and collar; for cats, a carrier is required."
    },
    {
      question: "How long does the adoption process take?",
      answer: "The process varies but usually takes 1-2 weeks, including application review and home checks if needed."
    },
    {
      question: "Can I adopt if I live in an apartment?",
      answer: "Absolutely! We help match pets to environments suitable for their needs, whether it’s an apartment or a house."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  const nextStep = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adoptionSteps.length);
  };

  const prevStep = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adoptionSteps.length - 1 : prevIndex - 1
    );
  };

  const toggleFAQ = (index) => {
    setExpandedFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
        How to Adopt
      </h1>

      <div className="flex flex-col items-center">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((currentIndex + 1) / adoptionSteps.length) * 100}%` }}
          ></div>
        </div>

        {/* Step Carousel */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="absolute left-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            ❮
          </button>

          <div className="w-2/3">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105"
              style={{ height: "400px", width: "100%", maxWidth: "400px" }}
            >
              <img 
                src={adoptionSteps[currentIndex].image} 
                alt={adoptionSteps[currentIndex].title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6 flex flex-col justify-between" style={{ height: "calc(100% - 16rem)" }}>
                <h2 className="text-2xl font-semibold mb-2">{adoptionSteps[currentIndex].title}</h2>
                <p className="text-gray-700">{adoptionSteps[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="absolute right-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            ❯
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 px-8 py-6 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left text-lg font-semibold text-blue-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {expandedFAQIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
              <hr className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToAdopt;
