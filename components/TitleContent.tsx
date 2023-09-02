import React from "react";

type Props = {
	main?: Boolean;
	headingColor: string;
	headingFontSize: string;
	textFontSize: string;
	textColor: string;
	title: string;
	text: string;
	underline?: Boolean;
	dark?: Boolean;
};

const TitleContent = (props: Props) => {
	const {
		main,
		headingColor,
		headingFontSize,
		textFontSize,
		textColor,
		underline,
		title,
		text,
		dark,
	} = props;
	return (
		<div>
			{main && (
				<h1
					className={`text-heading1 font-medium capitalize ${
						dark ? "text-white" : "text-[rgb(22,24,28)]"
					} text-center`}>
					{title}
				</h1>
			)}
			{underline && <hr className="h-[3px] bg-forth w-[200px] m-auto mb-10" />}
			{!main && (
				<h3
					className={`${headingColor} ${headingFontSize} font-medium text-center mb-10`}>
					{title}
				</h3>
			)}

			<p
				className={`${textColor}  max-w-2xl font-medium text-center m-auto ${textFontSize}`}>
				{text}
			</p>
		</div>
	);
};

export default TitleContent;
