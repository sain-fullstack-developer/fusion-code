import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

type Props = {};

const Footer = (props: Props) => {
	const navList = [
		"Works",
		"Technologies",
		"Services",
		"Company",
		"Contacts",
		"Terms and Conditions",
		"Privacy Policy",
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="bg-primary">
			<div className="grid place-items-center lg:flex lg:justify-evenly gap-6 px-4 md:px-12 py-6">
				<div>
					<div className="self-center sm:self-auto text-3xl text-white font-roc font-bold">
						FC
					</div>
					<p className="text-white text-center sm:text-left">
						447 Broadway, 2nd Floor Suite #772,
						<br /> New York 10013, United States
						<br /> +1-347-535-0004
					</p>
				</div>
				<div className="text-center">
					<ul className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-evenly gap-4 text-white text-lg">
						{navList.map((nav, index) => (
							<li key={index}>{nav}</li>
						))}
					</ul>
				</div>
				<div className="m-auto sm:mr-auto">
					<Button
						type="button"
						className="border-[1px] border-white bg-none rounded-full px-4 py-2 text-white hover:bg-btnBg"
						noArrow={true}>
						Stay tuned for our updates
					</Button>
				</div>
			</div>
			<div className="pb-6">
				<p className="text-sm text-white/30 text-center">
					© Copyright 2023 – Mobile App Design and Development Company. All
					Rights Reserved
				</p>
			</div>
		</motion.div>
	);
};

export default Footer;
