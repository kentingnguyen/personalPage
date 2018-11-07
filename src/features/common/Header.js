import React, { Component } from 'react';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { DocumentTitle} from './';

  const links = [
    { 
      key: "",
      name: "Home"
      },
    { 
      key: "pics",
      name: "Pics"
      },
    {
      key: "blog",
      name: "Blog"
      }
  ];

export default function Header(props) {
  const propTypes = {
  };

    return (
          <header className="app-header">
            <img src={reactLogo} className="s_logo app-logo" alt="logo" />
            <img src={rekitLogo} className="s_logo rekit-logo" alt="logo" />
          <HeaderTitle />
          <Nav currentPage={props.currentPage}/>
          </header>
    );
  }

function HeaderTitle() {
  return (
          <div>
            <Route exact path="/:id" component={H1} />
            <Route exact path="/" render={() => <h1>Home</h1>}/>
          </ div>
  )
}

function H1({match}) {
  const urlKey = match.params.id || "";
  const urlLink = links.filter(link => link.key === urlKey)[0];
  return (
    <div>
  <DocumentTitle title={urlLink.name} />
  <h1>{urlLink.name}</h1>
  </div>);
}


function Nav(props) {   
    return (
      <nav>
        <ul>

        <li key="home"><NavLink activeClassName="highlighted" exact to="/">Home</NavLink></li>
        <li key="pics"><NavLink activeClassName="highlighted" to="/pics">Pics</NavLink></li>
        <li key="blogs"><NavLink activeClassName="highlighted" to="/blog">Blog</NavLink></li>
        </ul>
      </nav>
    );
}
