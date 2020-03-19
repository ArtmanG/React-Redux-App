import React from 'react';

import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>Which Book Are You?</h2>
      <CharacterForm />
      <CharacterList />
    </div>
  );
}

export default App;

