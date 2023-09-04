import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
	const [headerBg, setHeaderBg] = useState("");
	const [lightMode, setLightMode] = useState(false);
	const [menuOn, setMenuOn] = useState(false);

	const path = usePathname();

	useEffect(() => {
		if (path === "/works") {
			setLightMode(true);
		} else {
			setLightMode(false);
		}
	}, [lightMode]);

	const navList = [
		{ nav: "Home", path: "/" },
		{ nav: "Works", path: "/works" },
		{ nav: "TECHNOLOGIES", path: "/technologies" },
		{ nav: "SERVICES", path: "/services" },
		{ nav: "COMPANY", path: "/company" },
		{ nav: "CONTACTS", path: "/contacts" },
	];

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setHeaderBg(latest > 900 ? "bg-black/10 backdrop-blur" : "");
	});

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			id="header"
			className={`${headerBg} grid gap-8 grid-cols-2 lg:gap-0 lg:flex lg:justify-between px-12 py-6 fixed top-0 z-20 w-full`}>
			<div>
				<Image
					src={lightMode ? "/geeks-logo.svg" : "/geeks-logo-white.svg"}
					height={280}
					width={280}
					alt="header-logo"
				/>
			</div>
			<div
				onClick={() => {
					setMenuOn(!menuOn);
				}}
				className="lg:hidden m-auto">
				<button title="menu-button" type="button" className="relative group">
					<div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
						<div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
							<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
							<div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
							<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
						</div>
					</div>
				</button>
			</div>
			<nav
				id="navList"
				className={`${menuOn ? "block" : "hidden"} lg:block z-10`}>
				<ul
					className={`${
						lightMode ? "text-black" : "text-white"
					}  gap-4 lg:flex lg:gap-8 uppercase`}>
					{navList.map((list, index) => (
						<Link key={index} href={list.path}>
							<motion.li
								layoutId="underline"
								className="relative hover:underline-offset-4 hover:underline hover:decoration-[rgb(255,83,0)]">
								{list.path === path && (
									<motion.span
										layoutId="underline"
										className="absolute left-0 top-full block h-[1px] w-full bg-[rgb(255,83,0)]"
									/>
								)}
								{list.nav}
							</motion.li>
						</Link>
					))}
				</ul>
			</nav>
		</motion.header>
	);
};

export default Header;
