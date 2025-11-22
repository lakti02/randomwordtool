import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shuffle, BookOpen, Zap, Users, Search, Heart } from 'lucide-react';
import { wordDatabase } from '../data/words';

const Home = () => {
  const [randomWord, setRandomWord] = useState('');
  const [wordDefinition, setWordDefinition] = useState('');

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordDatabase.length);
    const word = wordDatabase[randomIndex];
    setRandomWord(word.word);
    setWordDefinition(word.definition);
  };

  useEffect(() => {
    generateRandomWord();
  }, []);

  const features = [
    {
      icon: Shuffle,
      title: 'Smart Word Generation',
      description: 'Generate words by type, category, length, and syllables with our advanced filtering system.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Database',
      description: 'Access thousands of words with definitions, examples, and usage information.'
    },
    {
      icon: Search,
      title: 'Rhyming & Synonyms',
      description: 'Find rhyming words and synonyms to enhance your writing and vocabulary.'
    },
    {
      icon: Heart,
      title: 'Word Games',
      description: 'Play engaging word games to improve your vocabulary and have fun learning.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Words in Database' },
    { number: '50+', label: 'Categories' },
    { number: '1M+', label: 'Words Generated' },
    { number: '100K+', label: 'Happy Users' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Generate Random Words
              <span className="block text-blue-200">Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The ultimate word generator for writers, students, and language enthusiasts. 
              Create inspiration with our smart filtering system.
            </p>
            
            {/* Quick Word Generator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-4xl font-bold text-blue-100 min-h-[3rem] flex items-center">
                  {randomWord || 'Loading...'}
                </div>
                <p className="text-blue-200 text-center italic">
                  {wordDefinition}
                </p>
                <button
                  onClick={generateRandomWord}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Shuffle className="h-5 w-5" />
                  <span>Generate New Word</span>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/generator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Advanced Generator
              </Link>
              <Link
                to="/word-games"
                className="bg-blue-500/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Play Word Games
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Word Generation Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to generate, explore, and play with words. 
              Perfect for creative writing, education, and language learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of writers, students, and language enthusiasts who use our tools daily.
          </p>
          <Link
            to="/generator"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <Zap className="h-5 w-5" />
            <span>Start Generating Words</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;