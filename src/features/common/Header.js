import React from 'react';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
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
          <h1>Kent Nguyen</h1>
          <HeaderTitle />
          <Nav currentPage={props.currentPage}/>
          </header>
    );
  }

function HeaderTitle() {
  return (
          <div className="headerName">
            <Route exact path="/:id" component={UrlTitle} />
            <Route exact path="/" render={() => <h2>Home</h2>}/>
          </div>
  )
}

function UrlTitle({match}) {
  const urlKey = match.params.id || "";
  const urlLink = links.filter(link => link.key === urlKey)[0];
  return (
    <div>
  <DocumentTitle title={urlLink.name} />
  <h2>{urlLink.name}</h2>
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
