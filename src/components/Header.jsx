import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header style={{ padding: '16px', background: '#282c34', color: 'white' }}>
        <nav>
        <Link to="/" style={{ marginRight: '16px', color: 'white' }}>Inicio</Link>
        <Link to="/favorites" style={{ marginRight: '16px', color: 'white' }}>Favoritos</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contacto</Link>
        </nav>
    </header>
);

export default Header;
