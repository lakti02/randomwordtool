import React, { useState } from 'react';
import { Search, Copy, BookOpen } from 'lucide-react';
import { synonyms } from '../data/words';

const Synonyms = () => {
  const [searchWord, setSearchWord] = useState('');
  const [synonymsList, setSynonymsList] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const findSynonyms = () => {
    const word = searchWord.toLowerCase().trim();
    if (word) {
      const foundSynonyms = synonyms[word] || [];
      setSynonymsList(foundSynonyms);
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      findSynonyms();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Synonyms & Antonyms Finder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expand your vocabulary and improve your writing with our comprehensive 
          synonyms finder. Discover alternative words to make your content more engaging.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a word to find synonyms..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={findSynonyms}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Find Synonyms</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {hasSearched && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Synonyms for "{searchWord}"
            </h2>
            
            {synonymsList.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No synonyms found for "{searchWord}"
                </div>
                <p className="text-gray-500">
                  Try a different word or check the spelling
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {synonymsList.map((synonym, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900">
                        {synonym}
                      </span>
                      <button
                        onClick={() => copyToClipboard(synonym)}
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                        title="Copy word"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Popular Synonyms */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Common Word Synonyms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(synonyms).map(([word, synonymsList]) => (
            <div key={word} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 capitalize">
                  {word}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {synonymsList.map((synonym, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchWord(word);
                      setSynonymsList(synonymsList);
                      setHasSearched(true);
                    }}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {synonym}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-16 prose prose-lg max-w-4xl mx-auto">
        <h2>Understanding Synonyms and Their Importance</h2>
        <p>
          Synonyms are words that have the same or similar meanings. They're crucial for 
          effective communication, helping writers avoid repetition and express ideas with 
          precision and variety.
        </p>
        
        <h3>Benefits of Using Synonyms:</h3>
        <ul>
          <li><strong>Avoid Repetition:</strong> Keep your writing engaging and varied</li>
          <li><strong>Enhance Clarity:</strong> Choose words that better express your meaning</li>
          <li><strong>Improve Style:</strong> Elevate your writing with sophisticated vocabulary</li>
          <li><strong>Target Audience:</strong> Adjust your language for different readers</li>
        </ul>
        
        <h3>When to Use Synonyms:</h3>
        <ul>
          <li>Academic and professional writing</li>
          <li>Creative writing and storytelling</li>
          <li>Content creation and marketing</li>
          <li>Speech writing and presentations</li>
          <li>Language learning and vocabulary building</li>
        </ul>
        
        <h3>Tips for Choosing the Right Synonym:</h3>
        <ul>
          <li>Consider the context and tone of your writing</li>
          <li>Think about your audience's vocabulary level</li>
          <li>Check the connotations and subtle differences in meaning</li>
          <li>Ensure the synonym fits grammatically in your sentence</li>
        </ul>
      </div>
    </div>
  );
};

export default Synonyms;