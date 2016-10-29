import React from 'react';
import MenuLeft from './menuLeft';
import MenuRight from './menuRight';

require("./menuStyle.scss");

export default class Menu extends React.Component {
  render(){
    return(
      <div className="nav-wrapper">
        <nav className="container">
          <MenuLeft />
          <MenuRight />
        </nav>
      </div>
    );
  }
}
