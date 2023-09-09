import React from "react";
import { motion } from "framer-motion";
import TitleIcon from "@/elements/TitleIcon";

type Props = {
	main?: Boolean;
	headingClass?: string;
	textClass?: string;
	title: string;
	text?: string;
	underline?: Boolean;
	dark?: Boolean;
	caption?: string;
	initial?: {};
	whileInView?: {};
	transition?: {};
	GradientTitle?: Boolean;
	iconWidth?: number;
	iconHeight?: number;
	iconColor?: string;
	containerClass?: string;
	iconClass?: string;
	noIcon?: Boolean;
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
		GradientTitle,
		caption,
		iconWidth,
		iconHeight,
		iconColor,
		containerClass,
		iconClass,
		noIcon,
	} = props;
	return (
		<>
			{" "}
			{!GradientTitle && (
				<motion.div
					initial={initial}
					whileInView={whileInView}
					transition={transition}
					className="p-2">
					{main && (
						<h1
							className={`${headingClass} pb-2 sm:pb-10 font-medium capitalize font-roc ${
								dark ? "text-white" : "text-[rgb(22,24,28)]"
							} text-center`}>
							{title}
						</h1>
					)}
					{underline && (
						<hr className="h-[3px] bg-btnBg w-[100px] sm:w-[200px] m-auto mb-10" />
					)}
					{!main && (
						<h3
							className={`${headingClass} font-medium tracking-wider text-center mb-10 font-roc`}>
							{title}
						</h3>
					)}

					<p
						className={`${textClass} max-w-2xl tracking-wider text-center m-auto`}>
						{text}
					</p>
				</motion.div>
			)}
			{GradientTitle && (
				<div className={`${containerClass} w-full`}>
					{!noIcon && (
						<div className={`${iconClass} flex pb-6`}>
							<TitleIcon
								width={iconWidth}
								height={iconHeight}
								color={iconColor}
							/>
							<p className="ml-2 text-sm font-medium caption-text">{caption}</p>
						</div>
					)}
					<h2
						className={`${headingClass} ${
							noIcon && "text-xl sm:text-2xl md:text-2xl lg:text-2xl"
						} font-roc text-4xl sm:text-5xl md:text-6xl font-medium text-content pb-4 md:pb-8`}>
						{title}
					</h2>
					<p className={`${textClass} text-base sm:text-lg text-content`}>
						{text}
					</p>
				</div>
			)}
		</>
	);
};

export default TitleContent;
