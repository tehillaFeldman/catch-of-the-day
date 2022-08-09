import React, { Component } from 'react';

const Header = ({ tagline }) => (
  <div className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span className='of'>Of</span>
        <span className='the'>The</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{tagline}</span>
    </h3>
  </div>
);

export default Header;
