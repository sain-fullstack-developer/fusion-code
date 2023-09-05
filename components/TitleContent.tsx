import React from "react";
import { motion } from "framer-motion";

type Props = {
	main?: Boolean;
	headingClass: string;
	textClass: string;
	title: string;
	text: string;
	underline?: Boolean;
	dark?: Boolean;
	initial?: {};
	whileInView?: {};
	transition?: {};
};

const TitleContent = (props: Props) => {
	const {
		main,
		headingClass,
		textClass,
		underline,
		title,
		text,
		dark,
		initial,
		whileInView,
		transition,
	} = props;
	return (
		<motion.div
			initial={initial}
			whileInView={whileInView}
			transition={transition}
			className="p-2">
			{main && (
				<h1
					className={`${headingClass} pb-2 sm:pb-10 font-medium capitalize ${
						dark ? "text-white" : "text-[rgb(22,24,28)]"
					} text-center`}>
					{title}
				</h1>
			)}
			{underline && (
				<hr className="h-[3px] bg-forth w-[100px] sm:w-[200px] m-auto mb-10" />
			)}
			{!main && (
				<h3
					className={`${headingClass} font-medium tracking-wider text-center mb-10`}>
					{title}
				</h3>
			)}

			<p className={`${textClass} max-w-2xl tracking-wider text-center m-auto`}>
				{text}
			</p>
		</motion.div>
	);
};

export default TitleContent;
