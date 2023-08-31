import React from "react";

type Props = {
	text: string;
};

const ChipText = (props: Props) => {
	const { text } = props;
	return (
		<div className="bg-white/20 text-center py-2 rounded-full w-full">
			<p className="text-base whitespace-nowrap px-4">{text}</p>
		</div>
	);
};

export default ChipText;
