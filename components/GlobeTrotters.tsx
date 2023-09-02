import React from "react";
import RankText from "./RankText";

type Props = {};

const GlobeTrotters = (props: Props) => {
	return (
		<div>
			<h3 className="text-4xl sm:text-subHeading text-white text-center mb-20">
				Globetrotters
			</h3>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center text-center">
				<RankText rank="4" text="Times our designs got stolen" />
				<RankText
					rank="4"
					text="Times our apps
                    received media coverage"
				/>
				<RankText
					rank="4"
					text="Times we beat
Facebook on Github"
				/>
				<RankText rank="4" text="Times our designs got stolen" />
			</div>
		</div>
	);
};

export default GlobeTrotters;
