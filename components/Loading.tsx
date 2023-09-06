"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const InitialPage = (props: Props) => {
	return (
		<motion.div
			id="loading"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 10, delay: 0.2 }}
			className="bg-white grid place-items-center text-black h-screen relative">
			<div className="relative">
				<h1 className="text-3xl sm:text-6xl font-medium tracking-widest font-roc">
					Fusion Code
				</h1>
			</div>
		</motion.div>
	);
};

export default InitialPage;
