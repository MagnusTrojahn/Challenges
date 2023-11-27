import React, { useState, useEffect } from 'react';

export const fetchRandomWord = async (endpoint, params) => {
  try {
    const response = await fetch(`https://random-word-api.herokuapp.com/${endpoint}${params}`);
    const data = await response.json();
    if (data.length > 0) {
      return data[0];
    } else {
      return 'No words found.';
    }
  } catch (error) {
    console.error('Error fetching random word:', error);
    return 'Error fetching word.';
  }
};

const RandomWordGenerator = () => {
  const [randomWord, setRandomWord] = useState('');

  useEffect(() => {
    // Fetch a random word without any parameters
    fetchRandomWord('word', '').then((word) => setRandomWord(word));
  }, []);

  return (
    <div>
      {/* You can include additional JSX here if needed */}
    </div>
  );
};

export default RandomWordGenerator;
