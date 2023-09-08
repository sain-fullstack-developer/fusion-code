"use client";
import React, { useState } from "react";
import TitleIcon from "@/elements/TitleIcon";

type Props = {};

const FaqCard = (props: Props) => {
	const [openAnswer, setOpenAnswer] = useState(false);
	const revealAnswer = () => {
		setOpenAnswer(true);
	};
	return (
		<div className="rounded-xl text-white flex justify-between p-4">
			<div className="text-medium">
				<p>What size budgets do you typically work with?</p>
			</div>
			<div className="cursor-pointer" onClick={revealAnswer}>
				<TitleIcon width={100} height={100} color="blue" />
			</div>
			{openAnswer && (
				<div>
					<p className="text-white/80 text-lg">
						The cost of Webflow hosting depends on the specific plan you choose.
						Webflow offers a variety of hosting plans with different features
						and pricing tiers. It's best to visit the Webflow website or contact
						their sales team directly for the most up-to-date and accurate
						pricing information for their hosting services.
					</p>
				</div>
			)}
		</div>
	);
};

export default FaqCard;
