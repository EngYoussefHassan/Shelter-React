import React from 'react';

const HowToUpload = () => {
  return (
    <div className="container mx-auto my-5 mt-10 px-4 bg-blue-100 py-10">
      <h1 className="text-5xl font-bold text-blue-900 mb-4 text-center">
        🐾 How to Upload Your Pet for Adoption or Foster
      </h1>
      <p className="text-lg text-gray-800 mb-6 text-center">
        Ready to help your furry friend find their forever home? Follow this fun and easy guide to share your pet’s details with FurEver Home and make a difference!
      </p>

      <h2 className="text-3xl font-bold text-blue-800 mt-4 mb-2 text-center">🚀 Easy Steps to Upload Your Pet</h2>

      <ol className="list-none ml-8 md:ml-12">
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">1. Create an Account:</h3>
          <p className="text-gray-600">
            Hit the “Register” button on our site and fill in your details. Join our amazing community of pet lovers!
          </p>
        </li>
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">2. Log In:</h3>
          <img src="/src/assets/Pics/step2htu.png" alt="Create Account" className="mb-2 rounded shadow-lg w-full md:w-2/3 mx-auto" />
          <p className="text-gray-600">
            After registering, log in using your credentials. You’re one step closer to finding your pet a new family!
          </p>
        </li>
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">3. Access the Pet Upload Form:</h3>
          <img src="/src/assets/Pics/step4htu.png" alt="Upload Form" className="mb-2 rounded shadow-lg w-full md:w-2/3 mx-auto" />
          <p className="text-gray-600">
            Navigate to “Upload Pet” in your dashboard and click “Add New Pet” to start the upload journey!
          </p>
        </li>
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">4. Fill Out the Pet Details:</h3>
          <img src="/src/assets/Pics/step5htu.png" alt="Fill Pet Details" className="mb-2 rounded shadow-lg w-full md:w-2/3 mx-auto" />
          <p className="text-gray-600">
            Share all about your pet! Include their name, age, breed, and any special quirks. Don’t forget to upload cute photos!
          </p>
        </li>
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">5. Submit Your Upload:</h3>
          <p className="text-gray-600">
            Review your details, then click “Submit” to send your pet’s info to our team. You’re almost done!
          </p>
        </li>
        <li className="mb-6">
          <h3 className="font-semibold text-blue-700 text-xl">6. Confirmation:</h3>
          <p className="text-gray-600">
            Expect a confirmation email once your pet is uploaded. Our team may reach out for more details to ensure everything is perfect!
          </p>
        </li>
      </ol>

      <h2 className="text-3xl font-bold text-blue-800 mt-6 text-center">🎉 Conclusion</h2>
      <p className="text-lg text-gray-800 text-center">
        By uploading your pet’s information, you’re taking a crucial step in finding them a loving home. Thank you for being a part of our mission to give pets a second chance at happiness! Together, we can change lives! ❤️🐶
      </p>
    </div>
  );
};

export default HowToUpload;
