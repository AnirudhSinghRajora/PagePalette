import React from "react";
import { FiBookOpen, FiCpu, FiImage, FiCheck } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-white dark:bg-teal-950 dark:text-white min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="text-center mb-12 py-12 border-b border-gray-200 dark:border-teal-700">
          <h1 className="text-5xl font-bold mb-4">About Page Palette</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transforming eBooks into immersive visual experiences
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            At Page Palette, we are on a mission to revolutionize the way you experience eBooks. By harnessing the power of AI, we transform selected text into stunning illustrations, bringing stories to life like never before. Our goal is to create a seamless blend of literature and art, making reading more engaging and interactive for everyone.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-teal-900 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="mb-4">
                <FiBookOpen className="text-4xl text-teal-600 dark:text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Select Text</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Choose a passage from your eBook that you want to visualize.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-teal-900 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="mb-4">
                <FiCpu className="text-4xl text-teal-600 dark:text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Choose AI Model</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Select your preferred AI model to generate the illustration.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-teal-900 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="mb-4">
                <FiImage className="text-4xl text-teal-600 dark:text-teal-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Enjoy the Art</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Watch as our platform creates a unique illustration that complements the narrative.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Page Palette</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FiCheck className="text-teal-600 dark:text-teal-300 mr-2 mt-1" />
              <span className="text-lg text-gray-700 dark:text-gray-200">
                Immersive reading experience with AI-generated illustrations
              </span>
            </li>
            <li className="flex items-start">
              <FiCheck className="text-teal-600 dark:text-teal-300 mr-2 mt-1" />
              <span className="text-lg text-gray-700 dark:text-gray-200">
                Cutting-edge AI technology for high-quality artwork
              </span>
            </li>
            <li className="flex items-start">
              <FiCheck className="text-teal-600 dark:text-teal-300 mr-2 mt-1" />
              <span className="text-lg text-gray-700 dark:text-gray-200">
                User-friendly interface designed for ease of use
              </span>
            </li>
            <li className="flex items-start">
              <FiCheck className="text-teal-600 dark:text-teal-300 mr-2 mt-1" />
              <span className="text-lg text-gray-700 dark:text-gray-200">
                Constantly evolving platform with new features and improvements
              </span>
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <div className="bg-gray-100 dark:bg-teal-900 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">About the Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              Page Palette was created by a team of passionate readers and tech enthusiasts who believe in the power of storytelling enhanced by technology. Our diverse team brings together expertise in AI, design, and literature to create a platform that redefines the eBook experience.
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <div className="bg-teal-50 dark:bg-teal-800 py-12 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Join the Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              Experience the future of reading with Page Palette. Start transforming your eBooks today!
            </p>
            <a
              href="/signup"
              className="bg-teal-600 text-white px-8 py-4 rounded-md font-semibold shadow-lg text-lg transform hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;