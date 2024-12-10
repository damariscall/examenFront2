import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import Favorites from './pages/Favorites';
import ContactForm from './pages/ContactForm';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
