import React from "react";

interface ButtonTypes {
	children: React.ReactNode;
	className?: string;
	type: "button" | "reset" | "submit" | undefined;
	tabIndex?: number;
	noArrow?: Boolean;
	circle?: Boolean;
	handleClick?: () => void;
}

const Button = ({
	children,
	className,
	type,
	tabIndex,
	noArrow,
	handleClick,
	circle,
}: ButtonTypes) => {
	return (
		<div>
			<button
				tabIndex={tabIndex}
				onClick={handleClick}
				type={type}
				className={`${className} cursor-pointer text-center`}>
				<p className="flex justify-center">
					{circle && (
						<div className="w-3 h-3 rounded-full bg-green-400 mr-2 mt-2"></div>
					)}{" "}
					{children} {!noArrow && <span className="text-lg">&#8594;</span>}
				</p>
			</button>
		</div>
	);
};

export default Button;
