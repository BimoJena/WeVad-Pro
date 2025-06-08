import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import main from "../assets/main.jpg";
import ai from "../assets/ai.jpg";
import coding from "../assets/coding.jpg";
import coding2 from "../assets/coding2.jpeg";
import editing from "../assets/editing.jpg";
import socialmedia from "../assets/socialmedia.png";
import videoProduction from "../assets/videoProduction.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // for Swiper v9+
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ContactUs from "./Contact";
import Footer from "./Footer";



const expertiseData = [
  {
    title: "Creative Video Production",
    description:
      "We craft compelling video content that captures attention and tells your brand story effectively—ideal for marketing, branding, and social media engagement.",
    img: videoProduction,
  },
  {
    title: "Creative Video Editing",
    description:
      "Transform raw footage into visually stunning videos with professional editing,  sound design, and smooth transitions that resonate with your audience.",
    img: editing,
  },
  {
    title: "Responsive Web Design",
    description:
      "Build elegant, fast-loading, and mobile-friendly websites designed for seamless user experience, optimized for all devices and screen sizes.",
    img: coding,
  },
  {
    title: "Mobile App Development",
    description:
      "Develop scalable and intuitive mobile apps for Android and iOS platforms—engineered to provide high performance and a flawless user experience.",
    img: coding2,
  },
  {
    title: "Social Media Strategy",
    description:
      "Increase visibility, engagement, and brand loyalty with strategic planning, consistent content, and analytics-driven social media management.",
    img: socialmedia,
  },
  {
    title: "AI-Powered Chatbots",
    description:
      "Integrate intelligent chatbot solutions to automate customer service, boost engagement, and provide 24/7 support with human-like interaction.",
    img: ai,
  },
];

const reviews = [
  {
    name: "Aarav Sharma",
    title: "CEO at TechNova",
    review:
      "WeVad transformed our workflow completely. Their team is professional, creative, and always meets deadlines. Highly recommended!",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Meera Patel",
    title: "Marketing Head at Brandify",
    review:
      "Working with WeVad has been a delight. They understand client needs like no other team we’ve worked with.",
    stars: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Raj Verma",
    title: "Founder of StartHub",
    review:
      "Their approach to design and execution is world-class. The project delivery exceeded our expectations.",
    stars: 5,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];




const Home = () => {
  return (
    <main
      className="min-h-screen text-gray-900 px-6 py-16 bg-gradient-to-br from-slate-100 via-white to-blue-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 ">
        {/* Left side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-blue-600">Empowering </span>
            Modern Businesses with Digital Presence & Technologies
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Boost your brand with our expert video production, advanced web and
            app development, and effective social media management. We help
            businesses engage audiences, enhance their online presence, and
            accelerate growth with innovative technology and creative
            storytelling.
          </p>
          <div className="flex flex-row gap-8 mt-4">
            <Link
              to="/contactForm"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="inline-block text-blue-600 text-[16px] font-semibold underline hover:text-blue-800 transition-colors duration-300 pt-3"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2">
          <img
            src={main}
            alt="Digital media illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Core Services Section */}
      <section className="hidden lg:block bg-slate-100 w-full mt-10 rounded-lg shadow-md">
        <div className="max-w-7xl flex mx-auto px-8 gap-5">
          <h2 className="text-[17px] font-semibold text-center text-slate-800 mb-6 pt-6 ">
            I'm here for
          </h2>
          <div className="flex flex-wrap justify-center  gap-4 py-4 text-sm md:text-base">
            {[
              "Video Editing",
              "Video Shoot",
              "Social Media Manage",
              "Website Development",
              "App Development",
              "AI Chat Bots",
            ].map((service) => (
              <div
                key={service}
                className="bg-blue-100 px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Expertise Section with Images & Hover Effect */}
      <section className="max-w-7xl mx-auto mt-16 px-7">
        <h2 className="text-4xl font-bold text-slate-900 mb-10">
          The WeVad <span className="text-blue-600">Experties </span>
        </h2>

        {/* Container for slider on small, grid on md+ */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16" // add bottom padding for arrows and dots
        >
          {expertiseData.map(({ title, description, img }) => (
            <SwiperSlide key={title}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom pagination and navigation */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <button className="custom-prev bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition mb-8">
              &#8592;
            </button>

            <div className="custom-pagination justify-center md:pr-5 md:mt-10 pr-4 mt-8 swiper-pagination !flex !space-x-2" />

            <button className="custom-next bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition mb-8">
              &#8594;
            </button>
          </div>
        </Swiper>

      </section>


      {/* How to engage*/}
      <section className="max-w-7xl mx-auto mt-16 px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-6">
          <h2 className="text-4xl font-bold text-slate-900 max-w-[56rem] leading-tight text-left w-full md:w-auto">
            <span className="block mb-3">Not sure how to engage?</span>
            <span className="block">
              Our <span className="text-blue-600">WeVad Work Models</span> have you covered
            </span>
          </h2>

          <Link
            to="/contactForm"
            className="bg-blue-600 text-white px-8 mt-2 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap self-start"
          >
            Get In Touch
          </Link>
        </div>




        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-110">
            <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m1-7H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2z"
                />
              </svg>
              Projects
            </h3>

            <ul className="text-gray-700 space-y-2 text-left">
              {[
                "Fixed Scope - Set price, clear deliverables, and strict deadlines.",
                "Milestone Model - Pay per phase with trackable goals.",
                "Time & Material - Flexible billing for evolving project needs."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 flex-shrink-0 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-110">
            <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 7V3m-4 4h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2z"
                />
              </svg>
              Managed Services
            </h3>
            <ul className="text-gray-700 space-y-2 text-left">
              {[
                "Comprehensive lifecycle management from start to finish.",
                "Collaborative support alongside your internal teams.",
                "Integrated solutions across apps, data, and AI ecosystems."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 flex-shrink-0 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-110">
            <h3 className="flex items-center text-xl font-semibold text-blue-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
              People
            </h3>

            <ul className="text-gray-700 space-y-2 text-left">
              {[
                "Long-term teams focused on your strategic goals.",
                "Flexible staffing for quick, short-term projects.",
                "Expert consulting available whenever you need it."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 flex-shrink-0 mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>


      </section>

      {/* meet our customers */}
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map(({ name, title, review, stars, avatar }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{name}</h4>
                  <p className="text-sm text-gray-500">{title}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm">{review}</p>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < stars ? "#facc15" : "none"}
                    viewBox="0 0 24 24"
                    stroke="#facc15"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactUs />
      <Footer />

    </main >
  );
};

export default Home;
