import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Science Behind Random Word Generation for Creativity',
      excerpt: 'Discover how random words can unlock your creative potential and improve brainstorming sessions.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Creativity',
      slug: 'science-behind-random-word-generation'
    },
    {
      id: 2,
      title: '10 Fun Word Games to Improve Your Vocabulary',
      excerpt: 'Engaging activities and games that make learning new words enjoyable for all ages.',
      author: 'Emma Davis',
      date: '2025-01-12',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Education',
      slug: 'fun-word-games-improve-vocabulary'
    },
    {
      id: 3,
      title: 'How Teachers Use Random Words in the Classroom',
      excerpt: 'Educational strategies and techniques for incorporating random word generators in teaching.',
      author: 'Michael Chen',
      date: '2025-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Teaching',
      slug: 'teachers-random-words-classroom'
    },
    {
      id: 4,
      title: 'The Psychology of Word Association and Memory',
      excerpt: 'Understanding how our brains process and remember words through association techniques.',
      author: 'Sarah Johnson',
      date: '2025-01-08',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Psychology',
      slug: 'psychology-word-association-memory'
    },
    {
      id: 5,
      title: 'Building Stronger Writing with Synonym Diversity',
      excerpt: 'Tips and techniques for expanding your vocabulary and improving writing style.',
      author: 'Emma Davis',
      date: '2025-01-05',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Writing',
      slug: 'building-stronger-writing-synonym-diversity'
    },
    {
      id: 6,
      title: 'The Role of Rhyming in Language Development',
      excerpt: 'How rhyming words support early childhood development and language acquisition.',
      author: 'Michael Chen',
      date: '2025-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Development',
      slug: 'role-rhyming-language-development'
    }
  ];

  const categories = ['All', 'Creativity', 'Education', 'Teaching', 'Psychology', 'Writing', 'Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          WordGen Pro Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights, tips, and educational content about words, language learning, 
          and creative writing. Discover the power of vocabulary in our latest articles.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {filteredPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                    <span>{formatDate(filteredPosts[0].date)}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with WordGen Pro
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest articles, word generation tips, and educational content 
          delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;