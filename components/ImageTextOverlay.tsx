import React from "react";
import ChipText from "./ChipText";

type Props = {
	orderRight: Boolean;
	image: string;
	title: string;
	caption: string;
	chip1: string;
	chip2: string;
	chip3: string;
};

const ImageTextOverlay = (props: Props) => {
	const { orderRight, image, title, caption, chip1, chip2, chip3 } = props;
	return (
		<div
			className={`bg-${image} p-10 z-0 relative before:bg-black/10 sm:before:bg-black/60 lg:before:bg-black/0 before:top-0 before:left-0 before:w-full before:h-full before:absolute sm:bg-contain bg-no-repeat h-[700px] sm:h-[500px] grid sm:grid-cols-1 lg:grid-cols-2 lg:place-items-center text-white sm:p-10`}>
			<div
				className={`${
					orderRight ? "order-2" : "order-1"
				} max-w-xl order-1 z-10`}>
				<h2 className="text-4xl md:text-8xl font-medium pb-2 text-center">
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
