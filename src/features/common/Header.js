import React, { Component } from 'react';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import { Nav } from './';

export default function Header(props) {
  const  propTypes = {

  };

    return (
          <header className="app-header">
            <img src={reactLogo} className="s_logo app-logo" alt="logo" />
            <img src={rekitLogo} className="s_logo rekit-logo" alt="logo" />
            <h1 className="app-title">{props.children}</h1>
          <Nav currentPage={props.currentPage}/>
          </header>
    );
  }