"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


type Props = {
	scrollContacts: () => void;
	scrollBg?: Boolean;
	menuOn?: Boolean;
	targetElementRef?: any;
};

const Header = (props: Props) => {
	const { scrollContacts, scrollBg } = props;
	const [lightMode, setLightMode] = useState(false);
	const [navScrollAdd, setNavScrollAdd] = useState(false);

	const [menuOn, setMenuOn] = useState(false);

	const path = usePathname();
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest >= 50 ? setNavScrollAdd(true) : setNavScrollAdd(false);
	});

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
	];

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};



	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			id="header"
			className={`${scrollBg ? "bg-black" : "bg-transparent"
				} realtive min-h-[4.5rem] flex gap-4 lg:gap-0 justify-between items-center lg:px-12 px-6 py-6 relative z-50`}>
			<Link href="/" className="w-40 items-center">
				<Image
					src="/fusion/logo.png"
					width={130}
					height={130}
					className=""
					alt="logo-image"
				/>
			</Link>

			<motion.nav
				id="navList"
				className={`${menuOn
					? "grid sm:place-items-center absolute my-auto left-4 xs:left-5 sm:left-[50%] bg-black w-[90%] sm:w-fit p-6 rounded-lg ring-1 ring-gray-100 top-[16rem] overflow-hidden"
					: "hidden"
					}  md:top-[3.5rem] md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 transition-all ease-linear md:block fixed flex justify-center backdrop-blur-lg z-50 p-3 px-12 bg-[rgba(5,5,46,.25)] rounded-lg border-[1px] border-[rgba(255,255,255,.16)]`}>
				<motion.ul
					className={`${lightMode
						? "text-black"
						: menuOn
							? "text-center grid"
							: "text-white"
						}  gap-4 sm:flex sm:gap-4 lg:gap-8 uppercase items-center transition-all`}>
					{/* {navList.map((list, index) => (
						<Link key={index} href={list.path}>
							<motion.li
								initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.6 }}
								className={`${list.path === path &&
									`underline underline-offset-4 decoration-[rgb(22,2,152)] ${list.path === path &&
									list.path !== "/" &&
									"bg-gradient-to-r from-[#6000FF] via-pink-500 to-fuchsia-500 text-transparent bg-clip-text"
									}`
									} ${menuOn && "text-white/60 pb-4 text-lg text-center"
									} relative  text-lg sm:text-sm md:text-base tracking-wider hover:underline-offset-4 hover:underline hover:decoration-[rgb(22,2,152)] transition-all`}>
								{list.nav}
							</motion.li>
						</Link>

					))} */}

					{path === "/" ? <a onClick={scrollToTop} className="cursor-pointer">
						<motion.li
							initial={{ x: 200, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className={`${menuOn && "text-white/60 pb-4 text-lg text-center overflow-hidden"
								} relative  text-lg sm:text-sm md:text-base tracking-wider hover:underline-offset-4 hover:underline hover:decoration-[rgb(22,2,152)] transition-all`}>
							Home
						</motion.li>
					</a> :
						<Link href="/">
							<motion.li
								initial={{ x: 200, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.1 }}
								className={`${menuOn && "text-white/60 pb-4 text-lg text-center overflow-hidden"
									} relative  text-lg sm:text-sm md:text-base tracking-wider hover:underline-offset-4 hover:underline hover:decoration-[rgb(22,2,152)] transition-all`}>
								Home
							</motion.li>
						</Link>
					}
					<Link href="/works">
						<motion.li
							initial={{ x: -200, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className={`${path === "/works" &&
								`underline underline-offset-4 decoration-[rgb(22,2,152)] ${path === "/works" &&
								"bg-gradient-to-r from-[#6000FF] via-pink-500 to-fuchsia-500 text-transparent bg-clip-text"
								}`
								} ${menuOn && "text-white/60 pb-4 text-lg text-center overflow-hidden"
								} relative  text-lg sm:text-sm md:text-base tracking-wider hover:underline-offset-4 hover:underline hover:decoration-[rgb(22,2,152)] transition-all`}>
							Works
						</motion.li>
					</Link>
					<motion.li	
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className={`${navScrollAdd ? "block" : "hidden"}`}>
						<div className="relative md:inline-flex group hidden">
							<div className="absolute transitiona-all duration-1000 opacity-90 -inset-2 bg-btnBg rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
							<div
								onClick={() => scrollContacts()}
								className="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 text-base text-white transition-all duration-200 bg-btnBg rounded-lg ring-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
								Hire us
							</div>
						</div>
					</motion.li>

					<motion.li
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="md:hidden">
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
				<div className="relative hidden md:inline-flex group max-h-12 my-auto">
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
					className="md:hidden z-50">
					<div>
						<button title="button" className="relative group">
							<div className="relative flex overflow-hidden items-center justify-center md:w-[50px] h-[40px] transform transition-all duration-200 shadow-md">
								<div className="flex flex-col justify-between w-[24px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
									<div
										className={`bg-white h-[2px] rounded-sm w-7 transform transition-all duration-300 origin-left ${menuOn && "group-focus:translate-x-10"
											} `}></div>
									<div
										className={`bg-white h-[2px] rounded-sm w-4 m-auto transform transition-all duration-300 ${menuOn && "group-focus:translate-x-10"
											} delay-75`}></div>
									<div
										className={`bg-white h-[2px] rounded-sm w-7 transform transition-all duration-300 origin-left ${menuOn && "group-focus:translate-x-10"
											} delay-150`}></div>

									<div
										className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${menuOn && "group-focus:translate-x-0 group-focus:w-12"
											} flex w-0`}>
										<div
											className={`absolute bg-white h-[2px] rounded-sm w-5 transform transition-all duration-500 rotate-0 delay-300 ${menuOn && "group-focus:rotate-45"
												}`}></div>
										<div
											className={`absolute bg-white h-[2px] rounded-sm w-5 transform transition-all duration-500 -rotate-0 delay-300 ${menuOn && "group-focus:-rotate-45"
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
