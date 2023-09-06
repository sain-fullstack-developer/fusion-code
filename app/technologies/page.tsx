"use client";
import Header from "@/components/Header";
// import ImageOverlayCard from "@/components/ImageOverlayCard";
import TitleContent from "@/components/TitleContent";
// import { platformData, platformsData } from "@/data";
import React from "react";

type Props = {};

const Technologies = (props: Props) => {
	return (
		<>
			<Header />
			<main className="bg-primary min-h-screen">
				<section id="section-wrapper-tech relative">
					<section className="h-screen grid place-items-center">
						<TitleContent
							headingClass="text-3xl sm:text-5xl"
							textClass="text-white/60 text-lg mb-10"
							title="Web, Mobile, Data Science, Blockchain, IoT, SaaS"
							text="We develop software for a variety of platforms. Our solutions are perfectly tailored to your business needs."
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 30 }}
							underline={true}
							main={true}
							dark={true}
						/>
					</section>
					{/* <section className="p-4 sm:p-20">
						<TitleContent
							headingClass="text-3xl text-white sm:text-6xl"
							textClass="text-white/60 text-lg pb-20"
							title="We develop for these platforms:"
							text="Software that runs on a single platform cannot fulfill all the needs of modern-day businesses; we offer a wide range of services that cover a variety of technologies."
							initial={{ y: -50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 30 }}
							dark={true}
						/>
						<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{platformsData.map((data, index) => {
								return (
									<div key={index}>
										<ImageOverlayCard
											title={data.title}
											image={data.url}
											onlyTitle={true}
										/>
									</div>
								);
							})}
						</div>
					</section> */}
				</section>
			</main>
		</>
	);
};

export default Technologies;
