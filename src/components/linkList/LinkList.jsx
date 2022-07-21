import "./linkList.scss";

const LinkList = ({ link, name, setOpenMenu, setSelected, active }) => {
	const handleClick = () => {
		setOpenMenu(false);
		setSelected(link);
	};

	return (
		<li
			className={active ? "linkList active" : "linkList"}
			onClick={() => handleClick()}
		>
			<a href={link}>{name}</a>
		</li>
	);
};

export default LinkList;
