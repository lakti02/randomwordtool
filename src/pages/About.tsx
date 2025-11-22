import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Linguist and educator with 15+ years in language learning technology.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Full-stack developer passionate about creating intuitive educational tools.'
    },
    {
      name: 'Emma Davis',
      role: 'Content Specialist',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Professional writer and vocabulary expert with a love for word games.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We provide accurate, high-quality word data and definitions from trusted sources.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly improving our tools with new features and educational approaches.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of writers, students, and language enthusiasts.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the best possible user experience and educational value.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About WordGen Pro
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about words and their power to inspire, educate, and connect people. 
          Our mission is to make language learning and creative writing more accessible and enjoyable.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-center mb-8">
                WordGen Pro was born from a simple observation: finding the right words shouldn't be hard.
              </p>
              <p>
                In 2020, our founder Sarah was helping her daughter with creative writing assignments when she 
                realized how difficult it was to find quality word generation tools. Existing solutions were either 
                too basic or overcomplicated, lacking the educational value that students and writers truly needed.
              </p>
              <p>
                That's when we decided to create something better. We brought together linguists, educators, 
                and developers to build a comprehensive platform that not only generates random words but also 
                helps users understand and use them effectively.
              </p>
              <p>
                Today, WordGen Pro serves over 100,000 users worldwide, from elementary school students learning 
                new vocabulary to professional writers seeking inspiration. We're proud to be part of countless 
                creative projects, educational journeys, and moments of discovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">
          WordGen Pro by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">100K+</div>
            <div className="text-blue-100">Happy Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10M+</div>
            <div className="text-blue-100">Words Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Categories</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-blue-100">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;