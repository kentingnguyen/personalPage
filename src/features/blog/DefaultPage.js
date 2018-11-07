import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Nav } from '../common';
//import { BlogNav } from './';

import * as actions from './redux/actions';

export function DefaultPage(props) {
  
  const propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

    return (
      <div>
      <h1>
      Blog
       </h1>
       <button className="prevPage" onClick={props.actions.prevPage} disabled={props.blog.page < 1}>Previous Page </button>
      <button className="nextPage" onClick={props.actions.nextPage}>Next Page </button>
       <BlogNav prevClick={props.actions.prevPage} nextClick={props.actions.nextPage} page={props.blog.page}/> 
       <p>
         This is the Blogging section. You are on Page {props.blog.page} 
         </p>
      <details>
      Random Blog Post
      </details>
      <footer>
      {/*<BlogNav /> */}

      </footer>
      </div> 
    );
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);


function BlogNav(props) {

return <div />
/*
return (<div>
    <button className="prevPage" onClick={props.prevClick} disabled={props.blog.page < 1}>Previous Page </button>
      <button className="nextPage" onClick={props.nextClick}>Next Page </button>
      </div>
);
*/

}
