import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation for redirects

const HowToSponsor = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const sponsorshipOptions = [
    {
      title: "General Sponsorship",
      title_ar: "الرعاية العامة",
      description:
        "Support our mission by sponsoring any pet in need. Your contribution helps provide food, shelter, and medical care to all animals at FurEver Home.",
      description_ar:
        "ادعم مهمتنا برعاية أي حيوان محتاج. تساهم مساهمتك في توفير الغذاء والمأوى والرعاية الطبية لجميع الحيوانات في فورإيفر هوم.",
      image: "/src/assets/pics/gs.png",
      buttonText: "Sponsor Now",
      buttonText_ar: "رعاية الآن",
    },
    {
      title: "Medical Sponsorship",
      title_ar: "الرعاية الطبية",
      description:
        "Contribute to the specific medical treatment of injured or sick animals. Your help can save lives and make recovery possible.",
      description_ar:
        "ساهم في توفير العلاج الطبي للحيوانات المصابة أو المريضة. مساعدتك يمكن أن تنقذ الأرواح وتساهم في التعافي.",
      image: "/src/assets/pics/ms.jpg",
      buttonText: "Help with Medical Costs",
      buttonText_ar: "ساهم في تغطية التكاليف الطبية",
    },
  ];

  const animals = [
    {
      name: "Buddy",
      condition: "Recovering from a leg surgery",
      condition_ar: "يتعافى من جراحة في الساق",
      cost: "$200 needed",
      cost_ar: "مطلوب 200 دولار",
      image: "/src/assets/pics/inj1.jpg",
    },
    {
      name: "Milo",
      condition: "Eye infection treatment",
      condition_ar: "علاج عدوى في العين",
      cost: "$100 needed",
      cost_ar: "مطلوب 100 دولار",
      image: "/src/assets/pics/inj2.webp",
    },
    {
      name: "Bella",
      condition: "Spaying surgery",
      condition_ar: "جراحة التعقيم",
      cost: "$150 needed",
      cost_ar: "مطلوب 150 دولار",
      image: "/src/assets/pics/inj3.jpg",
    },
  ];

  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const handleRedirectToPayment = () => {
    navigate("/payment"); // Replace with the actual payment page route
  };

  return (
    <div className="container mx-auto px-4 bg-white py-10">
      {/* Language Toggle */}
      <div className="text-right">
        <button
          onClick={toggleLanguage}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-600 transition-all transform hover:scale-105 mb-6"
        >
          {isArabic ? "Translate to English" : "ترجمة إلى العربية"}
        </button>
      </div>

      {/* Header */}
      <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center">
        {isArabic ? "اختر طريقة الرعاية الخاصة بك" : "Choose Your Way to Sponsor"}
      </h1>

      {/* Sponsorship Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {sponsorshipOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              {isArabic ? option.title_ar : option.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {isArabic ? option.description_ar : option.description}
            </p>
            <button
              onClick={handleRedirectToPayment}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              {isArabic ? option.buttonText_ar : option.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Animals in Need */}
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        {isArabic ? "حيوانات بحاجة لرعاية" : "Animals in Need"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {animal.name}
            </h3>
            <p className="text-gray-700 mb-2">
              {isArabic ? animal.condition_ar : animal.condition}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              {isArabic ? animal.cost_ar : animal.cost}
            </p>
            <button
              onClick={handleRedirectToPayment}
              className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
            >
              {isArabic ? "تبرع الآن" : "Donate Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToSponsor;
