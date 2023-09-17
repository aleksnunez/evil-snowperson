import React from "react";
import Sketch from "react-p5";
import './Game.scss'

	let buttonsx = 350;
	let buttonsy = 240;

	let bodyx = 350;

const Game = () => {
	const setup = (p5, canvasParentRef) => {
		let canvas = p5.createCanvas(700, 600).parent(canvasParentRef);

		canvas.parent('sketch-holder');
	};

	const draw = (p5) => {
		p5.background(2, 7, 168);
		p5.noStroke()
        
		//snowman
		p5.fill(255)
		p5.ellipse(bodyx, 400, 200, 200);
		p5.ellipse(bodyx, 275, 150, 150);
		p5.ellipse(bodyx, 165, 110, 100);
	
		//buttons
		p5.fill(0);
		p5.ellipse(buttonsx, buttonsy, 7);
		p5.ellipse(buttonsx, buttonsy + 30, 7);
		p5.ellipse(buttonsx, buttonsy + 60, 7);

		//eyes
		p5.triangle(320, 150, 320, 170, 340, 165)
    	p5.triangle(380, 150, 380, 170, 358, 165)

	};


	// Inside your GameSketch component or equivalent
return (
	  <Sketch setup={setup} draw={draw} />
  );
  
};

export default Game;