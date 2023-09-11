import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
	scrollContacts: () => void;
	scrollBg?: Boolean;
};

const Header = (props: Props) => {
	const { scrollContacts, scrollBg } = props;
	const [scrollNavs, setScrollNavs] = useState<Boolean>(false);
	const [lightMode, setLightMode] = useState(false);
	const [menuOn, setMenuOn] = useState(false);

	const path = usePathname();

	useEffect(() => {
		if (path === "/works" || path === "/services") {
			setLightMode(false);
		} else {
			setLightMode(false);
		}
	}, [lightMode, path]);

	const navList = [
		{ nav: "Home", path: "/" },
		{ nav: "Works", path: "/works" },
		{ nav: "CONTACTS", path: "/contacts" },
	];

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			id="header"
			className={`${
				scrollBg ? "bg-black" : "bg-transparent"
			} realtive min-h-[4.5rem] w-screen flex gap-4 lg:gap-0 lg:flex justify-between px-4 py-2 lg:py-3 relative z-50`}>
			<div className="text-3xl self-center text-white font-roc font-bold flex">
				<Image
					src="/logo.png"
					width={80}
					height={80}
					className="-mt-2"
					alt="logo-image"
				/>
				Fusion <span className="font-normal">Code</span>
			</div>
			<motion.nav
				id="navList"
				className={`${
					menuOn
						? "grid sm:place-items-center absolute left-5 sm:left-[14%] bg-black w-[90%] sm:w-fit p-6 rounded-lg ring-1 ring-gray-100 top-20"
						: "hidden"
				} lg:block fixed sm:left-[40%] flex justify-center backdrop-blur-lg z-50 p-3 bg-[rgba(5,5,46,.25)] rounded-lg border-[1px] border-[rgba(255,255,255,.16)]`}>
				<motion.ul
					className={`${
						lightMode
							? "text-black"
							: menuOn
							? "text-center grid"
							: "text-white"
					}  gap-4 sm:flex sm:gap-4 lg:gap-8 uppercase items-center transition-all`}>
					{navList.map((list, index) => (
						<Link key={index} href={list.path}>
							<motion.li
								initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.6 }}
								className={`${
									list.path === path &&
									"underline underline-offset-4 decoration-[rgb(22,2,152)]"
								} ${
									menuOn && "text-white/60 pb-4 text-lg text-center"
								} relative text-lg sm:text-sm md:text-base tracking-wider hover:underline-offset-4 hover:underline hover:decoration-[rgb(22,2,152)]`}>
								{list.nav}
							</motion.li>
						</Link>
					))}
					<motion.li
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className={`${window.scrollY >= 50 ? "block" : "hidden"}`}>
						<div className="relative inline-flex group">
							<div className="absolute transitiona-all duration-1000 opacity-90 -inset-2 bg-btnBg rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
							<div
								onClick={() => scrollContacts()}
								className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 text-base text-white transition-all duration-200 bg-btnBg rounded-lg ring-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
								Hire us
							</div>
						</div>
					</motion.li>
				</motion.ul>
			</motion.nav>

			<div className="flex gap-4">
				<div className="relative hidden sm:inline-flex group lg:mr-12">
					<div className="absolute transitiona-all duration-1000 opacity-90 -inset-2 bg-btnBg rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
					<div
						onClick={() => scrollContacts()}
						className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 text-base text-white transition-all duration-200 bg-btnBg rounded-lg ring-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
						Hire us
					</div>
				</div>
				<div
					onClick={() => {
						setMenuOn(!menuOn);
					}}
					className="lg:hidden z-50">
					<div>
						<button title="button" className="relative group">
							<div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[40px] transform transition-all duration-200 shadow-md">
								<div className="flex flex-col justify-between w-[24px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
									<div
										className={`bg-white h-[2px] rounded-sm w-7 transform transition-all duration-300 origin-left ${
											menuOn && "group-focus:translate-x-10"
										} `}></div>
									<div
										className={`bg-white h-[2px] rounded-sm w-4 m-auto transform transition-all duration-300 ${
											menuOn && "group-focus:translate-x-10"
										} delay-75`}></div>
									<div
										className={`bg-white h-[2px] rounded-sm w-7 transform transition-all duration-300 origin-left ${
											menuOn && "group-focus:translate-x-10"
										} delay-150`}></div>

									<div
										className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
											menuOn && "group-focus:translate-x-0 group-focus:w-12"
										} flex w-0`}>
										<div
											className={`absolute bg-white h-[2px] rounded-sm w-5 transform transition-all duration-500 rotate-0 delay-300 ${
												menuOn && "group-focus:rotate-45"
											}`}></div>
										<div
											className={`absolute bg-white h-[2px] rounded-sm w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
												menuOn && "group-focus:-rotate-45"
											}`}></div>
									</div>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
