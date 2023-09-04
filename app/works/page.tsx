"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import ImageTextOverlay from "@/components/ImageTextOverlay";
import TitleContent from "@/components/TitleContent";
import { nicheData, recentWorks } from "@/data";

import React from "react";

type Props = {};

const Works = (props: Props) => {
	return (
		<>
			<Header />
			<main>
				<section className="p-4 sm:p-20" id="section-wrapper-works mb-20">
					<section>
						<TitleContent
							headingClass="text-black text-3xl sm:text-5xl"
							textClass="text-black/60 text-lg mb-10"
							title="Recent projects"
							text="Our enterprise clients include IBM, Audi Motors, Equity Bank. We also work with statups and small and medium-sized businesses."
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 30 }}
							underline={true}
							main={true}
						/>
						{recentWorks.map((work, index) => {
							return (
								<div key={index} className="pb-20">
									<ImageTextOverlay
										image={work.image}
										title={work.title}
										caption={work.caption}
										chip1={work.chip1}
										chip2={work.chip2}
										chip3={work.chip3}
										orderRight={index % 2 !== 0 && true}
									/>
								</div>
							);
						})}
					</section>
					<section className="pb-20">
						<TitleContent
							headingClass="text-black/80 text-3xl sm:text-6xl"
							textClass="text-black/60 text-lg"
							title="Pick Out Your Niche"
							text="Geeks Invention has many years of experience providing high-quality consulting and development services for market segments with strong demand for mobile apps. We help our clients add value to their business and minimize a wide range of risk factors."
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 30 }}
						/>
					</section>
					<section className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 sm:gap-x-6 sm:gap-y-12">
						{nicheData.map((niche, index) => {
							return (
								<Button
									type="button"
									className="bg-none border-none text-black/80 text-lg p-4 hover:bg-forth hover:text-white"
									key={index}
									noArrow={true}>
									{niche.name}
								</Button>
							);
						})}
					</section>
				</section>
				<section className="relative mt-[-5vh] h-[50vh] z-0 bg-primary">
					<div className="mb-[-120vh] h-[40vh] w-full text-white bg-primary">
						<div className="grid place-items-center sticky top-[80vh]">
							<Footer />
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Works;
