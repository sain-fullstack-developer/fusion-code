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
			className={`bg-${image} bg-contain bg-no-repeat h-[700px] sm:h-[500px] grid sm:grid-cols-2 lg:place-items-center text-white p-2 sm:p-10`}>
			<div className={`${orderRight ? "order-2" : "order-1"} max-w-xl order-1`}>
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
