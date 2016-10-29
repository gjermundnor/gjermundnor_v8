import React from 'react';
import Single from './single';

export default class Loop extends React.Component {
  loopPortfolios(){
    const eachPortfolio = this.props.portfolio.map(function(data, index){
      return <Single portfolio={data} key={index} />
    });

    return eachPortfolio;
  }
  render(){
    return(
      <div>
        { this.loopPortfolios() }
      </div>
    );
  }
}
