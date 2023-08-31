import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
	const navList = [
		"Home",
		"Works",
		"TECHNOLOGIES",
		"SERVICES",
		"COMPANY",
		"CONTACTS",
	];

	return (
		<header className="grid gap-8 lg:gap-0 lg:flex lg:justify-between px-12 py-6 bg-primary fixed z-10 w-full">
			<div>
				<Image
					src="/geeks-logo-white.svg"
					height={280}
					width={280}
					alt="header-logo"
				/>
			</div>
			<nav>
				<ul className="text-white flex gap-8 uppercase">
					{navList.map((nav, list) => (
						<li key={list}>{nav}</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
