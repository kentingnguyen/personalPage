import React, { Component } from 'react';
import { DefaultPage } from './';
import { Header, Nav } from '../common';
import rekitLogo from '../../images/rekit-logo.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Layout(props)  {
  const propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

    return (
      <div className="home-default-page">
        {/* <Header>Home</Header> */}
        <Body />
        <div className="examples-page-container">
          {props.children}
        </div>
      </div>
    );
  }

const Body = (props) => {
        return <div className="app-intro">
          <h3>To get started:</h3>
          <ul>
            <li>
              Edit component{' '}
              <a
                href="http://localhost:6076/element/src%2Ffeatures%2Fhome%2FDefaultPage.js/code"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/features/home/DefaultPage.js
              </a>{' '}
              for this page.
            </li>
            <li>
              Edit component{' '}
              <a
                href="http://localhost:6076/element/src%2Ffeatures%2Fhome%2FApp.js/code"
                target="_blank"
                rel="noopener noreferrer"
              >
                src/features/home/App.js
              </a>{' '}
              for the root container layout.
            </li>
            <li>
              To see examples, access:&nbsp;
              <Link to="/examples">/examples</Link>
            </li>
            <li>
              Rekit Studio is running at:&nbsp;
              <a href="http://localhost:6076/" target="_blank" rel="noopener noreferrer">
                http://localhost:6076/
              </a>.
            </li>
          </ul>
        </div>
}
