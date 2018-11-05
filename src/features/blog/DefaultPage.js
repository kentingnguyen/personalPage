import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, Nav } from '../common';

import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
      <Header>Blog</Header>
      <header className="blog-default-page">
      <h1>
      Blog
       </h1>
       <p>
         This is the Blogging section. You are on Page {this.props.blog.page}
         </p>
      </header>
      <details>
      Random Blog Post
      </details>
      <footer>
      <button className="prevPage" onClick={this.props.actions.prevPage} disabled={this.props.blog.page === 1}>Previous Page </button>
      <button className="nextPage" onClick={this.props.actions.nextPage}>Next Page </button>
      </footer>
      </div>
    );
  }
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
