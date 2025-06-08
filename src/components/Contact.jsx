import React from 'react'
import Footer from './Footer';
const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-slate-900">
        Get in <span className="text-blue-600">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">
            We will get back to you within 24 hours.
          </h3>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-blue-600 mb-1">Email Support</h4>
              <p className="text-sm text-gray-600">Reach us at support@wevad.com for all inquiries.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-blue-600 mb-1">Working Hours</h4>
              <p className="text-sm text-gray-600">Mon–Fri: 9am – 6pm IST</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-blue-600 mb-1">Live Chat</h4>
              <p className="text-sm text-gray-600">Chat with our team in real-time via the support widget.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-blue-600 mb-1">Location</h4>
              <p className="text-sm text-gray-600">Silvassa, Dadra & Nagar Haveli, India - 396230</p>
            </div>
          </div>
        </div>


        {/* Right Section - Contact Form */}
        <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Tony Stark"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">phone number</label>
            <input
              type="text"
              placeholder="123456789"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
