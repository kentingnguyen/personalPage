import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RESUME_TEXT } from './TextConstants';


export default function Layout(props)  {
  const propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

    return (
      <div className="home-default-page">
        <Body />
        <div className="examples-page-container">
          {props.children}
        </div>
      </div>
    );
  }

function Body(props) {
  return <main>
<Section className="header" header="Full Stack Software Engineer" linkName="header">
  
</Section>
<Section header="Resume" linkName="Resume">
  {RESUME_TEXT}
</Section>
<Section header="About Me" linkName="about">
  Insert Text here
</Section>
  </main>
}


const Section = (props) => {
  return (
    <section className={props.className}>
      <a name="{props.linkName}" />
      <h2>{props.header}</h2>
        {props.children}
    </section>
  )
}

const Body2 = (props) => {
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
