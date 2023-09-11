"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer.";
import Header from "@/components/Header";
import IconTitle from "@/components/IconTitle";
import {
	ClientReviewsData,
	cardData,
	curativeHeads,
	devSkills,
	faqCardData,
	faqNavList,
	platformData,
	serviceNavs,
	servicesCardData,
	teamsData,
} from "@/data";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InitialPage from "@/components/Loading";
import TitleContent from "@/components/TitleContent";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ServicesCard from "@/components/ServicesCard";
import GradientButton from "@/components/GradientButton";
import WorkWithUsCard from "@/components/WorkWithUsCard";
import ClientReviewCard from "@/components/ClientReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);


const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [faqNavOn, setFaqNavOn] = useState(0);
	const [serviceNav, setServiceNav] = useState(0);
	const [servicesData, setServicesData] = useState(0);
	const [faqDataState, setFaqDataState] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [hue, setHue] = useState(0);
	const targetRef = useRef(null);
	const extendedRef = useRef(null);
	const scrollContactRef = useRef(null);
	const servicesRef = useRef(null);
	const faqCardRef = useRef(null);

	const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
		target: extendedRef,
		offset: ["start end", "end end"],
	});

	const y = useTransform(
		scrollYProgressIncludingOverlap,
		[0.75, 1],
		["0vh", "40vh"]
	);

	const generateRandomHue = () => {
		const hue = Math.floor(Math.random() * 360);
		setHue(hue);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		const interval = setInterval(generateRandomHue, 1000);
		return () => clearInterval(interval);
	}, []);

	const onScrollToContactsEl: any = async () => {
		window.scrollTo({
			top: window.scrollY + scrollContactRef?.current?.offsetTop,
			behavior: "smooth",
		});
	};

	const handleFaqClick = (index: number) => {
		setFaqNavOn(index);
		setFaqDataState(index);
		faqCardRef?.current?.classList?.add("card-animate");
	};

	const handleServiceNav = (index: number) => {
		setServiceNav(index);
		setServicesData(index);
	};

	const NextArrowFunc = (props: any) => {
		const { onClick } = props;
		return (
			<div
				onClick={onClick}
				className="w-8 h-8 p-2 rounded-lg border-black border-[1px] cursor-pointer absolute -bottom-20 right-0">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
						fill="currentColor"></path>
				</svg>
			</div>
		);
	};

	const PrevArrowFunc = (props: any) => {
		const { onClick } = props;
		return (
			<div
				onClick={onClick}
				className="w-8 h-8 p-2 rounded-lg border-black border-[1px] cursor-pointer absolute -bottom-20 right-14">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
						fill="currentColor"></path>
				</svg>
			</div>
		);
	};

	const settings = {
		prevArrow: <PrevArrowFunc />,
		nextArrow: <NextArrowFunc />,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	useEffect(() => {
		if (currentIndex === curativeHeads.length - 1) {
			console.log("stopping");
			return;
		}
		const interval = setInterval(() => {
			const updatedData = currentIndex + 1;
			setCurrentIndex(updatedData);
		}, 1000);

		return () => clearInterval(interval);
	}, [currentIndex]);
	return (
		<>
			{isLoading && <InitialPage />}
			{!isLoading && (
				<>
					<div className="z-50">
						<Header scrollContacts={onScrollToContactsEl} />
					</div>
					<motion.main
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="bg-primary -z-10">
						<section
							ref={targetRef}
							className="relative mt-[-30vh] h-[140vh] z-0">
							<div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
								<motion.div className="grid place-items-center sm:h-screen sticky top-[40vh] sm:top-[6vh]">
									<div
										data-poster-url="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-poster-00001.jpg"
										data-video-urls="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-transcode.mp4,https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-transcode.webm"
										data-autoplay="true"
										data-loop="true"
										data-wf-ignore="true"
										data-beta-bgvideo-upgrade="false"
										className="z-0 w-full h-screen absolute grid place-items-center object-cover text-white">
										<video loop muted id="video" autoPlay={true} className="h-full object-cover opacity-50">
											<source
												src="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-transcode.mp4"
												data-wf-ignore="true"></source>
											<source
												src="https://uploads-ssl.webflow.com/6478fa4e7e9547c7d81368ff/649d7617ba75cbd92761d297_abstract-cubic-shape-animation-loop-with-detailed-2022-05-09-23-05-33-utc (1)-transcode.webm"
												data-wf-ignore="true"></source>
										</video>
									</div>
									<motion.div
										ref={targetRef}
										className="p-6 sm:p-0 text-white text-center z-20 relative">
										<motion.h1 className="font-roc text-4xl md:text-7xl lg:text-9xl mb-10 font-medium">
											<motion.div
												initial={{ opacity: 0, y: -400 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 1, delay: 0.4 }}
												className="flex items-center flex-col lg:flex-row mb-1" >
												Fusing <div className="border-[3px] border-[#3a383e] rounded-full px-6 py-2 lg:px-8 lg:py-4 backdrop-blur-sm bg-gradient-to-r from-[#6000FF] via-pink-500 to-fuchsia-500 text-transparent bg-clip-text custom-text-stroke">Innovation</div>
											</motion.div>
											<motion.div
												initial={{ opacity: 0, y: 400 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 1, delay: 0.4 }}>
												with Excellence
											</motion.div>
										</motion.h1>
									</motion.div>
									<div className=" z-10 w-full h-full top-0 left-0 absolute"></div>
								</motion.div>
							</div>
						</section>

						<motion.section className={`z-20 relative pb-40 bg-primary`}>
							<div className="pt-20 pb-10 text-center mb-12 bg-primary">
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
								<div className="overflow-hidden w-full pt-20">
									<motion.div className="scroll-animate">

										<Swiper
											autoplay={{
												delay: 1000,
												disableOnInteraction: false,
												pauseOnMouseEnter: false,
											}}
											// speed={1200}
											spaceBetween={50}
											loop={true}
											allowTouchMove={false}
											breakpoints={{
												320: {
													slidesPerView: 1,
												},
												768: {
													slidesPerView: 3,
												},
												1024: {
													slidesPerView: 6,

												},
											}}
											modules={[Autoplay]}
											className="mySwiper"
										>

											{cardData.map((card, index) => {
												return (
													<SwiperSlide key={index}>
														<div className="flex-shrink-0 " key={index}>
															<Image
																src={card.logo}
																width={200}
																height={200}
																alt={`client-${index}`}
																className="w-2/4 mx-auto lg:w-3/4"
															/>
														</div>
													</SwiperSlide>
												);
											})}

										</Swiper>
									</motion.div>
								</div>
							</div>

							<div className="p-4 mb-28 sm:p-12 relative">
								<div className="absolute bg-radial h-full top-0"></div>
								<div className="lg:w-4/6 w-full ml-auto mr-auto p-[1px] rounded-lg hover-trigger relative">
									<div className="hover-state-indicator hover-line"></div>
									<div className="bg-black shadow-card border-[1px] border-[#3B3B40] rounded-2xl lg:p-20 p-4 text-[#0c0228] text-base z-10 ">

										<div className="text-center">
											<h2 className="gray-text text-2xl lg:text-3xl font-roc mb-4 lg:mb-6 font-medium">
												No fluff, no long processes, no bloated teams...
											</h2>
											<h2 className="text-stone-300 lg:text-gray-300 text-2xl lg:text-5xl font-roc font-medium mb-0 lg:mb-2 ">
												Streamlined design and development.
											</h2>
											<h2 className="text-stone-300 lg:text-gray-300 text-2xl lg:text-5xl font-roc font-medium">
												Swift and remarkable results.
											</h2>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-image w-full relative p-20 min-h-screen">
								<div className="text-center w-full max-w-[54rem] m-auto pb-20 lg:pb-32">
									<div className="flex pb-6 justify-center">
										<TitleIcon width={24} height={24} color="blue" />
										<p className="ml-2 text-base font-semibold caption-text">
											What we do
										</p>
									</div>
									<h2 className="font-roc text-4xl text-[#0c0228] sm:text-5xl md:text-[3.5rem] md:leading-tight font-medium text-content pb-4 md:pb-8">
										Choose all the service &nbsp;
										<span
											style={{
												backgroundColor: `hsla(${hue}, 100%, 50%, 0.2)`,
											}}
											className="bg-textBg py-2 border-2 border-r-blue-600 border-l-blue-600">
											<span>blocks</span>
										</span>
										<br />
										or just the ones you need...
									</h2>
									<p className="text-base sm:text-lg">
										Tailored services <strong>without the agency fluff:</strong>
										discovery, strategy, branding, website and product design,
										Webflow development, and training, all in one comprehensive
										suite.
									</p>
								</div>
								<div className="hidden lg:block lg:sticky lg:top-52">
									{serviceNavs.map((service, index) => {
										return (
											<h2
												onClick={() => handleServiceNav(index)}
												key={index}
												className={`${
													index === serviceNav
														? "gradients opacity-100"
														: index !== serviceNav
														? "opacity-50"
														: ""
												} cursor-pointer text-[#222] text-3xl sm:text-4xl font-roc font-medium pb-4 md:pb-8`}>
												{service}
											</h2>
										);
									})}
								</div>
								<div className="grid md:place-items-center md:grid-cols-1 lg:grid-cols-custom gap-4 md:gap-8 lg:-mt-72">
									<div>
										<div className="text-center lg:hidden">
											{serviceNavs.map((service, index) => {
												return (
													<h2
														onClick={() => handleServiceNav(index)}
														key={index}
														className={`${
															index === serviceNav
																? "gradients opacity-100"
																: index !== serviceNav
																? "opacity-50"
																: ""
														}
														cursor-pointer text-[#222] text-3xl sm:text-4xl font-roc font-medium pb-4 md:pb-8 opacity-50`}>
														{service}
													</h2>
												);
											})}
										</div>
									</div>

									<div ref={servicesRef}>
										{servicesCardData[servicesData].name.map((card, i) => {
											return (
												<ServicesCard
													key={i}
													title={card?.title}
													caption={card?.caption}
													text={card?.text}
												/>
											);
										})}
									</div>
								</div>
							</div>

							<div className="py-6 px-4  sm:py-8 lg:py-20 text-center border-t-[1px] border-card">
								<div className="flex pb-6 justify-center">
									<Image
										src=""
										width={20}
										height={20}
										alt="icon"
										className=""
									/>
									<p className="ml-2 text-lg font-medium caption-text">
										Who you’re working with
									</p>
								</div>
								<div className="pt-2 pb-6 sm:pb-10 lg:pb-20 lg:text-6xl text-4xl">
									<h2 className="gray-secondary font-roc font-medium">
										A curated collective of
									</h2>
									<h2 className="gradients font-roc font-medium">
										developers
									</h2>
								</div>

								<div className=" sm:px-20 lg:px-32">
									<h3 className="gray-secondary lg:text-5xl text-3xl font-roc font-extrabold text-start pb-6 md:pb-8">
										Exceptional work is the baseline, doing what we love is the
										mission.
									</h3>
									<div className="w-full hover-trigger">
										<div className="hover-state-indicator hover-line"></div>
										<div className="p-4 border-[1px] border-[#3B3B40] rounded-xl">
											<div className="overflow-hidden w-full pb-2 ">
												<div className="py-2 scroll-animate gap-4">
													{[1, 2, 3, 4, 5, 6, 7].map((e, index) => {
														return (
															<div
																key={index}
																className="bg-border rounded-full w-full p-1">
																<Button
																	type="button"
																	circle={true}
																	className="bg-[#0c0228] rounded-full text-[#c2bad9] w-64 p-2"
																	noArrow={true}>
																	Brand Strategy
																</Button>
															</div>
														);
													})}
												</div>
											</div>
											<div className="overflow-hidden w-full pb-4">
												<div className="py-2 scroll-animate-right gap-6">
													{[1, 2, 3, 4, 5, 6, 7].map((e, index) => {
														return (
															<div
																key={index}
																className="bg-border rounded-full w-full p-1">
																<Button
																	type="button"
																	circle={true}
																	className="bg-[#0c0228] rounded-full text-[#c2bad9] w-64 p-2"
																	noArrow={true}>
																	Brand Strategy
																</Button>
															</div>
														);
													})}
												</div>
											</div>
											<div className="text-start lg:text-center">
												<h3 className="text-stone-300 lg:text-gray-300 lg:text-4xl text-xl font-semibold pb-3 lg:pb-4">
													The right talent, in the right place, at the right time.
												</h3>
												<div className=" text-base lg:text-xl font-medium pb-3 lg:pb-4 text-[#c2bad9]">
													Jords+Co are a remarkable and meticulously curated
													remote team located in the UK, Europe and the US
													comprising of experts in their respective domains.
												</div>
												<div className=" text-base lg:text-xl font-medium pb-3 lg:pb-4 text-[#c2bad9]">
													Your dedicated team is carefully chosen for your
													project, ensuring a perfect match for its unique
													requirements.
												</div>
												<div className=" text-base lg:text-xl font-medium pb-3 lg:pb-4 text-[#c2bad9]">
													Our approach of handpicking individuals with specialised
													skills, aligned interests, and exceptional suitability
													unlocks unparalleled outcomes
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="lg:w-10/12 px-4 py-20 lg:p-40 grid md:grid-cols-custom2 gap-6 mx-auto">
								<div className="">
									<div className="grid pb-6 justify-center">
										<Image
											src=""
											width={20}
											height={20}
											alt="icon"
											className="pb-2"
										/>
										<p className="text-sm font-medium caption-text pb-4">
											Values
										</p>
										<p className="text-4xl font-medium text-white pb-4 md:pb-10 font-roc">
											Why work <br className="hidden lg:flex" /> with us
										</p>
										<div className="w-96 p-4 text-center">
											<GradientButton>Contact Us</GradientButton>
										</div>
									</div>
								</div>
								<div className="grid place-items-center sm:grid-cols-2 gap-4 md:gap-6">
									<WorkWithUsCard />
									<WorkWithUsCard />
									<WorkWithUsCard />
									<WorkWithUsCard />
								</div>
							</div>

							<div className="p-10 lg:p-20 bg-[#f4f1eb] min-h-screen">
								<div className="w-full lg:w-2/3 pb-6 lg:pb-20">
									<TitleContent
										GradientTitle={true}
										caption="Who we work with"
										title="Who for?"
										text="We collaborate with funded startups, established businesses, enterprise companies, and agencies to provide tailored design and development solutions. Our expertise enhances your brand presence, drives growth, and fosters long-term success in your respective industries."
										iconWidth={40}
										iconHeight={40}
										iconColor="blue"
									/>
								</div>
								<div className="bg-[rgba(255,255,255,.4)] border border-[rgba(255,255,255,.8)] p-8 md:p-16 rounded-lg grid md:grid-cols-2 lg:gap-10 gap-y-12">
									<TitleContent
										GradientTitle={true}
										noIcon={true}
										title="Funded startups"
										text="Empower your startup's vision with our innovative design. We collaborate with ambitious founders like you to establish a strong brand presence and accelerate growth, bringing your ideas to life."
									/>
									<TitleContent
										GradientTitle={true}
										noIcon={true}
										title="Funded startups"
										text="Empower your startup's vision with our innovative design. We collaborate with ambitious founders like you to establish a strong brand presence and accelerate growth, bringing your ideas to life."
									/>
									<TitleContent
										GradientTitle={true}
										noIcon={true}
										title="Funded startups"
										text="Empower your startup's vision with our innovative design. We collaborate with ambitious founders like you to establish a strong brand presence and accelerate growth, bringing your ideas to life."
									/>
									<TitleContent
										GradientTitle={true}
										noIcon={true}
										title="Funded startups"
										text="Empower your startup's vision with our innovative design. We collaborate with ambitious founders like you to establish a strong brand presence and accelerate growth, bringing your ideas to life."
									/>
								</div>
							</div>
							<div className="bg-[#f4f1eb]">
								<div className="overflow-hidden w-full pb-2">
									<div className="py-2 scroll-animate gap-4">
										{devSkills.map((skill, index) => {
											return (
												<div
													key={index}
													className="bg-border rounded-full w-full p-[1px]">
													<Button
														type="button"
														className="bg-[#f4f1eb] rounded-full text-black font-semibold w-64 p-2"
														noArrow={true}>
														{skill}
													</Button>
												</div>
											);
										})}
									</div>
								</div>
							</div>

							<div className="bg-[#f4f1eb] px-10 md:px-20 py-32 min-h-screen">
								<TitleContent
									GradientTitle={true}
									caption="What people say"
									textClass="text-white/60 text-xl"
									title="Client reviews"
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									iconHeight={24}
									iconWidth={24}
								/>

								<div className="">
									<Slider {...settings}>
										{ClientReviewsData.map((data, index) => {
											return (
												<div
													key={index}
													className="transition-all ease-in-out duration-1000 transform p-6">
													<ClientReviewCard
														name={data.name}
														text={data.text}
														designation={data.designation}
													/>
												</div>
											);
										})}
									</Slider>
								</div>
							</div>

							<div className="p-10 md:p-20 bg-black relative min-h-screen">
								<div className="bg-radial w-full h-full absolute top-10 left-0 right-0 bottom-0 transform -z-0"></div>
								<div className="z-40 relative text-center pb-10 md:pb-20 w-full">
									<TitleContent
										GradientTitle={true}
										caption="Frequently asked questions"
										title="FAQs"
										text="Our commitment to transparency"
										headingClass="text-white"
										textClass="text-white/60"
										iconClass="justify-center"
									/>
								</div>
								<div className="max-w-3xl m-auto">
									<div className="z-40 relative flex justify-center overflow-hidden no-scrollbar">
										<ul className="w-screen justify-items-start self-auto ml-[-5vw] pl-[5vw] pr-[5vw] flex overflow-auto gap-10">
											{faqNavList?.map((faq, index) => {
												return (
													<li
														onClick={() => handleFaqClick(index)}
														className={`${
															index === faqNavOn &&
															"trasition-all border-[1px] border-card rounded-lg gradients px-2 sm:px-4 py-1"
														} text-base sm:text-lg text-white cursor-pointer w-full whitespace-nowrap text-center`}
														key={index}>
														{faq}
													</li>
												);
											})}
										</ul>
									</div>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 0.6 }}
										className="z-40 relative pt-20">
										{faqCardData[faqDataState]?.name?.map((faq, index) => {
											return (
												<li
													className={`${index === faqNavOn &&
														"border-[1px] border-card rounded-lg gradients px-4 py-1"
														} text-lg text-white/80 cursor-pointer`}
													key={index}>
													<FaqCard
														question={faq.question}
														answer={faq.answer}
													/>
												</div>
											);
										})}
									</motion.div>
								</div>
								<div className="py-10 z-40 relative md:py-20 w-full flex justify-center text-center">
									<div>
										<TitleContent
											GradientTitle={true}
											noIcon={true}
											headingClass="text-white lg:text-4xl"
											textClass="text-white/60 pb-6"
											title="Still have questions?"
											text="We're here to help. Contact us directly, and our team will provide you with the personalised support you need."
										/>
										<GradientButton>Contact</GradientButton>
									</div>
								</div>
							</div>

							<div className="min-h-screen text-center z-40 relative p-6 sm:p-0 bg-primary">
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
									className="border-[1px] rounded-full py-4 px-8 border-borderBlue text-white hover:bg-btnBg hover:text-white"
									type="button">
									See our tech stack
								</Button>
							</div>

							<div className="text-center pb-32 p-6 sm:p-0 bg-primary">
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
									className="border-[1px] rounded-full py-4 px-8 border-borderBlue text-white hover:bg-btnBg hover:text-white"
									type="button">
									See our services
								</Button>
							</div>
						</motion.section>

						<motion.section className="relative mt-[-60vh] h-[180vh] z-0 bg-primary">
							<div className="mb-[-120vh] h-[320vh] w-full text-white bg-primary">
								<div className="absolute top-[60%] sm:top-[40%] md:top-[50%] lg:top-[60%] transform bg-radial h-full w-full"></div>
								<div className="grid place-items-center sticky top-[25vh]">
									<div
										ref={scrollContactRef}
										className="min-h-screen transition-all px-6 lg:px-10">
										<ContactForm />
									</div>
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
