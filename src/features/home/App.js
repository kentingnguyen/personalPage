import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Nav } from '../common';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default function App(props) {
   const propTypes = {
    children: PropTypes.node,
  };

   const defaultProps = {
    children: '',
  };

      return (
      <div className="home-app">
        <Header />
        <div className="page-container">{props.children}</div>
      </div>
    );
  }