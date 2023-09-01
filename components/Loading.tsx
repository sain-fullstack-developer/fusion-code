"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

const InitialPage = (props: Props) => {
	return (
		<motion.div
			id="loading"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 10, delay: 0.2 }}
			className="bg-white grid place-items-center text-black/60 h-screen relative">
			<div className="relative">
				<h1 className="text-4xl sm:text-5xl font-medium tracking-widest">
					Geeks Invention
				</h1>
				<div className="h-2 w-2 rounded-full bg-[rgb(255,83,0)] absolute left-[140px] sm:left-[188px] animate-bounce top-0"></div>
			</div>
		</motion.div>
	);
};

export default InitialPage;
