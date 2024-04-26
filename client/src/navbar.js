import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'black', color: 'white' }}>
      <div>
        <a href="/" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Home</a>
        <a href="/Views" style={{ color: 'white', textDecoration: 'none', marginRight: '15px'}}>Views</a>
        <a href="/Tables" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Tables</a>
        <a href="/Procedures" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Procedures</a>
      </div>
    </nav>
  );
}

export default NavBar;
