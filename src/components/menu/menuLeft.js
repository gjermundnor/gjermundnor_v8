import React from 'react';
import { Link } from 'react-router';

export default class MenuLeft extends React.Component {
  render(){
    return(
      <div className="nav-left">
        <Link to="/" className="logo">Gjermund Norderhaug</Link>
      </div>
    );
  }
}
