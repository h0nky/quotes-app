import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Quotes from './Quotes';

const Header = () => (
  <header>
    <nav>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/profile'>PROFILE</Link></li>
            <li><Link to='/quotes'>QUOTES</Link></li>
        </ul>
    </nav>
  </header>
)

export default Header;
