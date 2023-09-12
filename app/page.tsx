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
import {
	motion,
	Variants,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from "framer-motion";
import InitialPage from "@/components/Loading";
import TitleContent from "@/components/TitleContent";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ServicesCard from "@/components/ServicesCard";
import GradientButton from "@/components/GradientButton";
import WorkWithUsCard from "@/components/WorkWithUsCard";
import ClientReviewCard from "@/components/ClientReviewCard";
import FaqCard from "@/components/FaqCard";
import TitleIcon from "@/elements/TitleIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
	const [isSecondDivVisible, setIsSecondDivVisible] = useState(true);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [hue, setHue] = useState(0);
	const targetRef = useRef(null);
	const extendedRef = useRef(null);
	const scrollContactRef: any = useRef(null);
	const servicesRef = useRef(null);
	const servicesBlockRef = useRef(null);
	const workWithBlockRef = useRef(null);
	const clientBlockRef = useRef(null);
	const faqCardRef = useRef(null);

	const serviceSectionView = useInView(servicesBlockRef);
	const workWithSectionView = useInView(servicesBlockRef);
	const clientReviewSectionView = useInView(clientBlockRef);

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
		const interval = setInterval(generateRandomHue, 5000);
		return () => clearInterval(interval);
	}, []);

	const onScrollToContactsEl: any = async () => {
		console.log(scrollContactRef);
		if (scrollContactRef?.current) {
			scrollContactRef?.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleFaqClick = (index: number) => {
		setFaqNavOn(index);
		setFaqDataState(index);
		setIsSecondDivVisible(false);
		setTimeout(() => {
			setIsSecondDivVisible(true);
		}, 300);
	};

	useEffect(() => {
		setTimeout(() => {
			setDataLoaded(true);
		}, 1000);
	}, []);

	const handleServiceNav = (index: number) => {
		setServiceNav(index);
		setServicesData(index);
		setIsSecondDivVisible(false);
		setTimeout(() => {
			setIsSecondDivVisible(true);
		}, 300);
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
		const timer = setTimeout(() => {
			if (currentIndex < curativeHeads.length - 1) {
				setCurrentIndex(currentIndex + 1);
			} else {
				setCurrentIndex(0);
			}
		}, 2000);

		return () => clearTimeout(timer);
	}, [currentIndex]);

	const servicesParentVariant: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
			},
		},
	};
	const servicesChildVariant: Variants = {
		hidden: {
			y: 100,
		},
		visible: {
			y: 0,
		},
	};

	return (
		<>
			{isLoading && <InitialPage />}
			{!isLoading && (
				<>
					<div className="z-50">
						<Header
							scrollBg={
								serviceSectionView ||
									workWithSectionView ||
									clientReviewSectionView
									? true
									: false
							}
							scrollContacts={onScrollToContactsEl}
						/>
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

						<motion.section className={`z-20 relative pb-40 bg-primary overflow-x-hidden`}>
							<div className=" z-0 w-full object-cover justify-center align-center flex absolute transform opacity-60 lg:opacity-40">
								<svg
									width="1200"
									height="297"
									viewBox="0 0 1200 297"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g opacity="0.4" filter="url(#filter0_f_553_3892)">
										<ellipse
											cx="600"
											cy="148.073"
											rx="488"
											ry="36"
											fill="#3B00FF"></ellipse>
									</g>
									<defs>
										<filter
											id="filter0_f_553_3892"
											x="0"
											y="0.0732422"
											width="1200"
											height="296"
											filterUnits="userSpaceOnUse"
											color-interpolation-filters="sRGB">
											<feFlood
												flood-opacity="0"
												result="BackgroundImageFix"></feFlood>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"></feBlend>
											<feGaussianBlur
												stdDeviation="56"
												result="effect1_foregroundBlur_553_3892"></feGaussianBlur>
										</filter>
									</defs>
								</svg>
							</div>
							<div className="pt-20 pb-10 text-center mb-12 bg-primary">
								<TitleContent
									GradientTitle={true}
									caption="Trusted by"
									headingClass="text-white text-3xl sm:text-6xl"
									textClass="text-white/60 text-text"
									title="Recent clients"
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
									iconWidth={24}
									iconHeight={24}
									iconClass="justify-center"
								/>
								<div className="overflow-hidden w-full pt-20">
									<motion.div className="flex px-6 sm:px-12">
										<Swiper
											autoplay={{
												disableOnInteraction: false,
												pauseOnMouseEnter: false,
												delay: 0,
											}}
											speed={3000}
											spaceBetween={50}
											loop={true}
											allowTouchMove={false}
											breakpoints={{
												320: {
													slidesPerView: 2,
												},
												768: {
													slidesPerView: 3,
												},
												1024: {
													slidesPerView: 6,
												},
											}}
											modules={[Autoplay]}
											className="mySwiper">
											{cardData.map((card, index) => {
												return (
													<SwiperSlide key={index}>
														<Image
															src={card.logo}
															width={140}
															height={140}
															alt={`client-${index}`}
														/>
													</SwiperSlide>
												);
											})}
										</Swiper>
									</motion.div>
								</div>
							</div>

							<motion.div
								initial={{ y: 100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ type: "spring", stiffness: 30 }}
								className="p-4 sm:p-12 my-10 sm:my-20 relative">
								<div className="absolute bg-radial h-full w-1/2 transform top-0"></div>
								<div className="w-full p-[1px] rounded-lg  relative hover-trigger">
									<div className="hover-state-indicator hover-line"></div>
									<div className="bg-black shadow-card border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl p-4 lg:p-16 text-content text-base z-10">
										<div className="text-center">
											<h2 className="gray-text text-2xl font-roc mb-6 font-medium">
												No fluff, no long processes, no bloated teams...
											</h2>
											<h2 className="gray-secondary text-2xl md:text-6xl font-roc font-medium mb-2">
												Streamlined design and development.
											</h2>
											<h2 className="gray-secondary text-2xl md:text-6xl font-roc font-medium">
												Swift and remarkable results.
											</h2>
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								ref={servicesBlockRef}
								variants={servicesParentVariant}
								initial="hidden"
								animate="visible"
								className="bg-image w-full relative lg:p-40 py-12 px-4 min-h-screen">
								<div className="text-center w-full max-w-[54rem] m-auto pb-20 lg:pb-32">
									<div className="flex pb-6 justify-center">
										<TitleIcon width={24} height={24} color="blue" />
										<p className="ml-2 text-lg font-semibold caption-text">
											What we do
										</p>
									</div>
									<motion.h2 className="font-roc text-4xl text-[#0c0228] sm:text-5xl md:text-[3.5rem] md:leading-tight font-medium text-content pb-4 md:pb-8">
										Choose all the service &nbsp;
										<motion.span
											style={{
												backgroundColor: `hsla(${hue}, 100%, 50%, 0.1)`,
											}}
											className="bg-textBg duration-1000 ease-in-out py-2 border-2 border-r-blue-600 border-l-blue-600">
											<motion.span
												variants={servicesChildVariant}
												initial="hidden"
												whileInView="visible">
												blocks
											</motion.span>
										</motion.span>
										<br />
										or just the ones you need...
									</motion.h2>
									<p className="text-base sm:text-lg">
										Tailored services <strong>without the agency fluff:</strong>
										discovery, strategy, branding, website and product design,
										Webflow development, and training, all in one comprehensive
										suite.
									</p>
								</div>

								<div className="hidden lg:block lg:sticky lg:top-52 w-fit">
									{serviceNavs.map((service, index) => {
										return (
											<h2
												onClick={() => handleServiceNav(index)}
												key={index}
												className={`${index === serviceNav
													? "bg-gradient-to-r from-[#6000FF] via-pink-500 to-fuchsia-500 text-transparent bg-clip-text"
													: index !== serviceNav
														? "opacity-50"
														: ""
													} cursor-pointer text-[#222] text-3xl sm:text-4xl font-roc font-medium pb-4 md:pb-8 `}>
												{service}
											</h2>
										);
									})}
								</div>
								<div className="grid md:place-items-center md:grid-cols-1 lg:grid-cols-custom gap-4 md:gap-8 lg:-mt-80">
									<div>
										<div className="text-center lg:hidden">
											{serviceNavs.map((service, index) => {
												return (
													<h2
														onClick={() => handleServiceNav(index)}
														key={index}
														className={`${index === serviceNav
															? "gradients opacity-100"
															: index !== serviceNav
																? "opacity-50"
																: ""
															}
														cursor-pointer text-[#222] text-3xl sm:text-4xl font-roc font-medium pb-4 md:pb-8 opacity-100`}>
														{service}
													</h2>
												);
											})}
										</div>
									</div>

									{dataLoaded && (
										<div ref={servicesRef}>
											<div
												className={`${isSecondDivVisible ? "opacity-100" : "opacity-0"
													} transition-opacity duration-500 ease-in-out z-40 relative pt-20`}>
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
									)}
								</div>
							</motion.div>

							<div className="px-4 sm:px-0 py-20 text-center border-t-[1px] border-card relative z-10">
								<div className="absolute bg-radial h-full w-full transform left-0 top-0 -z-10"></div>
								<div className="flex pb-6 justify-center">
									<TitleIcon width={24} height={24} color="blue" />
									<p className="ml-2 text-lg font-medium caption-text">
										Who you’re working with
									</p>
								</div>
								<div className="pt-2 pb-6 sm:pb-10 lg:pb-20">
									<h2 className="gray-secondary text-4xl md:text-6xl font-roc font-medium">
										A curated collective of
									</h2>
									<motion.h2 className="gradients text-4xl md:text-6xl font-roc font-medium animate-curative-text">
										{curativeHeads[currentIndex]}
									</motion.h2>
								</div>

								<div className="px-4 sm:px-20 lg:px-32">
									<h3 className="font-roc text-left gray-secondary text-4xl md:text-6xl  font-medium pb-6 md:pb-8 lg:text-left">
										Exceptional work is the baseline, doing what we love is the
										mission.
									</h3>
									<div className=" hover-trigger">
										<div className="hover-state-indicator hover-line"></div>
										<div className="border-[1px] rounded-xl p-4 border-[rgba(255,255,255,.1)]">
											<div className="overflow-hidden w-full pb-2">
												<div className="py-2 scroll-animate gap-4">
													{[1, 2, 3, 4, 5, 6, 7].map((e, index) => {
														return (
															<div
																key={index}
																className="bg-border rounded-full w-full p-[1px]">
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
																className="bg-border rounded-full w-full p-[1px]">
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
											<div className="text-left">
												<h3 className="gray-secondary font-roc text-2xl font-semibold pb-4">
													The right talent, in the right place, at the right time.
												</h3>
												<div className="gray-secondary text-base sm:text-lg pb-4">
													Jords+Co are a remarkable and meticulously curated
													remote team located in the UK, Europe and the US
													comprising of experts in their respective domains.
												</div>
												<div className="gray-secondary text-lg pb-4">
													Your dedicated team is carefully chosen for your
													project, ensuring a perfect match for its unique
													requirements.
												</div>
												<div className="gray-secondary text-lg pb-4">
													Our approach of handpicking individuals with specialised
													skills, aligned interests, and exceptional suitability
													unlocks unparalleled outcomes
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="min-h-screen bg-black py-10 lg:p-48 grid md:grid-cols-custom gap-6 relative z-10">
								<div className="absolute bg-radial h-full w-full transform top-0 -z-10"></div>
								<div className="m-4">
									<TitleContent
										GradientTitle={true}
										title="Why work with us"
										iconHeight={24}
										iconWidth={24}
										caption="Values"
										headingClass="text-white"
									/>
									<GradientButton>Contact us</GradientButton>
								</div>
								<div className="grid place-items-center sm:place-items-stretch sm:grid-cols-2 gap-8 md:gap-6">
									<WorkWithUsCard />
									<WorkWithUsCard />
									<WorkWithUsCard />
									<WorkWithUsCard />d
								</div>
							</div>

							<div
								className="p-10 lg:px-64 lg:pt-40 bg-image bg-[#f4f1eb] min-h-screen"
								ref={workWithBlockRef}>
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
								<div className="bg-[#f4f1eb] border-2 border-[rgba(255,255,255,.8)] p-8 md:p-16 rounded-2xl grid md:grid-cols-2 lg:gap-10 gap-y-12">
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
							<div className="bg-[#f4f1eb] bg-image">
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

							<div
								ref={clientBlockRef}
								className="bg-[#f4f1eb] bg-image px-10 md:px-20 py-32 lg:px-64 lg:py-40 min-h-screen">
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
													className="transition-all ease-in-out duration-1000 transform py-6">
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
									<div className="z-40 relative flex justify-center overflow-hidden">
										<ul className="w-11/12 justify-items-start self-auto flex items-center overflow-auto gap-10">
											{faqNavList?.map((faq, index) => {
												return (
													<li
														onClick={() => handleFaqClick(index)}
														className={`${index === faqNavOn &&
															" border-[1px] border-[#3B3B40] rounded-lg gradients px-2 lg:px-0 py-2"
															} text-base text-white cursor-pointer w-full whitespace-nowrap text-center`}
														key={index}>
														{faq}
													</li>
												);
											})}
										</ul>
									</div>
									<AnimatePresence>
										{dataLoaded && (
											<motion.ul
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 0.6 }}
												className={`${isSecondDivVisible ? "opacity-100" : "faqcard-animate"
													} transition-all z-40 relative pt-20 list-none`}>
												{faqCardData[faqDataState]?.name?.map((faq, index) => {
													return (
														<motion.li
															initial={{ opacity: 0 }}
															animate={{ opacity: 1 }}
															transition={{ duration: 4 }}
															ref={faqCardRef}
															className={`text-lg text-white/80 cursor-pointer transition-all ease-linear`}
															key={index}>
															<FaqCard
																key={index}
																question={faq.question}
																answer={faq.answer}
															/>
														</motion.li>
													);
												})}
											</motion.ul>
										)}
									</AnimatePresence>
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

							<div className="text-center z-40 relative p-6 sm:p-0 bg-primary">
								<div className="absolute bg-radial h-full w-full transform left-0 sm:left-auto top-0 -z-10"></div>
								<TitleContent
									headingClass="text-white text-4xl sm:text-6xl"
									textClass="text-white/60 text-xl mb-20"
									title="Software for modern platforms"
									text="We develop applications for mobile, web, wearables, and TV."
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 30 }}
								/>
								<div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mb-12 lg:mb-28">
									{platformData.map((card, index) => {
										return (
											<IconTitle
												textColor={true}
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
							</div>

							<div className="text-center pb-32 p-6 sm:p-0 bg-primary relative overflow-x-hidden">
								<div className="z-0 w-full object-cover justify-center align-center flex absolute transform opacity-40 -top-10">
									<svg
										width="1200"
										height="297"
										viewBox="0 0 1200 297"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<g opacity="0.4" filter="url(#filter0_f_553_3892)">
											<ellipse
												cx="600"
												cy="148.073"
												rx="488"
												ry="36"
												fill="#3B00FF"></ellipse>
										</g>
										<defs>
											<filter
												id="filter0_f_553_3892"
												x="0"
												y="0.0732422"
												width="1200"
												height="296"
												filterUnits="userSpaceOnUse"
												color-interpolation-filters="sRGB">
												<feFlood
													flood-opacity="0"
													result="BackgroundImageFix"></feFlood>
												<feBlend
													mode="normal"
													in="SourceGraphic"
													in2="BackgroundImageFix"
													result="shape"></feBlend>
												<feGaussianBlur
													stdDeviation="56"
													result="effect1_foregroundBlur_553_3892"></feGaussianBlur>
											</filter>
										</defs>
									</svg>
								</div>

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

								<div className="grid gap-6 gap-y-28 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16 relative z-30">
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
							</div>
						</motion.section>
						<motion.section className="relative mt-[-60vh] h-[180vh] z-0 bg-primary">
							<div className="mb-[-120vh] h-[320vh] w-full text-white bg-primary">
								<div className="absolute top-[60%] sm:top-[40%] md:top-[50%] lg:top-[60%] transform bg-radial h-full w-full"></div>
								<div className="grid place-items-center sticky top-[25vh] lg:top-[10vh]">
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
