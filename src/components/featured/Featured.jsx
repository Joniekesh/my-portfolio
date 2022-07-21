import "./featured.scss";

const Featured = () => {
	return (
		<div className="featured" id="featured">
			<div className="featuredContainer">
				<h1 className="featuredLogo">FEATURED</h1>
				<div className="line"></div>
			</div>
			<span className="featuredCircle"></span>
			<div className="container">
				<div className="featuredLeft">
					<div className="featuredItems">
						<h1 className="title">Featured Project</h1>
						<h3 className="projectTitle">mernsocialapp2.herokuapp.com</h3>
						<p className="featuredText">
							The motive of every business is to make profit or to have a
							breakeven at worst case scenario. This is a MERN eCommerce app
							developed with the intention of helping business growth. It has a
							streamlined user interface and interaction. In addition to the
							above mentioned features,it has a payPall payment checkout
							implementation for easier transaction.
						</p>
					</div>
				</div>
				<div className="featuredRight">
					<img src="/assets/ecommercepage.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Featured;
