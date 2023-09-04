import React from "react";
import ChipText from "./ChipText";
import Image from "next/image";

type Props = {
	orderRight: Boolean;
	image: string;
	title: string;
	caption: string;
	chip1: string;
	chip2: string;
	chip3: string;
	alt: string;
};

const ImageTextOverlay = (props: Props) => {
	const { orderRight, image, title, caption, chip1, chip2, chip3, alt } = props;
	return (
		<div className={`relative w-full h-[460px]`}>
			<Image
				src={image}
				layout="fill"
				objectFit="cover"
				className="absolute"
				alt={alt}
			/>
			<div className="absolute left-0 top-0 w-full h-full bg-black/40 sm:bg-black/20 z-0"></div>
			<div
				className={`${
					orderRight ? "order-2 sm:right-[6%]" : "order-1 sm:left-[6%]"
				} max-w-xl order-1 z-10 absolute top-[20%] text-white`}>
				<h2 className="text-4xl md:text-6xl font-medium pb-2 text-center">
					{title}
				</h2>
				<p className="pb-4 text-lg sm:text-2xl font-medium text-center">
					{caption}
				</p>
				<div className="grid sm:grid-cols-3 gap-4">
					<ChipText text={chip1} />
					<ChipText text={chip2} />
					<ChipText text={chip3} />
				</div>
			</div>
			<div className={orderRight ? "order-1" : "order-2"}></div>
		</div>
	);
};

export default ImageTextOverlay;
