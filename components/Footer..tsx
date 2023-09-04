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
		<motion.footer
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="grid md:flex md:justify-evenly gap-6 bg-primary px-12 py-6">
			<section>
				<Image
					src="/geeks-logo-white.svg"
					height={280}
					width={280}
					alt="logo"
				/>
				<p className="text-white">
					447 Broadway, 2nd Floor Suite #772,
					<br /> New York 10013, United States
					<br /> +1-347-535-0004
				</p>
			</section>
			<section className="">
				<ul className="grid md:flex md:justify-evenly gap-4 text-white text-lg">
					{navList.map((nav, index) => (
						<li key={index}>{nav}</li>
					))}
				</ul>
			</section>
			<section className="mr-auto">
				<Button
					type="button"
					className="border-pixel border-white bg-none rounded-full px-4 py-2 text-white hover:bg-white hover:text-black"
					noArrow={true}>
					Stay tuned for our updates
				</Button>
			</section>
		</motion.footer>
	);
};

export default Footer;
