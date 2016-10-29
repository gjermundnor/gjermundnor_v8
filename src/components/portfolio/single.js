import React from 'react';

export default class Single extends React.Component {
  render(){
    return(
      <div className="col-sm-2 col-xs-4 portfolio-single">
        <img className="img-responsive portfolio-image" src={"src/components/portfolio/images/" + this.props.portfolio.imageSrc} />
      </div>
    );
  }
}
