import React from "react";

type Props = {
	title: string;
	caption: string;
	text: string;
};

const ServicesCard = (props: Props) => {
	const { title, caption, text } = props;
	return (
		<div className="bg-[rgba(255,255,255,.5)] border border-[rgba(255,255,255,.8)] rounded-2xl p-8 mb-8">
			<h2 className="text-2xl pb-4 font-medium text-content font-roc">
				{title}
			</h2>
			<h3 className="text-lg pb-4 font-medium text-content">{caption}</h3>
			<p className="text-base text-content pb-4">{text}</p>
			<div className="p-1 rounded-lg bg-gray-200 w-fit px-2 text-sm">
				1-2 weeks
			</div>
		</div>
	);
};

export default ServicesCard;
