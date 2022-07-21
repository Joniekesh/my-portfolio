import "./sideBar.scss";
import { links } from "../../dummyData/links";
import LinkList from "../linkList/LinkList";
import { useState } from "react";

const SideBar = ({ openMenu, setOpenMenu }) => {
	const [selected, setSelected] = useState("#intro");

	return (
		<div className={"sideBar " + (openMenu && "active")}>
			<ul>
				{links.map((link) => (
					<LinkList
						name={link.name}
						link={link.id}
						setOpenMenu={setOpenMenu}
						active={selected === link.id}
						setSelected={setSelected}
						key={link.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default SideBar;
