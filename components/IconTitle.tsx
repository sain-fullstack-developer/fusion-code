import Image from "next/image";
import React from "react";

type Props = {
	logo: string;
	title: string;
	modern?: Boolean;
};

const IconTitle = (props: Props) => {
	const { logo, title, modern } = props;
	return (
		<div className="m-auto text-center">
			<Image
				className="mb-6 h-24 w-24 m-auto"
				src={logo}
				width={modern ? 90 : 60}
				height={modern ? 90 : 60}
				alt="icons"
			/>
			<h2 className="text-2xl font-medium capitalize">{title}</h2>
		</div>
	);
};

export default IconTitle;
