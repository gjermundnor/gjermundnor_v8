import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <Link to="/page">Skill page</Link>
      </div>
    );
  }
}
