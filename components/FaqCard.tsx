"use client";
import React, { useState, useRef } from "react";
import TitleIcon from "@/elements/TitleIcon";

type Props = {
	question: string;
	answer: string;
};

const FaqCard = (props: Props) => {
	const { question, answer } = props;
	const [openAnswer, setOpenAnswer] = useState(false);
	const answerRef = useRef<HTMLDivElement>(null);

	const toggleAnswer = () => {
		setOpenAnswer(!openAnswer);
	};

	const answerStyle = {
		maxHeight: openAnswer ? `${answerRef.current?.scrollHeight}px` : "0",
		overflow: "hidden",
		transition: "max-height 0.3s ease-in-out", 
	};

	const iconStyle = {
		transform: openAnswer ? "rotate(90deg)" : "rotate(0deg)",
		transition: "transform 0.3s ease-in-out", 
	};

	return (
		<div className="cursor-pointer" onClick={toggleAnswer}>
			<div className="rounded-xl border-[1px] border-[#3B3B40] text-white p-4 bg-[#050519] mb-6">
				<div className="flex justify-between items-center">
					<div className="text-medium text-white font-semibold">
						<p>{question}</p>
					</div>
					<div className="" style={iconStyle}>
						<TitleIcon width={32} height={32} color="blue" />
					</div>
				</div>
				<div ref={answerRef} style={answerStyle}>
					<div className="pt-6">
						<p className="text-white/60 text-lg">{answer}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqCard;
