import React from 'react';
import { Link } from 'react-router';
import './index.scss';

const App = ({ children }) =>
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/office'>Office</Link>
    </nav>
    <main>
      { children }
    </main>
  </div>;

export default App;
