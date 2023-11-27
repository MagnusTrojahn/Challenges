import youtube from './youtube.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { fetchRandomWord } from './components/RandomWordGenerator';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [randomWord, setRandomWord] = useState('');
  const [customWords, setCustomWords] = useState([]); // Use an array for custom words

  useEffect(() => {
    // Fetch a random word when the component mounts
    fetchRandomWord('word', '').then((word) => setRandomWord(word));
  }, []);

  const handleGenerateAnotherWord = () => {
    fetchRandomWord('word', '').then((word) => setRandomWord(word));
  };

  const handleAddWord = (word) => {
    // Add custom word to the list
    setCustomWords((prevWords) => [...prevWords, word]);
  };

  const handleAddRandomWord = () => {
    // Add another random word to the list
    fetchRandomWord('word', '').then((word) => handleAddWord(word));
  };

  const handleSearchOnYoutube = () => {
    // Join both random and custom words in the search query
    const searchQuery = `${randomWord} ${customWords.join(' ')}`;
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    window.location.href = searchUrl;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Youtube Search!</h1>
        <h2>
          Tired of always watching the same videos? Look no further! This website has the perfect solution to your problem
          and provides a neverending list of YouTube searches!
        </h2>
        <img src={youtube} className="App-logo" alt="logo" />

        <div>
        <p>Generated Word(s): {randomWord} {customWords.join(' ')}</p>

          <Button variant="primary" onClick={handleGenerateAnotherWord}>
            Generate Another Word
          </Button>

          {/* This button adds another word to the query */}
          <Button variant="secondary" onClick={handleAddRandomWord}>
            Add Random Word
          </Button>

          <Button variant="success" onClick={handleSearchOnYoutube}>
            Search on YouTube
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
