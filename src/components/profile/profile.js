import React from 'react';
import GSAP from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

require('./profile.scss');

export default class Profile extends React.Component {
	componentDidMount(){
    	this.onScrollParalaxImage();
	}
	onScrollParalaxImage(){
		var imageFront = document.getElementById('dynamicProfile');
		var controller = new ScrollMagic.Controller();

		var slideParallaxScene = new ScrollMagic.Scene({
	        triggerElement: '#profile',
	        offset: 300,
	        triggerHook: 1,
	        duration: "100%"
	    })
	    .setTween(TweenMax.from(imageFront, 1, {y: '20%', ease:Power0.easeNone}))
	    .addTo(controller);

	} // END on scroll paralax image
	render(){
		return(
			<div id="profile">
				<div className="container">
					<div className="profile-img-wrapper">
						<img src={"src/components/profile/images/scenery.png"} className="img-res dynamic-img" id="dynamicBg" />
						<img src={"src/components/profile/images/gjermund-profil.png"} className="img-res dynamic-img" id="dynamicProfile" />
					</div>
				</div>
			</div>
		);
	}
}