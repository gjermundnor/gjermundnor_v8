import React from 'react';
import GSAP from 'gsap';
import ScrollMagic from 'scrollmagic';
import Loop from './loop';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
require("./portfolio.scss");

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
    TweenMax.set(portfolioImage, {opacity: 0, scale: 0.6});
    var staggerPortfolios = TweenMax.staggerTo(portfolioImage, 0.8, {opacity: 1, scale: 1, ease: Back.easeOut.config(2.5) }, 0.2);

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
  		triggerElement: "#portfolio",	// the scene should last for a scroll distance of 100px
  	}).setTween(staggerPortfolios).addTo(controller);

  }
  render(){
    return(
      <section className="portfolio">
        <h1 id="portfolio">Portfolio</h1>
        <p>Six selected topics from different envirements I have worked on the past three years.</p>
        <Loop portfolio={portfolios} />
      </section>
    );
  }
}
