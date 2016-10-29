import React from 'react';
import { Link } from 'react-router';
import Menu from './menu/menu';

export default class Global extends React.Component {
  render(){
    return(
      <div id="mainContent">
        <Menu />
        { React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
