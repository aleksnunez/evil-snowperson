import React from "react";
import Sketch from "react-p5";


	let buttonsx = 350;
	let buttonsy = 340;

const Figure = () => {
	const setup = (p5, canvasParentRef) => {
		let canvas = p5.createCanvas(700, 700).parent(canvasParentRef);

		canvas.parent('sketch-holder');
	};

	const draw = (p5) => {
		p5.background(120);
		p5.noStroke()
        
		//snowman
		p5.fill(255)
		p5.ellipse(350, 500, 200, 200);
		p5.ellipse(350, 375, 150, 150);
		p5.ellipse(350, 265, 110, 100);
	
		//buttons
		p5.fill(0);
		p5.ellipse(buttonsx, buttonsy, 7);
		p5.ellipse(buttonsx, buttonsy + 30, 7);
		p5.ellipse(buttonsx, buttonsy + 60, 7);

		//eyes
		p5.triangle(320, 250, 320, 270, 340, 265)
        p5.triangle(380, 250, 380, 270, 358, 265)

	};


	return <Sketch setup={setup} draw={draw} />;
};

export default Figure;