import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["UI/UX Designer", "Backend Developer", "Content Creator"],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="introLeft">
				<div className="imageContainer">
					<img src="/assets/profile.jpeg" alt="" />
				</div>
			</div>
			<div className="introRight">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>Okoro John</h1>
					<h3>
						<p>Freelance</p> <span ref={textRef}></span>
					</h3>
					<a href="#portfolio">
						<i className="fa-solid fa-arrow-down"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
