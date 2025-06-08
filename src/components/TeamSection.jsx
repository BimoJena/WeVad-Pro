import React from 'react';
import member1 from '../assets/member1.jpeg';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Hariom', role: 'The visionary behind the young brand WeVad and the creative director of the team, driving content growth with his strong strategic approach.', image: member1 },
    { name: 'Bimochan', role: 'The lead developer at WeVad, turning ideas into reality with expert coding and creative problem-solving.', image: member1 },
    { name: 'Rohan Mehta', role: 'The visual storyteller of WeVad, crafting compelling videos with precision and creative flair to bring every story to life', image: member1 },
    { name: 'Nikita Desai', role: 'The brain behind WeVad’s outreach, designing smart marketing plans that elevate brands and drive engagement.', image: member1 },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Meet Our <span className="text-blue-600">Team</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group shadow-md rounded-xl overflow-hidden transition hover:scale-105 duration-300 max-w-[250px] w-full"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-center transition duration-300 group-hover:blur-sm"
              />

              {/* Name tag at bottom left */}
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-3 py-1 rounded-md text-lg font-bold z-10">
                {member.name}
              </div>

              {/* Role overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300 pl-4">
                {member.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
