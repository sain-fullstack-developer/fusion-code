import React from "react";

type Props = {
	children: React.ReactNode;
	scrollContacts?: () => void;
};

const GradientButton = (props: Props) => {
	const { children, scrollContacts } = props;
	return (
		<div className="relative inline-flex group">
			<div
				className={`absolute w-full transitiona-all duration-1000 opacity-90 -inset-2 bg-btnBg rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}></div>
			<div
				onClick={() => scrollContacts}
				className="cursor-pointer w-full relative inline-flex items-center justify-center px-6 py-3 text-base text-white transition-all duration-200 bg-btnBg rounded-lg ring-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
				{children}
			</div>
		</div>
	);
};

export default GradientButton;
