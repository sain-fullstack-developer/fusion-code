"use client";
import Button from "@/components/Button";
import ChipText from "@/components/ChipText";
import ClientsCard from "@/components/ClientsCard";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import IconTitle from "@/components/IconTitle";
import SectionBlock from "@/components/SectionBlock";
import { cardData, platformData, teamsData } from "@/data";
import React from "react";

const Home = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-primary text-white relative">
				<section className="min-h-screen grid place-items-center">
					<div>
						<h1 className="text-7xl mb-10">EMBRACE THE FUTURE</h1>
						<p className="text-4xl text-center">Welcome to the Age of Action</p>
					</div>
				</section>
				<section className="bg-secondary">
					<SectionBlock
						image="/industry-fintech.svg"
						title="Fintech Solution"
						text="Revolutionize your industry with our innovative IoT solutions. Our
							software development services offer connected manufacturing,
							pollution control, smart transportation, and intelligent farming,
							agriculture, and forestry. With our expertise, you can harness the
							power of technology to increase efficiency, reduce waste, and
							optimize operations for a sustainable future."
						caption="Transforming Fintech with AI"
						chip1="Fraud detection"
						chip2="Transaction categorisation"
						chip3="Risk Scoring"
						order={true}
					/>
				</section>
				<section className="bg-third">
					<SectionBlock
						image="/industry-iot.webp"
						title="Industrial IoT"
						text="Revolutionize your industry with our innovative IoT solutions. Our
							software development services offer connected manufacturing,
							pollution control, smart transportation, and intelligent farming,
							agriculture, and forestry. With our expertise, you can harness the
							power of technology to increase efficiency, reduce waste, and
							optimize operations for a sustainable future."
						caption="Providing a better connected experience"
						chip1="Connected manufacturing"
						chip2="Aviation"
						chip3="Smart Building"
					/>
				</section>
				<section>
					<SectionBlock
						image="/industry-education.webp"
						title="Smart Education"
						text="Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry."
						caption="Elevate your Education Institution"
						chip1="Learning Management"
						chip2="Course offering"
						chip3="Professional Training"
					/>
				</section>
				<section className="min-h-screen grid place-items-center">
					<div className="text-center w-1/2">
						<h2 className="text-5xl mb-10">
							Check out more works by Geeks Invention
						</h2>
						<p className="text-lg text-white/80 mb-12">
							Our case studies describe design and development solutions
							implemented at our Geeks Invention projects. The stories are a
							valuable resource for those looking to develop their own mobile
							apps.
						</p>
						<Button
							type="button"
							className="border-pixel hover:bg-[rgb(255,83,0)] hover:text-white border-[rgb(255,83,0)] bg-none text-[rgb(255,83,0)] p-4 rounded-full">
							See all case studies
						</Button>
					</div>
				</section>

				<section className="min-h-screen text-center">
					<h2 className="text-6xl mb-6">Recent clients</h2>
					<p className="text-lg text-white/60 mb-20 max-w-2xl m-auto">
						We worked with the Fortune 500 companies in the USA, Africa, UK,
						Middle East World's 4th Strongest Banking Brand, Automobile & IoT
						industry
					</p>
					<div className="grid gap-6 p-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
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
					</div>
				</section>

				<section className="min-h-screen text-center">
					<h2 className="text-6xl mb-6">Software for modern platforms</h2>
					<p className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
						We develop applications for mobile, web, wearables, and TV.
					</p>
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

				<section className="min-h-screen text-center mb-20">
					<h2 className="text-6xl mb-6">Only dedicated teams</h2>
					<p className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
						Our team is 100% concentrated on your project and you have full
						control over management of the dedicated team members.
					</p>
					<div className="grid gap-6 gap-y-28 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16">
						{teamsData.map((card, index) => {
							return (
								<IconTitle key={index} logo={card.logo} title={card.title} />
							);
						})}
					</div>
					<Button
						className="border-pixel rounded-full py-4 px-8 border-[rgb(255,83,0)] text-[rgb(255,83,0)] hover:bg-[rgb(255,83,0)] hover:text-white"
						type="button">
						See our services
					</Button>
				</section>

				<section className="min-h-screen text-center m-auto">
					<h2 className="text-6xl mb-6">Get to know us better!</h2>
					<p className="text-xl text-white/60 mb-20 max-w-2xl m-auto">
						It is a pleasure to have you on our website. Let us know if there's
						an opportunity to do something together.
					</p>
					<Button
						className="rounded-full text-white py-4 px-8 hover:bg-white bg-[rgb(255,83,0)] hover:text-[rgb(255,83,0)]"
						type="button">
						Drop us a message
					</Button>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
