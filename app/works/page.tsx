"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import ImageTextOverlay from "@/components/ImageTextOverlay";
import TitleContent from "@/components/TitleContent";
import { nicheData, recentWorks } from "@/data";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

type Props = {};

const Works = (props: Props) => {
	return (
		<Fragment>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="bg-primary">
				<Header />
				<section className="pb-40 z-10" id="section-wrapper-works">
					<div className="">
						<div className="px-10 py-20 sm:p-40 pb-4 relative z-0">
							<div className="absolute w-full h-full sm:h-96 sm:w-96 bg-radial -z-10 top-10 sm:top-20 left-0 sm:left-[36%]"></div>
							<TitleContent
								headingClass="text-white text-4xl sm:text-5xl lg:text-7xl"
								textClass="text-white/60 text-lg mb-10"
								title="Recent projects"
								text="Our enterprise clients include IBM, Audi Motors, Equity Bank. We also work with statups and small and medium-sized businesses."
								initial={{ y: -50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ type: "spring", stiffness: 30 }}
								underline={true}
								main={true}
							/>
						</div>
						{recentWorks.map((work, index) => {
							return (
								<div key={index} className="pb-10 sm:p-10">
									<ImageTextOverlay
										image={work.image}
										title={work.title}
										caption={work.caption}
										chip1={work.chip1}
										chip2={work.chip2}
										chip3={work.chip3}
										alt={`recent-work-${index}`}
										orderRight={index % 2 !== 0 && true}
									/>
								</div>
							);
						})}
					</div>
					<div className="py-20 relative z-10">
						<div className="absolute w-full h-full sm:h-96 sm:w-96 bg-radial -z-10 top-10  sm:top-6 left-0 sm:left-[36%]"></div>
						<TitleContent
							headingClass="text-white/80 text-3xl sm:text-7xl"
							textClass="text-white/60 text-lg"
							title="Pick Out Your Niche"
							text="Fusion Code has many years of experience providing high-quality consulting and development services for market segments with strong demand for mobile apps. We help our clients add value to their business and minimize a wide range of risk factors."
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 30 }}
						/>
					</div>
					<div className="grid relative place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 sm:gap-x-6 sm:gap-y-12">
						{nicheData.map((niche, index) => {
							return (
								<Button
									type="button"
									className="bg-none border-none text-white/80 text-lg p-4 hover:bg-btnBg hover:text-white"
									key={index}
									noArrow={true}>
									{niche.name}
								</Button>
							);
						})}
					</div>
				</section>

				<section className="relative mt-[-5vh] h-[50vh] -z-0 ">
					<div className="mb-[-120vh] h-[40vh] w-full text-white">
						<div className="grid place-items-center sticky top-[80vh]">
							<Footer />
						</div>
					</div>
				</section>
			</motion.main>
		</Fragment>
	);
};

export default Works;
