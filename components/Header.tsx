import Image from "next/image";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
	const [headerBg, setHeaderBg] = useState("bg-primary");

	const navList = [
		"Home",
		"Works",
		"TECHNOLOGIES",
		"SERVICES",
		"COMPANY",
		"CONTACTS",
	];

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setHeaderBg(latest > 900 ? "bg-black/10 backdrop-blur" : "");
	});

	return (
		<header
			className={`${headerBg} grid gap-8 lg:gap-0 lg:flex lg:justify-between px-12 py-6 fixed z-10 w-full`}>
			<div>
				<Image
					src="/geeks-logo-white.svg"
					height={280}
					width={280}
					alt="header-logo"
				/>
			</div>
			<nav>
				<ul className="text-white hidden sm:grid sm:grid-cols-3 md:grid-cols-4 gap-4 lg:flex lg:gap-8 uppercase">
					{navList.map((nav, index) => (
						<li
							className={`${
								index === 0
									? "underline decoration-[rgb(255,83,0)] underline-offset-4"
									: ""
							} cursor-pointer hover:underline hover:decoration-[rgb(255,83,0)] hover:underline-offset-4`}
							key={index}>
							{nav}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
