import React from 'react';
import Footer from '../components/Footer';

const ContactForm = () => {
  return (
    <>
      <main
        className="min-h-screen text-gray-900 px-4 sm:px-6 py-16 bg-gradient-to-br from-slate-100 via-white to-blue-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                We’ll get back to you within 24 hours. Reach out with any queries or just say hello!
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-blue-600 mb-1">Email Support</h4>
                  <p className="text-sm text-gray-600">support@wevad.com</p>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-blue-600 mb-1">Working Hours</h4>
                  <p className="text-sm text-gray-600">Mon–Fri: 9am – 6pm IST</p>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-blue-600 mb-1">Live Chat</h4>
                  <p className="text-sm text-gray-600">Chat with our team in real-time via the widget.</p>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-blue-600 mb-1">Location</h4>
                  <p className="text-sm text-gray-600">Silvassa, Dadra & Nagar Haveli, India - 396230</p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <form className="bg-white shadow-xl rounded-xl p-6 sm:p-8 space-y-6">
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
                <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="1234567890"
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
      </main>
      <Footer />
    </>
  );
};

export default ContactForm;
