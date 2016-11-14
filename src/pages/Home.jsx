import React from 'react';
import {Link} from 'react-router';

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <div>home</div>
        <Link to="test">test</Link>
      </div>
    )
  }
}
