import Image from "next/image";
import React from "react";

type Props = {};

const ClientReviewCard = (props: Props) => {
	return (
		<div className="bg-[rgba(255,255,255,.4)] border-2 border-[rgba(255,255,255,.8)] p-8 md:p-16 rounded-xl">
			<Image
				src="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/6499a7c5f7fca5a74f464cd6_Stars.svg"
				width={120}
				height={10}
				alt="review-star"
			/>
			<p className="text-lg py-4">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
				deleniti laborum tempora quam aliquid magni alias itaque dolores. Quas
				error sit culpa! Rem illum autem rerum ut qui, ex fugit?
			</p>
			<p className="font-semibold text-lg">Frank Kirk</p>
			<p className="text-lg">Frank Kirk</p>
		</div>
	);
};

export default ClientReviewCard;
