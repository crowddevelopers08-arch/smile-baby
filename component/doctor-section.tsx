import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Fertility specialists',
      role: '(MBBS, MS OBG)',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop'
    },
    {
      name: 'Fellowship-trained',
      role: 'laparoscopic surgery expertise',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop'
    },
    {
      name: 'Embryology lab team',
      role: '(MSc Embryology)',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop'
    },
    {
      name: 'Urology support',
      role: '(MCh Urology)',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-pink-400 text-sm font-semibold mb-3 uppercase tracking-wider flex items-center">
              <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
              OUR TEAM
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e2875] mb-4">
              A Complete Fertility Team — <span className="text-pink-400">Not Just One Doctor</span>
            </h2>
          </div>
          
          <div className="lg:ml-8">
            <p className="text-gray-600 mb-6 max-w-md">
               IVF success depends on the right diagnosis, the right lab work, and the right protocol — guided by experienced specialists.
            </p>
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors duration-300">
              Talk to Our IVF Team
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 7l9.586 0 0 9.586" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 7L7 17" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#f3f4ff] rounded-3xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[#1e2875] font-bold text-xl mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {member.role}
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;