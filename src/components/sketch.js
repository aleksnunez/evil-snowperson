import React from "react";
import Sketch from "react-p5";

	let x = 50;
	let y = 50;
const Figure = () => {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(220);

        p5.fill("orange")
		p5.ellipse(x, y, 50);


       // showMouseCoordinates();

	};

    // const showMouseCoordinates = (p5, event) => {
  
    //     p5.fill(0)
    //     p5.textSize(15)
    //     p5.text("(" + p5.mouseX + ")" + "(" + p5.mouseY + ")", p5.mouseX, p5.mouseY)

    //    }

	return <Sketch setup={setup} draw={draw} />;
};

export default Figure;