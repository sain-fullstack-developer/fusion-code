"use client";
import React, { useState } from "react";
import TitleIcon from "@/elements/TitleIcon";

type Props = {
	question: string;
	answer: string;
};

const FaqCard = (props: Props) => {
	const { question, answer } = props;
	const [openAnswer, setOpenAnswer] = useState(false);
	const revealAnswer = () => {
		setOpenAnswer(!openAnswer);
	};
	return (
		<div className="">
			<div className="rounded-xl border-gray-600 text-white p-4 border-[1px] bg-[#0e1327] mb-6">
				<div className="flex justify-between">
					<div className="text-medium text-white font-semibold">
						<p>{question}</p>
					</div>
					<div className="cursor-pointer" onClick={revealAnswer}>
						<TitleIcon width={32} height={32} color="blue" />
					</div>
				</div>
				{openAnswer && (
					<div className="pt-6">
						<p className="text-white/60 text-lg">{answer}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default FaqCard;
