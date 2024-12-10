import React from 'react';

const HowToSponsor = () => {
  const steps = [
    {
      title: "Choose a Pet to Sponsor",
      description: "Browse our website and discover the stories of animals in need. Each pet's profile offers a glimpse into their personality, background, and care needs.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Select the Sponsorship Level",
      description: "Pick a sponsorship level that aligns with your budget and commitment. Whether it's a one-time donation or a monthly pledge, every contribution matters!",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Fill Out the Sponsorship Form",
      description: "Click on the 'Sponsor a Pet' button on your chosen pet's profile. Fill out the form with your details and your sponsorship preferences.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Make Your Donation",
      description: "Securely complete your donation via your preferred payment method. Choose between a one-time payment or recurring contributions.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Receive Updates",
      description: "Stay connected! Receive heartwarming updates about your sponsored pet, their progress, and well-being. Feel the impact of your kindness.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Spread the Word",
      description: "Share your sponsorship journey on social media using #SponsorAFurEverFriend. Inspire others to join you in making a difference!",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center">
        Sponsor a Pet, Change a Life
      </h1>
      <p className="text-lg text-gray-800 mb-10 text-center max-w-2xl mx-auto">
        Sponsoring a pet at FurEver Home is more than a donation—it's a way to show love, provide care, and create a brighter future for an animal in need. Follow these simple steps to become a hero for our furry friends.
      </p>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
          >
            <div className="md:w-1/2">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                {index + 1}. {step.title}
              </h2>
              <p className="text-gray-700 text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Impact</h2>
        <p className="text-lg text-gray-800 mb-6">
          Your sponsorship ensures pets receive the love, care, and resources they need to thrive while waiting for their forever home. Thank you for being their hero!
        </p>
        <button
          onClick={() => alert('Redirecting to sponsorship page!')} // Replace with actual navigation logic
          className="py-3 px-8 bg-blue-500 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Sponsor a Pet Now
        </button>
      </div>
    </div>
  );
};

export default HowToSponsor;