import React from 'react';
require('./header.scss');

export default class Header extends React.Component {
  componentDidMount(){
    this.animateArticleBox();
  }
  animateArticleBox(){
    const articleBox = document.getElementById('articleBox');
    const boxOverlay1 = document.getElementById('boxOverlay1');
    const backgroundFill = document.getElementById('backgroundFill');
    TweenMax.to(articleBox, 1, {top: '45%', opacity: 1, ease: Power4.easeIn, onComplete: animateOverlay1});
    function animateOverlay1(){
      TweenMax.to(boxOverlay1, 1, {height: '0%', ease: Expo.easeOut, onComplete: animateBg});
    }
    function animateBg(){
      TweenMax.to(backgroundFill, 0.4, {height: '100%', ease: Power1.easeIn});
    }
  }
  render(){
    return(
      <header id="headerArea">
        <div id="backgroundFill"></div>
        <article id="articleBox">
          <h1>Hello to you.</h1>
          <h1>I am a problemsolving webdeveloper, with the skills to build what 2017 expects.</h1>
          <div id="boxOverlay1"></div>
        </article>
      </header>
    );
  }
}
