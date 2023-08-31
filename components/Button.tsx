import React from "react";

interface ButtonTypes {
	children: React.ReactNode;
	className?: string;
	type: "button" | "reset" | "submit" | undefined;
	tabIndex?: number;
	noArrow?: Boolean;
	handleClick?: () => void;
}

const Button = ({
	children,
	className,
	type,
	tabIndex,
	noArrow,
	handleClick,
}: ButtonTypes) => {
	return (
		<div>
			<button
				tabIndex={tabIndex}
				onClick={handleClick}
				type={type}
				className={`${className} cursor-pointer`}>
				<p>
					{children} {!noArrow && <span className="text-lg">&#8594;</span>}
				</p>
			</button>
		</div>
	);
};

export default Button;
