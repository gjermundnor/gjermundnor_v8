import React from 'react';
import { Link } from 'react-router';
import Portfolio from './portfolio/Portfolio';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <Portfolio />
      </div>
    );
  }
}
