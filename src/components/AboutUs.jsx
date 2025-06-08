import React from 'react';
import aboutus from '../assets/aboutus.jpg';
import { Link } from "react-router-dom";
import TeamSection from './TeamSection';
import ContactUs from './Contact';
import Footer from './Footer';
import ContactForm from './ContactForm';


const AboutUs = () => {

	return (
		<div>
			{/* Hero Section */}
			<section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh]">
				<img
					src={aboutus}
					alt="About Us Hero"
					className="w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-4 sm:px-8">
					<h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 flex flex-wrap items-center gap-3">
						All About
						<span className="text-base sm:text-lg md:text-xl bg-blue-600 text-white px-4 py-2 rounded-sm">
							WeVad
						</span>
					</h1>

					<div className="text-sm sm:text-base md:text-sm text-gray-200 max-w-3xl leading-relaxed space-y-4">
						<p>
							WeVad is a full-spectrum digital company built by creators, strategists, and tech
							enthusiasts who are passionate about transforming ideas into powerful digital experiences.
							We specialize in delivering cutting-edge services like <strong>video shooting</strong>,
							<strong> professional editing</strong>, <strong>digital strategy</strong>,{' '}
							<strong>social media management</strong>, <strong>web development</strong>,{' '}
							<strong>mobile app development</strong>, and much more.
						</p>
						<p>
							At our core, we believe technology should enable creativity and drive real-world results.
							We don’t just build things — we craft solutions that connect, engage, and deliver impact.
							From visually compelling video content to fully scalable tech platforms, every project we
							take on is rooted in innovation, storytelling, and strategy.
						</p>
						<p>
							WeVad thrives on curiosity, collaboration, and a relentless drive to push digital
							boundaries. We’re not here just to do the work — we’re here to elevate your brand,
							amplify your voice, and turn every idea into digital success.
						</p>
						<p className="font-semibold text-white">Let’s create something amazing — together.</p>

					</div>
					<Link
						to="/contactForm"
						className="bg-white text-black text-sm font-semibold px-4 mt-5 py-2 rounded-md hover:bg-gray-200 transition duration-300 w-fit"
					>
						Get In Touch
					</Link>
				</div>
			</section>
			<TeamSection/>
			<ContactForm />
		</div>
	);
};

export default AboutUs;
