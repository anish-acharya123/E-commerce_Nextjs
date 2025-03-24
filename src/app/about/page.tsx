import Image from "next/image";
import React from "react";

// TypeScript Interfaces for Component Data
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface AchievementItem {
  id: number;
  title: string;
  value: string;
  icon: string;
}

const AboutUsPage: React.FC = () => {
  // Restaurant Team Members Data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Elena Rodriguez",
      role: "Executive Chef",
      bio: "With 15 years of culinary experience, Elena brings passion and innovation to every dish.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Marcus Thompson",
      role: "Head of Culinary Operations",
      bio: "A master of flavor combinations and sustainable sourcing.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Sarah Kim",
      role: "Restaurant Manager",
      bio: "Dedicated to creating exceptional dining experiences for our guests.",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        linkedin: "#",
      },
    },
  ];

  // Restaurant Core Values
  const coreValues: ValueItem[] = [
    {
      id: 1,
      title: "Sustainability",
      description:
        "We source locally and minimize our environmental footprint.",
      icon: "🌍",
    },
    {
      id: 2,
      title: "Quality",
      description: "Only the freshest ingredients make it to your plate.",
      icon: "⭐",
    },
    {
      id: 3,
      title: "Community",
      description: "Supporting local farmers and producers is at our core.",
      icon: "🤝",
    },
  ];

  // Restaurant Achievements
  const achievements: AchievementItem[] = [
    {
      id: 1,
      title: "Years in Business",
      value: "10+",
      icon: "⏰",
    },
    {
      id: 2,
      title: "Local Sourcing",
      value: "95%",
      icon: "🥬",
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      value: "4.8/5",
      icon: "💯",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              FoodZone Restaurant
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              A culinary journey that celebrates local flavors, sustainable
              practices, and the art of innovative cooking.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2013, Urban Harvest began with a simple mission: to
              create delicious, sustainable cuisine that connects people with
              local producers. What started as a small farm-to-table concept has
              grown into a beloved community restaurant.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in more than just serving food. We're about creating
              experiences, supporting local agriculture, and bringing people
              together through exceptional dining.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              width={600}
              height={400}
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-5xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-500 italic mb-4">"{member.bio}"</p>
                <div className="flex justify-center space-x-4">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.socialLinks?.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800"
                    >
                      Instagram
                    </a>
                  )}
                  {member.socialLinks?.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-5xl">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {achievement.value}
                </h3>
                <p className="text-gray-600">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
