import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Characters from './Characters';
import './App.css';
import Nav from './Nav';
import Stark from './Stark';
import Continents from './Continents';
import Home from './Home';
import CharactersDetail from './CharactersDetail';
import Footer from './Footer';


function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/stark/" element={<Stark />} />
        <Route path="/stark/character/:id" element={<CharactersDetail />} />
        <Route path="/characters/character/:id" element={<CharactersDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
