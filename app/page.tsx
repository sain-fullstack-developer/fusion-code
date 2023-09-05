"use client";
import Button from "@/components/Button";
import ClientsCard from "@/components/ClientsCard";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import IconTitle from "@/components/IconTitle";
import SectionBlock from "@/components/SectionBlock";
import { cardData, platformData, sectionData, teamsData } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import InitialPage from "@/components/Loading";
import TitleContent from "@/components/TitleContent";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const targetRef = useRef(null);
	const extendedRef = useRef(null);

	const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
		target: extendedRef,
		offset: ["start end", "end end"],
	});

	const y = useTransform(
		scrollYProgressIncludingOverlap,
		[0.75, 1],
		["0vh", "40vh"]
	);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			{isLoading && <InitialPage />}
			{!isLoading && (
				<>
					<Header />
					<motion.main className="bg-primary -z-10">
						<section
							ref={targetRef}
							className="relative mt-[-30vh] h-[140vh] z-0">
							<div
								ref={extendedRef}
								className="mb-[-120vh] h-[420vh] w-full text-white">
								<motion.div className="grid place-items-center sticky top-[40vh]">
									<Image
										className="absolute opacity-10"
										src="/geeks.png"
										height={480}
										width={480}
										alt="Geeks Icon"
									/>
									<motion.div
										ref={targetRef}
										className="p-6 sm:p-0 text-center">
										<h1 className="text-5xl sm:text-7xl mb-10">
											EMBRACE THE FUTURE
										</h1>
										<p className="text-2xl sm:text-4xl text-center">
											Welcome to the Age of Action
										</p>
									</motion.div>
								</motion.div>
							</div>
						</section>

						<motion.div className={`z-10 relative bg-primary pb-40`}>
							<motion.section>
								<SectionBlock
									image={sectionData[0].image}
									title={sectionData[0].title}
									text={sectionData[0].text}
									caption={sectionData[0].caption}
									chip1={sectionData[0].chip1}
									chip2={sectionData[0].chip2}
									chip3={sectionData[0].chip3}
									order={true}
								/>
							</motion.section>
							<motion.section>
								<SectionBlock
									image={sectionData[1].image}
									title={sectionData[1].title}
									text={sectionData[1].text}
									caption={sectionData[1].caption}
									chip1={sectionData[1].chip1}
									chip2={sectionData[1].chip2}
									chip3={sectionData[1].chip3}
									order={true}
								/>
							</motion.section>
							<motion.section>
								<SectionBlock
									image={sectionData[2].image}
									title={sectionData[2].title}
									text={sectionData[2].text}
									caption={sectionData[2].caption}
									chip1={sectionData[2].chip1}
									chip2={sectionData[2].chip2}
									chip3={sectionData[2].chip3}
									order={true}
								/>
							</motion.section>

							<section className="py-20 grid place-items-center bg-primary">
								<div className="text-center sm:w-1/2">
									<TitleContent
										headingClass="text-white text-4xl sm:text-6xl"
										textClass="text-white/80 text-xl"
										title="Check out more works by Geeks Invention"
										text="Our case studies describe design and development solutions
										implemented at our Geeks Invention projects. The stories are
										a valuable resource for those looking to develop their own
										mobile apps."
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ type: "spring", stiffness: 30 }}
									/>

									<Button
										type="button"
										className="border-pixel text-lg mt-20 hover:bg-[rgb(255,83,0)] hover:text-white border-[rgb(255,83,0)] bg-none text-[rgb(255,83,0)] p-4 rounded-full">
										See all case studies
									</Button>
								</div>
							</section>

							<section className="py-20 text-center mb-12 bg-primary">
								<TitleContent
									headingClass="text-white text-3xl sm:text-6xl"
									textClass="text-white/60 text-text"
									title="Recent clients"
									text="We worked with the Fortune 500 companies in the USA, Africa,
										UK, Middle East World's 4th Strongest Banking Brand,
										Automobile & IoT industry"
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
								/>
								<motion.div
									initial={{ y: 200, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									className="grid gap-6 p-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-20">
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
								<TitleContent
									headingClass="text-white text-4xl sm:text-6xl"
									textClass="text-white/60 text-xl mb-20"
									title="Software for modern platforms"
									text="We develop applications for mobile, web, wearables, and TV."
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
								/>
								<div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mb-20">
									{platformData.map((card, index) => {
										return (
											<IconTitle
												key={index}
												id={index}
												logo={card.logo}
												title={card.title}
												modern={true}
												logoInitial={{ scale: 0, opacity: 0 }}
												logoWhileInView={{ scale: 1, opacity: 1 }}
												logoTransition={{
													duration: 0.2,
													delay: index * 0.2,
												}}
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

							<section className="text-center pb-32 p-6 sm:p-0 bg-primary">
								<TitleContent
									headingClass="text-white text-4xl sm:text-6xl mb-6"
									textClass="text-xl text-white/60 mb-20"
									title="Only dedicated teams"
									text="Our team is 100% concentrated on your project and you have
									full control over management of the dedicated team members."
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
								/>

								<div className="grid gap-6 gap-y-28 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16">
									{teamsData.map((card, index) => {
										return (
											<IconTitle
												key={index}
												logo={card.logo}
												title={card.title}
												logoInitial={{ scale: 0, opacity: 0 }}
												logoWhileInView={{ scale: 1, opacity: 1 }}
												logoTransition={{
													duration: 0.2,
													delay: index * 0.2,
												}}
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
						</motion.div>

						<motion.section className="relative mt-[-60vh] h-[140vh] z-0 bg-primary">
							<div className="mb-[-120vh] h-[320vh] w-full text-white bg-primary">
								<div className="grid place-items-center sticky top-[30vh]">
									<TitleContent
										headingClass="text-white text-4xl sm:text-6xl"
										textClass="text-white/60 text-xl mb-10"
										title="Get to know us better!"
										text="It is a pleasure to have you on our website. Let us know if
									there's an opportunity to do something together."
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ type: "spring", stiffness: 30 }}
									/>
									<Button
										className="rounded-full text-white py-4 px-8 hover:bg-white bg-[rgb(255,83,0)] hover:text-[rgb(255,83,0)] mb-20"
										type="button">
										Drop us a message
									</Button>
									<Footer />
								</div>
							</div>
						</motion.section>
					</motion.main>
				</>
			)}
		</>
	);
};

export default Home;
