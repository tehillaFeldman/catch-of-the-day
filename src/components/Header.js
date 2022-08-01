import React, { Component, Fragment } from 'react';

const Header = ({ tagline }) => (
  <Fragment className='top'>
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
  </Fragment>
);

export default Header;
