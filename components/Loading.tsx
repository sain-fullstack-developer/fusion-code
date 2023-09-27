"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const InitialPage = (props: Props) => {
	return (
		<motion.div
			id="loading"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 10, delay: 0.2 }}
			className="bg-black grid place-items-center text-black/80 h-screen relative">
			<div className="relative lg:hidden flex items-center flex-col">
				<Image
					src="/fusion/fusion-logo.png"
					alt="logo"
					width={400}
					height={400}
					layout="fixed"
				/>
			</div>
			<div className="relative hidden lg:flex items-center flex-col">
				<Image
					src="/fusion/logo.png"
					alt="logo"
					width={400}
					height={400}
					layout="fixed"
				/>
			</div>
		</motion.div>
	);
};

export default InitialPage;
