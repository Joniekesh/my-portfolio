import "./skills.scss";
import { useState } from "react";
import { data } from "../../dummyData/data";

const Skills = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleClick = (direction) => {
		direction === "left"
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
			: setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
	};
	return (
		<div className="skills" id="skills">
			<div className="container">
				<h1>KEY SKILLS/TECHNOLOGIES USED</h1>
				<div className="line"></div>
			</div>
			<i
				className="fa-solid fa-arrow-left arrow left"
				onClick={() => handleClick("left")}
			></i>
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{data.map((d) => (
					<div className="slide" key={d.id}>
						<img src={d.img} alt="" />
					</div>
				))}
			</div>
			<i
				className="fa-solid fa-arrow-right arrow right"
				onClick={() => handleClick()}
			></i>
		</div>
	);
};

export default Skills;
