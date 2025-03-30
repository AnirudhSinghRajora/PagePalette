import React from "react";
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-teal-950 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you! Drop us a message, and let’s start a conversation.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="max-w-md mx-auto bg-white dark:bg-teal-900 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 dark:border-teal-700 rounded-md bg-gray-50 dark:bg-teal-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 transition duration-200"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 dark:border-teal-700 rounded-md bg-gray-50 dark:bg-teal-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 transition duration-200"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 dark:border-teal-700 rounded-md bg-gray-50 dark:bg-teal-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 transition duration-200"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 dark:border-teal-700 rounded-md bg-gray-50 dark:bg-teal-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-300 transition duration-200"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-teal-950 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white dark:bg-teal-900 rounded-lg shadow-lg">
            <FiMail className="text-3xl text-teal-600 dark:text-teal-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <p>
              <a
                href="mailto:info@pagepalette.com"
                className="text-teal-600 dark:text-teal-300 hover:underline"
              >
                info@pagepalette.com
              </a>
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-teal-900 rounded-lg shadow-lg">
            <FiPhone className="text-3xl text-teal-600 dark:text-teal-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Phone
            </h3>
            <p>
              <a
                href="tel:+15551234567"
                className="text-teal-600 dark:text-teal-300 hover:underline"
              >
                +91 7329392010
              </a>
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-teal-900 rounded-lg shadow-lg">
            <FiMapPin className="text-3xl text-teal-600 dark:text-teal-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              IIIT Lucknow, Sultanpur Road, Lucknow, Uttar Pradesh
            </p>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://twitter.com/pagepalette"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter className="text-2xl text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-400 transition duration-200" />
            </a>
            <a
              href="https://facebook.com/pagepalette"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook className="text-2xl text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-400 transition duration-200" />
            </a>
            <a
              href="https://instagram.com/pagepalette"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram className="text-2xl text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-400 transition duration-200" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;