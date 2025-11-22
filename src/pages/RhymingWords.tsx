import React, { useState } from 'react';
import { Search, Volume2, Copy } from 'lucide-react';
import { rhymingWords } from '../data/words';

const RhymingWords = () => {
  const [searchWord, setSearchWord] = useState('');
  const [rhymes, setRhymes] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const findRhymes = () => {
    const word = searchWord.toLowerCase().trim();
    if (word) {
      const foundRhymes = rhymingWords[word] || [];
      setRhymes(foundRhymes);
      setHasSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      findRhymes();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Rhyming Words Finder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find perfect rhymes for your poetry, songwriting, and creative projects. 
          Discover words that sound alike to enhance your creative expression.
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
                placeholder="Enter a word to find rhymes..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={findRhymes}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Find Rhymes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {hasSearched && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Rhymes for "{searchWord}"
            </h2>
            
            {rhymes.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No rhymes found for "{searchWord}"
                </div>
                <p className="text-gray-500">
                  Try a different word or check the spelling
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rhymes.map((rhyme, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900">
                        {rhyme}
                      </span>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={() => speakWord(rhyme)}
                          className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                          title="Pronounce word"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => copyToClipboard(rhyme)}
                          className="text-gray-500 hover:text-green-600 transition-colors duration-200"
                          title="Copy word"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Popular Rhymes */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Rhyme Patterns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(rhymingWords).slice(0, 6).map(([word, rhymeList]) => (
            <div key={word} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-3 capitalize">
                {word}
              </h3>
              <div className="space-y-2">
                {rhymeList.slice(0, 4).map((rhyme, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{rhyme}</span>
                    <button
                      onClick={() => {
                        setSearchWord(word);
                        setRhymes(rhymeList);
                        setHasSearched(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View all
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content */}
      <div className="mt-16 prose prose-lg max-w-4xl mx-auto">
        <h2>About Rhyming Words</h2>
        <p>
          Rhyming words are words that have similar ending sounds. They're essential for poetry, 
          songwriting, and creative writing. Our rhyming words finder helps you discover perfect 
          rhymes to enhance your creative projects.
        </p>
        
        <h3>Types of Rhymes:</h3>
        <ul>
          <li><strong>Perfect Rhymes:</strong> Words with identical ending sounds (cat/hat)</li>
          <li><strong>Near Rhymes:</strong> Words with similar but not identical sounds</li>
          <li><strong>Internal Rhymes:</strong> Rhymes within a single line of poetry</li>
        </ul>
        
        <h3>Uses for Rhyming Words:</h3>
        <ul>
          <li>Poetry and verse writing</li>
          <li>Song lyrics and music composition</li>
          <li>Children's books and educational content</li>
          <li>Marketing slogans and memorable phrases</li>
          <li>Language learning and pronunciation practice</li>
        </ul>
      </div>
    </div>
  );
};

export default RhymingWords;