import "./topBar.scss";

const TopBar = ({ openMenu, setOpenMenu }) => {
	return (
		<div className={"topBar " + (openMenu && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo" onClick={() => setOpenMenu(false)}>
						jonieDev.
					</a>
					<div className="itemsContainer">
						<div className="item">
							<i className="fa-solid fa-user"></i>
							<span>+234 8050 667 156</span>
						</div>
						<div className="item">
							<i className="fa-solid fa-envelope"></i>
							<span>joniedev101@gmail.com</span>
						</div>
					</div>
				</div>
				<div className="right" onClick={() => setOpenMenu(!openMenu)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
