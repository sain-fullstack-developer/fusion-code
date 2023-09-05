import Image from "next/image";
import React from "react";

type Props = {
	logo: string;
	title: string;
	text: string;
};

const ClientsCard = (props: Props) => {
	const { logo, title, text } = props;
	return (
		<div className="h-[549px] text-center w-full p-6 bg-white/10 rounded-sm grid place-items-center overflow-hidden">
			<div>
				<Image
					className="mb-10 m-auto"
					src={logo}
					width={280}
					height={280}
					alt="ddd"
				/>
				<h2 className="text-2xl mb-4 font-medium text-white">{title}</h2>
				<p className="max-w-[300px] text-center m-auto text-white/60">{text}</p>
			</div>
		</div>
	);
};

export default ClientsCard;
