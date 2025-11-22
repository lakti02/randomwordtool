import React, { useState, useEffect } from 'react';
import { Shuffle, Copy, Download, RefreshCw } from 'lucide-react';
import { wordDatabase, categories, wordTypes, Word } from '../data/words';

const WordGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [minSyllables, setMinSyllables] = useState(1);
  const [maxSyllables, setMaxSyllables] = useState(5);
  const [wordCount, setWordCount] = useState(1);
  const [generatedWords, setGeneratedWords] = useState<Word[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const filterWords = () => {
    return wordDatabase.filter(word => {
      const categoryMatch = selectedCategory === 'all' || word.category === selectedCategory;
      const typeMatch = selectedType === 'all' || word.type === selectedType;
      const syllableMatch = word.syllables >= minSyllables && word.syllables <= maxSyllables;
      
      return categoryMatch && typeMatch && syllableMatch;
    });
  };

  const generateWords = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const filteredWords = filterWords();
      if (filteredWords.length === 0) {
        setGeneratedWords([]);
        setIsGenerating(false);
        return;
      }

      const words: Word[] = [];
      const usedIndices = new Set();
      
      for (let i = 0; i < Math.min(wordCount, filteredWords.length); i++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * filteredWords.length);
        } while (usedIndices.has(randomIndex) && usedIndices.size < filteredWords.length);
        
        usedIndices.add(randomIndex);
        words.push(filteredWords[randomIndex]);
      }
      
      setGeneratedWords(words);
      setIsGenerating(false);
    }, 300);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const copyAllWords = () => {
    const wordList = generatedWords.map(word => word.word).join(', ');
    copyToClipboard(wordList);
  };

  const downloadWords = () => {
    const wordList = generatedWords.map(word => 
      `${word.word} (${word.type}) - ${word.definition}`
    ).join('\n');
    
    const blob = new Blob([wordList], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-words.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    generateWords();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* SEO Content */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Advanced Random Word Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Generate random words with precise control over word type, category, syllables, and more. 
          Perfect for writers, educators, and creative professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Generation Settings
            </h2>
            
            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Word Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Word Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {wordTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Syllables */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Syllables Range
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Min</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={minSyllables}
                    onChange={(e) => setMinSyllables(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Max</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={maxSyllables}
                    onChange={(e) => setMaxSyllables(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Word Count */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Words
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateWords}
              disabled={isGenerating}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Shuffle className="h-5 w-5" />
                  <span>Generate Words</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">
                Generated Words ({generatedWords.length})
              </h2>
              {generatedWords.length > 0 && (
                <div className="flex space-x-3">
                  <button
                    onClick={copyAllWords}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy All</span>
                  </button>
                  <button
                    onClick={downloadWords}
                    className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              )}
            </div>

            {generatedWords.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">
                  No words found with current filters
                </div>
                <p className="text-gray-500">
                  Try adjusting your filters or generate new words
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {generatedWords.map((word, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-blue-600">
                            {word.word}
                          </h3>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                            {word.type}
                          </span>
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                            {word.syllables} syllable{word.syllables !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {word.definition}
                        </p>
                        <span className="text-sm text-gray-500 capitalize">
                          Category: {word.category}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(word.word)}
                        className="bg-gray-50 text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mt-3 sm:mt-0 sm:ml-4"
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
      </div>

      {/* SEO Content */}
      <div className="mt-16 prose prose-lg max-w-4xl mx-auto">
        <h2>How to Use the Random Word Generator</h2>
        <p>
          Our advanced random word generator allows you to create words with precise control over various parameters:
        </p>
        <ul>
          <li><strong>Category:</strong> Choose from animals, nature, food, and more</li>
          <li><strong>Word Type:</strong> Filter by nouns, verbs, or adjectives</li>
          <li><strong>Syllables:</strong> Control word length and complexity</li>
          <li><strong>Batch Generation:</strong> Generate multiple words at once</li>
        </ul>
        
        <h3>Perfect for:</h3>
        <ul>
          <li>Creative writing and storytelling</li>
          <li>Educational activities and vocabulary building</li>
          <li>Word games and brain training</li>
          <li>Content creation and brainstorming</li>
        </ul>
      </div>
    </div>
  );
};

export default WordGenerator;