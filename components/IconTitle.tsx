import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
	logo: string;
	title: string;
	modern?: Boolean;
};

const IconTitle = (props: Props) => {
	const { logo, title, modern } = props;
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
			<h2 className="text-2xl font-medium capitalize">{title}</h2>
		</div>
	);
};

export default IconTitle;
