import React from "react";

type Props = {};

const WorkWithUsCard = (props: Props) => {
	return (
		<div className="bg-card w-[90%] sm:w-full border-[1px] rounded-lg border-[#0e1327] p-[1px]">
			<div className="rounded-lg p-4 bg-[rgba(1,1,4,.9)] w-full h-full">
				<div className="bg-[rgba(12,2,40,.4)] border-[1px] border-[#0e1327] w-12 h-12  rounded-lg grid place-items-center">
					<svg
						width="24"
						height="24"
						viewBox="0 0 32 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M30.4571 15.2945H21.2638C19.2155 15.2945 17.5579 13.5937 17.5579 11.492V0.954571C17.5579 0.680871 17.3483 0.46582 17.0815 0.46582H16.005C15.1476 0.46582 14.4521 1.1794 14.4521 2.05915V11.492C14.4521 15.3532 17.5007 18.4714 21.2543 18.4714H31.5241C31.7908 18.4714 32.0004 18.2563 32.0004 17.9826V16.8781C32.0004 15.9983 31.305 15.2847 30.4476 15.2847L30.4571 15.2945Z"
							fill="blue"></path>
						<path
							d="M10.7462 15.2944H0.476338C0.209589 15.2944 0 15.5095 0 15.7832V16.8878C0 17.7675 0.695458 18.4811 1.55287 18.4811H10.7462C12.7944 18.4811 14.4521 20.1819 14.4521 22.2836V32.821C14.4521 33.0947 14.6617 33.3098 14.9284 33.3098H16.005C16.8624 33.3098 17.5578 32.5962 17.5578 31.7165V22.2836C17.5578 18.4224 14.5093 15.3042 10.7557 15.3042L10.7462 15.2944Z"
							fill="blue"></path>
					</svg>
				</div>

				<h3 className="text-white text-2xl pt-4 font-roc">
					Focus on quality and efficiency
				</h3>
			</div>
		</div>
	);
};

export default WorkWithUsCard;
