import React from "react";

type Props = {
	rank: string;
	text: string;
	caption?: string;
};

const RankText = (props: Props) => {
	const { rank, text, caption } = props;
	return (
		<div className="grid grid-rows-2">
			<p className="text-6xl text-[rgba(255,83,0)] relative mb-4">
				{rank}
				{caption && <span className="absolute ml-2 text-xl">{caption}</span>}
			</p>
			<p className="text-white/60 text-xl font-light">{text}</p>
		</div>
	);
};

export default RankText;
