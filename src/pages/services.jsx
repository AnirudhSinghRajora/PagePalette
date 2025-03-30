import React from "react";
import { FiImage, FiCpu, FiBookOpen, FiSmile, FiRefreshCw, FiPenTool } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <FiImage className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "AI Illustration Generation",
      description: "Transform selected text into stunning illustrations using advanced AI technology."
    },
    {
      icon: <FiCpu className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "Multiple AI Models",
      description: "Choose from a variety of AI models to match the style of your eBook."
    },
    {
      icon: <FiBookOpen className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "Seamless Integration",
      description: "Works with your favorite eBook formats for a smooth experience."
    },
    {
      icon: <FiSmile className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "User-Friendly Interface",
      description: "Easy to use, no technical skills required to generate beautiful illustrations."
    },
    {
      icon: <FiRefreshCw className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "Continuous Updates",
      description: "Regular improvements and new features to enhance your reading experience."
    },
    {
      icon: <FiPenTool className="text-4xl text-teal-600 dark:text-teal-300 mb-4" />,
      title: "Custom Illustration Styles",
      description: "Personalize your illustrations with custom styles to match your unique taste."
    }
  
  ];

  return (
    <div className="bg-white dark:bg-teal-950 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how Page Palette can transform your eBooks into immersive visual experiences.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-teal-900 p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Enhance Your Reading Experience?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Join Page Palette today and start transforming your eBooks!
          </p>
          <NavLink to="/" className="bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition duration-300">Get Started</NavLink>
        </section>
      </div>
    </div>
  );
};

export default Services;