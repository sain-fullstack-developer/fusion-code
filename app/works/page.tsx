"use client";

import React, { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	MotionValue,
} from "framer-motion";
import Image from "next/image";

type Props = {};

const Works = (props: Props) => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const extendedRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end end"],
	});
	const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
		target: extendedRef,
		offset: ["start end", "end end"],
	});

	const scale = useTransform(
		scrollYProgressIncludingOverlap,
		[0.1, 0.4, 0.75, 1],
		[1, 2.5, 4.2, 1]
	);

	const y = useTransform(
		scrollYProgressIncludingOverlap,
		[0.75, 1],
		["0vh", "40vh"]
	);

	return (
		<div className="w-full bg-black">
			<section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
				<div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
					<div className="sticky top-[50vh]">
						<motion.div style={{ y }} className="">
							<h1 className="text-white text-center">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
								quisquam odio tenetur voluptatibus. Alias quidem voluptatem
								excepturi a illum aut nam. Repellendus, quia quam dolorem vero
								molestias eum sequi saepe.
							</h1>
						</motion.div>
					</div>
				</div>
			</section>
			<section className="bg-green-400 h-screen">
				<h1 className="text-2xl grid place-items-center bg-green text-white text-center">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
					obcaecati. Rerum nobis voluptas cum nihil maxime perferendis saepe ex
					consectetur? Magnam voluptatibus et iure in id ullam, temporibus
					doloribus fugiat.
				</h1>
			</section>
		</div>
	);
};

export default Works;
