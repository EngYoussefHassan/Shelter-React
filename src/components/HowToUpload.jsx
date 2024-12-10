// src/pages/HowToUpload.jsx
import React from 'react';

const HowToUpload = () => {
  return (
    <div className="container mx-auto my-5 mt-10 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">How to Upload Your Pet for Adoption or Foster</h1>
      <p className="text-lg text-gray-800 mb-6">
        If you are a foster caregiver or wish to surrender a pet, it’s essential to upload your pet's information to ensure they find a loving home. This guide will help you through the process of uploading your pet’s details to FurEver Home.
      </p>

      <h2 className="text-2xl font-bold text-blue-800 mt-4 mb-2">Steps to Upload Your Pet</h2>

      <ol className="list-decimal ml-8">
        <li className="mb-4">
          <h3 className="font-semibold">Create an Account:</h3>
          <p>Visit our website and click on the “Register” button. Fill in your details to create an account.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Log In:</h3>
          <p>After registering, log in to your account using your credentials.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Access the Pet Upload Form:</h3>
          <p>Navigate to the “Upload Pet” section in your account dashboard. Click on the “Add New Pet” button to begin the upload process.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Fill Out the Pet Details:</h3>
          <p>Provide comprehensive details about your pet, including name, age, breed, temperament, medical history, and special needs (if any). Upload clear, recent photos of your pet to help potential adopters get to know them better.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Submit Your Upload:</h3>
          <p>Review all the information for accuracy. Click the “Submit” button to send your pet’s information to our team.</p>
        </li>
        <li className="mb-4">
          <h3 className="font-semibold">Confirmation:</h3>
          <p>You will receive a confirmation email once your pet has been successfully uploaded. Our team will review the information and may reach out for additional details.</p>
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-blue-800 mt-6">Conclusion</h2>
      <p className="text-lg text-gray-800">
        Uploading your pet’s information helps us find them a new home and is a crucial step in the rehoming process. Thank you for partnering with us to give pets a second chance!
      </p>
    </div>
  );
};

export default HowToUpload;
