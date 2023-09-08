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
			<h2 className="text-2xl pb-4 font-medium text-[#0c0228] font-roc">
				{title}
			</h2>
			<h3 className="text-lg pb-4 font-medium text-[#0c0228]">{caption}</h3>
			<p className="text-base text-[#0c0228]">{text}</p>
		</div>
	);
};

export default ServicesCard;
