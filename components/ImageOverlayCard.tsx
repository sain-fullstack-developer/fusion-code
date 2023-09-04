import React from "react";
import TitleContent from "./TitleContent";

type Props = {
	onlyTitle?: Boolean;
	titleArrow?: Boolean;
	title: string;
	text?: string;
	image: string;
};

const ImageOverlayCard = (props: Props) => {
	const { onlyTitle, titleArrow, title, text, image } = props;
	return (
		<div
			className={`bg-recent-one bg-contain bg-no-repeat h-[423px] w-full grid place-items-center relative`}>
			<div className="bg-[rgba(0,0,0,0.4)] absolute w-full h-full top-0 left-0 z-0"></div>
			<div className="z-10">
				{!onlyTitle && !titleArrow && (
					<>
						<TitleContent
							title={title}
							text={text ? text : ""}
							headingClass="text-5xl text-white"
							textClass="text-white/80 text-base"
						/>
						<div className="text-2xl font-bold text-[rgb(255,83,0)] mt-10 text-center">
							&rarr;
						</div>
					</>
				)}
				{onlyTitle && <h3 className="text-2xl text-white">{title}</h3>}
				{titleArrow && (
					<>
						<h3 className="text-2xl text-white">{title}</h3>
						<div className="text-2xl font-bold text-[rgb(255,83,0)] mt-10 text-center">
							&rarr;
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ImageOverlayCard;
