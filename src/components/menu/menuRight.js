import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class MenuRight extends React.Component {
  render(){
    return(
      <div className="nav-right">
        <ul>
          <li><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
          <li><Link to="/skills" activeClassName="active-link">Skills</Link></li>
        </ul>
      </div>
    );
  }
}
