import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'navy', color: 'white' }}>
      <div>
        <a href="/" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Home</a>
        <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
      </div>
      <div>
        Contact
      </div>
    </nav>
  );
}

export default NavBar;
