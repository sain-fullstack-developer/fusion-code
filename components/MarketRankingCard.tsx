import React from "react";
import RankText from "./RankText";

type Props = {};

const MarketRankingCard = (props: Props) => {
	return (
		<div className="grid grid-cols-custom2">
			<div className="">
				<ul className="text-white text-lg relative">
					<li className="absolute h-14 w-14 border-2 bg-primary bg-none border-white/40 rounded-full grid place-items-center -bottom-1 right-[18px]">
						<div className="text-[rgb(255,83,0)] mr-1 text-3xl -rotate-90">
							&rarr;
						</div>
					</li>
					<li className="absolute top-[19px] -z-2 h-[140%] right-[44px] sm:-right-[10px] md:right-[14px] lg:right-[44px] w-[2px] bg-white/10"></li>
					<li className="text-white/20 mb-10 z-1 grid grid-cols-2 gap-24 ">
						<span className="">2016</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/20 mb-10 grid grid-cols-2 gap-24 ">
						<span className="">2017</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/0 mb-10 grid grid-cols-2 gap-24 ">
						<span className="">2018</span>
						<div className="rounded-full w-2 h-2 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/0 mb-10 grid grid-cols-2 gap-24 ">
						<span className="">2019</span>
						<div className="rounded-full w-2 h-2 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/20 mb-10 grid grid-cols-2 gap-24 ">
						<span className="">2020</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/20 mb-10 grid grid-cols-2 gap-24 ">
						<span className="">2021</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/20 mb-10 grid grid-cols-2 gap-24 ">
						<span className="text-2xl text-white">2022</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
					<li className="text-white/20 mb-10 grid grid-cols-2 gap-24 ">
						<span className="text-4xl text-white">2023</span>
						<div className="rounded-full w-3 h-3 bg-white/20 inline-block self-center"></div>
					</li>
				</ul>
			</div>
			<div className="text-white px-24 text-center">
				<h2 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-16">
					6+ years on the <br /> market
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
					<RankText rank="3" caption="rd" text="Office in Dubai, UAE" />
					<RankText rank="4" text="Office in Dubai, UAE" />
					<RankText rank="300%" text="Office in Dubai, UAE" />
				</div>
				<p className="leading-loose text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea
					totam ipsum magnam nam, sint inventore enim ut. Doloribus impedit quis
					cupiditate eum repellat rem ipsam reprehenderit quod repellendus
					aliquid!
				</p>
			</div>
		</div>
	);
};

export default MarketRankingCard;
