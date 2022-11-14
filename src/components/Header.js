import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
