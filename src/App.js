import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import SideBar from "./components/sideBar/SideBar";
import "./app.scss";
import { useState } from "react";
import Featured from "./components/featured/Featured";
import Skills from "./components/skills/Skills";

const App = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="app">
			<TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<section className="sections">
				<Intro />
				<Featured />
				<Skills />
				<Portfolio />
				{/* <Works /> */}
				{/* <Testimonials /> */}
				<Contact />
			</section>
		</div>
	);
};

export default App;
