import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
  
  const links = [
    { 
      key: "0",
      to: "",
      name: "Home"
      },
    { 
      key: "1",
      to: "pics",
      name: "Pics"
      },
    {
      key: "2",
      to: "blog",
      name: "Blog"
      }
  ];

  const propTypes = {

  };

    return (
      <nav>
        <ul>
        {links.map((link) => {
          return <li key={link.name} className={props.currentPage === link.name ? "highlighted" : ""}><Link to={link.to}>{link.name}</Link></li>
        })}
        </ul>
      </nav>
      
    );
}
