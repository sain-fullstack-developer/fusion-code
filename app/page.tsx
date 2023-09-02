"use client";
import Button from "@/components/Button";
import ClientsCard from "@/components/ClientsCard";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import IconTitle from "@/components/IconTitle";
import SectionBlock from "@/components/SectionBlock";
import { cardData, platformData, sectionData, teamsData } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import InitialPage from "@/components/Loading";

const Home = () => {
	const ref = useRef<HTMLElement>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [scrollDisplayTop, setScrollDisplayTop] = useState(true);
	const [scrollDisplayBottom, setScrollDisplayBottom] = useState(false);


	const scroll = useScroll();

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	

	return (
		<>
			{isLoading && <InitialPage />}
			{!isLoading && (
				<main className="bg-primary">
					<Header />

					<motion.div className="text-white relative">
						{scrollDisplayTop && (
							<motion.section className="h-screen grid place-items-center inset-0 -z-10 bg-primary">
								<Image
									className="absolute -z-1 opacity-10"
									src="/geeks.png"
									height={480}
									width={480}
									alt="Geeks Icon"
								/>
								<div className="p-6 sm:p-0 text-center">
									<h1 className="text-5xl sm:text-7xl mb-10">
										EMBRACE THE FUTURE
									</h1>
									<p className="text-2xl sm:text-4xl text-center">
										Welcome to the Age of Action
									</p>
								</div>
							</motion.section>
						)}

						<motion.section ref={ref}>
							{sectionData.map((data, index) => {
								return (
									<motion.section
										key={index}
										className={
											index === 0
												? "bg-secondary"
												: index === 1
												? "bg-third"
												: index === 2
												? "bg-primary"
												: ""
										}>
										<SectionBlock
											image={data.image}
											title={data.title}
											text={data.text}
											caption={data.caption}
											chip1={data.chip1}
											chip2={data.chip2}
											chip3={data.chip3}
											order={index === 0 ? data.order : false}
										/>
									</motion.section>
								);
							})}

							<section className="min-h-screen grid place-items-center bg-primary">
								<div className="text-center w-1/2">
									<h2 className="text-3xl sm:text-5xl mb-10">
										Check out more works by Geeks Invention
									</h2>
									<p className="text-lg text-white/80 mb-12">
										Our case studies describe design and development solutions
										implemented at our Geeks Invention projects. The stories are
										a valuable resource for those looking to develop their own
										mobile apps.
									</p>
									<Button
										type="button"
										className="border-pixel hover:bg-[rgb(255,83,0)] hover:text-white border-[rgb(255,83,0)] bg-none text-[rgb(255,83,0)] p-4 rounded-full">
										See all case studies
									</Button>
								</div>
							</section>

							<section className="min-h-screen text-center mb-12 bg-primary">
								<h2 className="text-4xl sm:text-6xl mb-6">Recent clients</h2>
								<p className="text-lg text-white/60 mb-20 max-w-2xl m-auto p-4 sm:p-0">
									We worked with the Fortune 500 companies in the USA, Africa,
									UK, Middle East World&apos;s 4th Strongest Banking Brand,
									Automobile & IoT industry
								</p>
								<motion.div
									initial={{ y: 200, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="grid gap-6 p-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
									{cardData.map((card, index) => {
										return (
											<ClientsCard
												key={index}
												logo={card.logo}
												title={card.title}
												text={card.text}
											/>
										);
									})}
								</motion.div>
							</section>

							<section className="min-h-screen text-center p-6 sm:p-0 bg-primary">
								<motion.h2
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="text-4xl sm:text-7xl mb-6">
									Software for modern platforms
								</motion.h2>
								<motion.p
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
									We develop applications for mobile, web, wearables, and TV.
								</motion.p>
								<div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mb-10">
									{platformData.map((card, index) => {
										return (
											<IconTitle
												key={index}
												logo={card.logo}
												title={card.title}
												modern={true}
											/>
										);
									})}
								</div>
								<Button
									className="border-pixel rounded-full py-4 px-8 border-[rgb(255,83,0)] text-[rgb(255,83,0)] hover:bg-[rgb(255,83,0)] hover:text-white"
									type="button">
									See our tech stack
								</Button>
							</section>

							<section className="min-h-screen text-center mb-32 p-6 sm:p-0 bg-primary">
								<motion.h2
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="text-4xl sm:text-6xl mb-6">
									Only dedicated teams
								</motion.h2>
								<motion.p
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
									Our team is 100% concentrated on your project and you have
									full control over management of the dedicated team members.
								</motion.p>
								<div className="grid gap-6 gap-y-28 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16">
									{teamsData.map((card, index) => {
										return (
											<IconTitle
												key={index}
												logo={card.logo}
												title={card.title}
											/>
										);
									})}
								</div>
								<Button
									className="border-pixel rounded-full py-4 px-8 border-[rgb(255,83,0)] text-[rgb(255,83,0)] hover:bg-[rgb(255,83,0)] hover:text-white"
									type="button">
									See our services
								</Button>
							</section>
						</motion.section>

						{scrollDisplayBottom && (
							<motion.section className="h-screen text-center m-auto p-6 sm:p-0 bg-primary grid place-items-center">
								<div>
									<h2 className="text-4xl sm:text-6xl mb-6 mt-20">
										Get to know us better!
									</h2>
									<p className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
										It is a pleasure to have you on our website. Let us know if
										there&apos;s an opportunity to do something together.
									</p>
									<Button
										className="rounded-full text-white py-4 px-8 hover:bg-white bg-[rgb(255,83,0)] hover:text-[rgb(255,83,0)]"
										type="button">
										Drop us a message
									</Button>
								</div>
								<Footer />
							</motion.section>
						)}
					</motion.div>
				</main>
			)}
		</>
	);
};

export default Home;
