import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
	logo: string;
	title: string;
	text?: string;
	modern?: Boolean;
	underline?: Boolean;
};

const IconTitle = (props: Props) => {
	const { logo, title, modern, text, underline } = props;
	return (
		<div className="m-auto text-center">
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 80 }}>
				<Image
					className="mb-6 h-24 w-24 m-auto"
					src={logo}
					width={modern ? 90 : 60}
					height={modern ? 90 : 60}
					alt="icons"
				/>
			</motion.div>
			<h2
				className={`${
					text ? "text-white" : ""
				} text-2xl font-medium capitalize`}>
				{title}
			</h2>
			{underline && <hr className="h-[3px] bg-forth w-[200px] m-auto mb-10" />}
			{text && (
				<p className="text-lg text-center max-w-sm m-auto text-white/60 mt-6">
					{text}
				</p>
			)}
		</div>
	);
};

export default IconTitle;
