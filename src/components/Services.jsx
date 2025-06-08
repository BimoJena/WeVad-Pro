import React from 'react';
import { Link } from "react-router-dom";
import services from '../assets/services.jpeg';
import videoProduction from '../assets/videoProduction.jpg';
import editing from '../assets/editing.jpg';
import coding from '../assets/coding.jpg';
import socialmedia from '../assets/socialmedia.png';
import ai from '../assets/ai.jpg';
import ContactUs from './Contact';
import Footer from './Footer';

const Services = () => {
  const cardData = [
    {
      title: 'Video Production',
      description: 'Engage your audience with high-quality video content—storytelling, branding, and marketing visuals that leave a lasting impression.',
      bgImage: videoProduction,
    },
    {
      title: 'Video Editing',
      description: 'Transform raw footage into polished, engaging visual content with our expert video editing services. We enhance storytelling through seamless cuts, effects, color grading, and audio synchronization.',
      bgImage: editing,
    },
    {
      title: 'Web Development',
      description: 'Create dynamic, responsive, and scalable websites tailored to your business needs. We specialize in modern front-end and back-end technologies to deliver high-performance web solutions.',
      bgImage: coding,
    },
    {
      title: 'Social Media Management',
      description: 'Boost your brand presence across platforms with strategic content planning, audience engagement, and analytics-driven social media campaigns managed by our expert team.',
      bgImage: socialmedia,
    },
    {
      title: 'AI ChatBots',
      description: 'Automate customer interactions and support with intelligent AI chatbots. We build conversational agents that are fast, reliable, and capable of understanding user needs across various platforms.',
      bgImage: ai,
    }

  ];

  return (

    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh]">
        <img
          src={services}
          alt="Services Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            Our Premium Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl sm:max-w-2xl">
            Empowering your business with cutting-edge digital solutions tailored for growth and innovation.
          </p>
        </div>
      </section>


      {/* Cards Section */}
      <main
        className="min-h-screen text-gray-900 px-6 py-16 bg-gradient-to-br from-slate-100 via-white to-blue-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <section className="flex flex-col gap-6 py-0">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative w-full rounded-xl overflow-hidden shadow-lg min-h-[300px]"
            >
              <img
                src={card.bgImage}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6 md:px-12 py-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-base sm:text-lg md:text-lg max-w-2xl mb-4">
                  {card.description}
                </p>
                <Link
                  to="/contactForm"
                  className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 w-fit"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

          ))}
        </section>
        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
};

export default Services;
