"use client";

import Image from "next/image";
import React from "react";
import ChipText from "./ChipText";
import Button from "./Button";
import { motion } from "framer-motion";

type Props = {
	image: string;
	title: string;
	text: string;
	caption: string;
	chip1: string;
	chip2: string;
	chip3: string;
	order?: Boolean;
};

const SectionBlock = (props: Props) => {
	const { image, title, text, caption, chip1, chip2, chip3, order } = props;

	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 p-20 text-white">
			{!order && (
				<div className="relative w-360 h-360 lg:w-560 lg:h-560">
					<Image
						className=""
						src={image}
						width={580}
						height={580}
						alt="fintech"
					/>
				</div>
			)}
			<motion.div
				initial={{ y: 400, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 20 }}>
				<h2 className="text-4xl sm:text-6xl capitalize mb-4 text-white">
					{title}
				</h2>
				<h3 className="text-2xl sm:text-3xl font-normal mb-10 text-white/40">
					{caption}
				</h3>
				<div className="grid sm:flex gap-4 mb-6">
					<ChipText text={chip1} />
					<ChipText text={chip2} />
					<ChipText text={chip3} />
				</div>
				<p className="text-lg mb-10">{text}</p>
				<Button
					type="button"
					className="border-pixel bg-none rounded-full py-4 px-8">
					See full case Study
				</Button>
			</motion.div>
			{order && (
				<div className="relative w-360 h-360 lg:w-560 lg:h-560">
					<Image
						className=""
						src={image}
						width={580}
						height={580}
						alt="fintech"
					/>
				</div>
			)}
		</div>
	);
};

export default SectionBlock;
