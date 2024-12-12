import React, { useState } from 'react';

const HowToAdopt = () => {
  const [isArabic, setIsArabic] = useState(false);

  const adoptionSteps = [
    {
      title: isArabic ? "الخطوة 1: البحث" : "Step 1: Research",
      description: isArabic
        ? "تعرف على أنواع الحيوانات المتاحة للتبني وما يناسب أسلوب حياتك."
        : "Learn about the types of pets available for adoption and what suits your lifestyle.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: isArabic ? "الخطوة 2: زرنا" : "Step 2: Visit Us",
      description: isArabic
        ? "تعال إلى ملجأنا لمقابلة الحيوانات لدينا والعثور على التطابق المثالي."
        : "Come to our shelter to meet our animals and find your perfect match.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: isArabic ? "الخطوة 3: املأ الطلب" : "Step 3: Complete the Application",
      description: isArabic
        ? "املأ طلب التبني لبدء العملية."
        : "Fill out our adoption application to start the process.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: isArabic ? "الخطوة 4: التحقق من المنزل" : "Step 4: Home Check",
      description: isArabic
        ? "قد نقوم بزيارة منزلك لضمان بيئة آمنة لحيوانك الجديد."
        : "We may conduct a home check to ensure a safe environment for your new pet.",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
    {
      title: isArabic ? "الخطوة 5: أحضر حيوانك الأليف للمنزل!" : "Step 5: Bring Your Pet Home!",
      description: isArabic
        ? "بمجرد الموافقة، يمكنك أخذ صديقك الجديد إلى المنزل!"
        : "Once approved, you can take your new furry friend home!",
      image: "https://via.placeholder.com/150" // Replace with actual image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adoptionSteps.length);
  };

  const prevStep = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adoptionSteps.length - 1 : prevIndex - 1
    );
  };

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className={`text-4xl font-bold text-blue-900 text-center mb-8 ${isArabic ? "rtl" : ""}`}>
        {isArabic ? "كيفية التبني" : "How to Adopt"}
      </h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          {isArabic ? "Switch to English" : "التحويل إلى العربية"}
        </button>
      </div>
      <div className={`flex flex-col items-center ${isArabic ? "rtl" : ""}`}>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((currentIndex + 1) / adoptionSteps.length) * 100}%` }}
          ></div>
        </div>
        <div className="relative flex items-center justify-center mb-8">
          {/* Previous Button */}
          <button
            onClick={prevStep}
            className="absolute left-4 text-blue-600 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            ❮
          </button>

          {/* Carousel */}
          <div className="w-2/3">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105"
              style={{ height: "400px", width: "100%", maxWidth: "400px" }} // Fixed width and height
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
    </div>
  );
};

export default HowToAdopt;
