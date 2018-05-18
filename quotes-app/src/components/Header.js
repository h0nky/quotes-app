import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <nav className="app-header-container">
        <ul className="app-header-menu">
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/profile'>AUTHORS</Link></li>
            <li><Link to='/quotes'>QUOTES</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header;
