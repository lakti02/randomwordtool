export interface Word {
  word: string;
  type: string;
  category: string;
  syllables: number;
  definition: string;
}

export const wordDatabase: Word[] = [
  // Nouns - Animals
  { word: "elephant", type: "noun", category: "animals", syllables: 3, definition: "A large mammal with a trunk and tusks" },
  { word: "butterfly", type: "noun", category: "animals", syllables: 3, definition: "A colorful flying insect with large wings" },
  { word: "dolphin", type: "noun", category: "animals", syllables: 2, definition: "An intelligent marine mammal" },
  { word: "penguin", type: "noun", category: "animals", syllables: 2, definition: "A flightless bird found in cold regions" },
  { word: "kangaroo", type: "noun", category: "animals", syllables: 3, definition: "A hopping marsupial from Australia" },
  
  // Nouns - Nature
  { word: "mountain", type: "noun", category: "nature", syllables: 2, definition: "A large natural elevation of earth" },
  { word: "ocean", type: "noun", category: "nature", syllables: 2, definition: "A vast body of salt water" },
  { word: "forest", type: "noun", category: "nature", syllables: 2, definition: "A large area covered with trees" },
  { word: "rainbow", type: "noun", category: "nature", syllables: 2, definition: "A multicolored arc in the sky after rain" },
  { word: "thunder", type: "noun", category: "nature", syllables: 2, definition: "The loud sound that follows lightning" },
  
  // Nouns - Food
  { word: "pizza", type: "noun", category: "food", syllables: 2, definition: "A round flatbread with toppings" },
  { word: "chocolate", type: "noun", category: "food", syllables: 3, definition: "A sweet confection made from cocoa" },
  { word: "sandwich", type: "noun", category: "food", syllables: 2, definition: "Food between two pieces of bread" },
  { word: "apple", type: "noun", category: "food", syllables: 2, definition: "A round fruit that grows on trees" },
  { word: "banana", type: "noun", category: "food", syllables: 3, definition: "A yellow curved tropical fruit" },
  
  // Verbs - Action
  { word: "dance", type: "verb", category: "action", syllables: 1, definition: "To move rhythmically to music" },
  { word: "sing", type: "verb", category: "action", syllables: 1, definition: "To make musical sounds with the voice" },
  { word: "jump", type: "verb", category: "action", syllables: 1, definition: "To leap or spring up" },
  { word: "create", type: "verb", category: "action", syllables: 2, definition: "To bring something into existence" },
  { word: "explore", type: "verb", category: "action", syllables: 2, definition: "To investigate or travel through" },
  
  // Adjectives - Descriptive
  { word: "beautiful", type: "adjective", category: "descriptive", syllables: 3, definition: "Pleasing to look at or attractive" },
  { word: "magnificent", type: "adjective", category: "descriptive", syllables: 4, definition: "Impressively beautiful or elaborate" },
  { word: "tiny", type: "adjective", category: "descriptive", syllables: 2, definition: "Very small in size" },
  { word: "enormous", type: "adjective", category: "descriptive", syllables: 3, definition: "Very large in size or quantity" },
  { word: "brilliant", type: "adjective", category: "descriptive", syllables: 2, definition: "Exceptionally clever or bright" },
  
  // More words for variety
  { word: "adventure", type: "noun", category: "abstract", syllables: 3, definition: "An exciting or unusual experience" },
  { word: "wisdom", type: "noun", category: "abstract", syllables: 2, definition: "The quality of having experience and knowledge" },
  { word: "courage", type: "noun", category: "abstract", syllables: 2, definition: "The ability to face danger or difficulty" },
  { word: "mystery", type: "noun", category: "abstract", syllables: 3, definition: "Something that is difficult to understand" },
  { word: "harmony", type: "noun", category: "abstract", syllables: 3, definition: "A state of peaceful agreement" },
  
  { word: "whisper", type: "verb", category: "communication", syllables: 2, definition: "To speak very softly" },
  { word: "giggle", type: "verb", category: "communication", syllables: 2, definition: "To laugh in a light, silly way" },
  { word: "dream", type: "verb", category: "mental", syllables: 1, definition: "To imagine or hope for something" },
  { word: "wonder", type: "verb", category: "mental", syllables: 2, definition: "To think about or question something" },
  { word: "remember", type: "verb", category: "mental", syllables: 3, definition: "To recall something from the past" },
  
  { word: "sparkly", type: "adjective", category: "appearance", syllables: 2, definition: "Shining with small flashes of light" },
  { word: "cozy", type: "adjective", category: "feeling", syllables: 2, definition: "Warm and comfortable" },
  { word: "mysterious", type: "adjective", category: "feeling", syllables: 4, definition: "Difficult to understand or explain" },
  { word: "peaceful", type: "adjective", category: "feeling", syllables: 2, definition: "Calm and tranquil" },
  { word: "energetic", type: "adjective", category: "feeling", syllables: 4, definition: "Full of energy and enthusiasm" },
];

export const categories = [
  'all',
  'animals',
  'nature',
  'food',
  'action',
  'descriptive',
  'abstract',
  'communication',
  'mental',
  'appearance',
  'feeling'
];

export const wordTypes = [
  'all',
  'noun',
  'verb',
  'adjective'
];

export const rhymingWords: { [key: string]: string[] } = {
  'cat': ['bat', 'hat', 'mat', 'rat', 'sat', 'fat'],
  'dog': ['frog', 'log', 'hog', 'fog', 'jog', 'clog'],
  'sun': ['fun', 'run', 'gun', 'bun', 'nun', 'done'],
  'tree': ['free', 'bee', 'see', 'key', 'tea', 'sea'],
  'blue': ['true', 'new', 'few', 'crew', 'grew', 'flew'],
  'night': ['light', 'bright', 'sight', 'flight', 'height', 'might'],
  'love': ['dove', 'above', 'glove', 'shove', 'grove', 'drove'],
  'play': ['day', 'way', 'say', 'may', 'bay', 'clay'],
};

export const synonyms: { [key: string]: string[] } = {
  'happy': ['joyful', 'cheerful', 'glad', 'delighted', 'pleased', 'content'],
  'sad': ['unhappy', 'sorrowful', 'melancholy', 'dejected', 'glum', 'downcast'],
  'big': ['large', 'huge', 'enormous', 'massive', 'gigantic', 'immense'],
  'small': ['tiny', 'little', 'miniature', 'petite', 'minute', 'compact'],
  'fast': ['quick', 'rapid', 'swift', 'speedy', 'hasty', 'brisk'],
  'slow': ['sluggish', 'gradual', 'leisurely', 'unhurried', 'dawdling', 'lagging'],
  'beautiful': ['lovely', 'gorgeous', 'stunning', 'attractive', 'pretty', 'elegant'],
  'ugly': ['hideous', 'unsightly', 'repulsive', 'grotesque', 'unattractive', 'homely'],
};