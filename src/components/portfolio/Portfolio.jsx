import "./portfolio.scss";
import { portfolios } from "../../dummyData/portfolio";

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<div className="logoContainer">
				<h1 className="portfolioLogo">PORTFOLIO</h1>
				<span className="line"></span>
			</div>
			<div className="portfolioLists">
				{portfolios.map((portfolio) => (
					<div className="portfolioItem" key={portfolio.id}>
						<div className="portfolioLeft">
							<h2>{portfolio.name}</h2>
							<h1>{portfolio.url}</h1>
							<p>{portfolio.desc}</p>
						</div>
						<div className="portfolioRight">
							<img src={portfolio.img} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
