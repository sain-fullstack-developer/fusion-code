import Image from "next/image";
import React from "react";

type Props = {
	name: string;
	text: string;
	designation: string;
};

const ClientReviewCard = (props: Props) => {
	const { name, text, designation } = props;
	return (
		<div className="bg-[rgba(255,255,255,.4)] border-2 border-[rgba(255,255,255,.8)] p-8 md:p-16 rounded-xl">
			<Image
				src="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/6499a7c5f7fca5a74f464cd6_Stars.svg"
				width={120}
				height={10}
				alt="review-star"
			/>
			<p className="text-lg py-4">{text}</p>
			<p className="font-semibold text-lg">{name}</p>
			<p className="text-lg">{designation}</p>
		</div>
	);
};

export default ClientReviewCard;
