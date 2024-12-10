// src/pages/HowToSponsor.jsx
import React from 'react';

const HowToSponsor = () => {
  return (
    <div className="container mx-auto my-5 mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">How to Sponsor a Pet at FurEver Home</h1>
      <p className="text-lg text-gray-800 mb-6">
        Sponsoring a pet is a meaningful way to contribute to our mission at FurEver Home. Your support helps us provide food, medical care, and shelter for animals in need. Here’s how you can sponsor a pet today.
      </p>

      <h2 className="text-2xl font-bold text-blue-800 mt-4 mb-2">Steps to Sponsor a Pet</h2>

      <ol className="list-decimal ml-8">
        <li className="mb-4">
          <h3 className="font-semibold">Choose a Pet to Sponsor:</h3>
          <p>Visit our website and browse the animals available for sponsorship. Each pet's profile will provide information about their background and needs.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Select the Sponsorship Level:</h3>
          <p>We offer various sponsorship levels, each with different benefits and commitments. Choose a level that fits your budget and commitment.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Fill Out the Sponsorship Form:</h3>
          <p>Click on the “Sponsor a Pet” button on the pet’s profile page. Complete the sponsorship form with your details.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Make Your Donation:</h3>
          <p>Choose your payment method and complete your donation. You can opt for a one-time payment or set up recurring donations based on your selected sponsorship level.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Receive Updates:</h3>
          <p>As a sponsor, you will receive regular updates on your sponsored pet's progress and well-being. You may also receive invitations to events where you can meet your sponsored pet in person.</p>
        </li>
        <li>
          <h3 className="font-semibold">Spread the Word:</h3>
          <p>Share your sponsorship experience on social media to encourage others to sponsor pets in need. Use the hashtag #SponsorAFurEverFriend to raise awareness!</p>
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-blue-800 mt-6">Conclusion</h2>
      <p className="text-lg text-gray-800">
        Your sponsorship directly impacts the lives of our animals, helping us provide the care they need while they await adoption. Thank you for considering sponsoring a pet at FurEver Home!
      </p>
    </div>
  );
};

export default HowToSponsor;
