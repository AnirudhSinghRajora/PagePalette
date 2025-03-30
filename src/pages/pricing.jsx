import React from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  return (
    <div className="bg-white dark:bg-teal-950 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan to enhance your reading experience with Page Palette.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="relative bg-white dark:bg-teal-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic
            </h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Free
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">5 illustrations per month</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">2 AI models</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Standard support</span>
              </li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-3 rounded-md font-semibold hover:bg-teal-700 transition duration-300">
              Sign Up
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white dark:bg-teal-900 p-6 rounded-lg shadow-lg border-2 border-teal-600 dark:border-teal-300">
            <span className="absolute top-0 right-0 bg-teal-600 text-white px-2 py-1 rounded-bl-lg text-xs font-semibold">
              Most Popular
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Pro
            </h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              $9.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">50 illustrations per month</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">5 AI models</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Priority support</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Early access to new features</span>
              </li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-3 rounded-md font-semibold hover:bg-teal-700 transition duration-300">
              Subscribe
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-white dark:bg-teal-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Enterprise
            </h2>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              $29.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Unlimited illustrations</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">All AI models</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">24/7 support</span>
              </li>
              <li className="flex items-center">
                <FiCheck className="text-teal-600 dark:text-teal-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Custom AI model integration</span>
              </li>
            </ul>
            <button className="w-full bg-teal-600 text-white py-3 rounded-md font-semibold hover:bg-teal-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;