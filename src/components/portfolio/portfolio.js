import React from 'react';
import GSAP from 'gsap';
import Loop from './loop';

require('./portfolio.scss');

const portfolios = [
  {
    'title': 'Salsakompaniet',
    'imageSrc': 'kahnor.jpg',
  },
  {
    'title': '22. juli',
    'imageSrc': 'buskerud.jpg',
  },
  {
    'title': 'Oppegård Trafikk',
    'imageSrc': 'selmer.jpg',
  },
  {
    'title': 'Timotei Designs',
    'imageSrc': 'buskerud.jpg',
  },
  {
    'title': 'Peking to Paris 2016',
    'imageSrc': 'kahnor.jpg',
  },
  {
    'title': 'Buskerud FHS',
    'imageSrc': 'selmer.jpg',
  }
];

export default class Portfolio extends React.Component {
  componentDidMount(){
    this.animateSingles();
  }
  animateSingles(){
    const portfolioImage = document.getElementsByClassName('portfolio-image');
    TweenMax.set(portfolioImage, {scale: 0.6});
    TweenMax.staggerTo(portfolioImage, 0.8, {opacity: 1, scale: 1, ease: Back.easeOut.config(2.5), delay: 1 }, 0.2);

  }
  render(){
    return(
      <section className="portfolio">
        <center>
          <h1>Portfolio</h1>
          <p>Six selected topics from different envirements I have worked on the past three years.</p>
          </center>
        <Loop portfolio={portfolios} />
      </section>
    );
  }
}
