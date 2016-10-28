import React from 'react';
import { Link } from 'react-router';

export default class Global extends React.Component {
  render(){
    return(
      <div>
        <h1>
          <Link to="/">Global</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
