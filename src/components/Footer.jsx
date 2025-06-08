import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-slate-900 text-white pt-16 px-6 w-full">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">

				{/* Logo & Description */}
				<div>
					<h2 className="text-2xl font-bold text-blue-500 mb-4">WeVad</h2>
					<p className="text-sm text-gray-300">
						Building modern digital experiences that drive engagement and innovation.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
					<ul className="space-y-2 text-gray-300 text-sm">
						<li><a href="/services" className="hover:text-blue-400">Video Shoot</a></li>
						<li><a href="/services" className="hover:text-blue-400">Video Editing</a></li>
						<li><a href="/services" className="hover:text-blue-400">Social Media Growth</a></li>
						<li><a href="/services" className="hover:text-blue-400">Web Development</a></li>
						<li><a href="/services" className="hover:text-blue-400">App Development</a></li>
						<li><a href="/services" className="hover:text-blue-400">AI ChatBots</a></li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
					<ul className="space-y-2 text-gray-300 text-sm">
						<li>Email: support@wevad.com</li>
						<li>Phone: +91 98765 43210</li>
						<li>Location: Dadra & Nagar Haveli, India</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
					<div className="flex space-x-4">
						<a href="#" className="hover:text-blue-400">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="hover:text-blue-400">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" className="hover:text-blue-400">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" className="hover:text-blue-400">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="border-t border-slate-700 py-4 text-center text-sm text-gray-400">
				&copy; {new Date().getFullYear()} WeVad. All rights reserved.
			</div>
		</footer>
	)

}

export default Footer