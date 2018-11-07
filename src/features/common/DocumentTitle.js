import React, { Component, useEffect, useState } from 'react';

export default function DocumentTitle(props) {
    const defaultTitle = "Software Engineer";
        
    let title = `Kent Nguyen - ${props.title || defaultTitle}`;
    document.title = title;
 
    return (
      <div className="documentTitle">
      </div>
    );
  }