import Image from "next/image";
import React from "react";

type Props = {};

const FeedbackCard = (props: Props) => {
	return (
		<div className="grid place-items-center">
			<div className="text-center">
				<Image
					className="rounded-full mb-6 m-auto"
					src="/web.svg"
					width={133}
					height={133}
					alt="profile"
				/>
				<h3 className="text-2xl font-medium text-black/60 mb-2">John More</h3>
				<h3 className="text-2xl font-medium text-black/30 mb-8">Provakil</h3>
				<p className="text-base text-black leading-loose px-6">
					I am so glad to have found Fusion Code&apos;s, because each and every
					one in their team is phenomenal. They created a highly intuitive UI
					for LiveToday, and paid extreme attention to every detail of the app.
					Fusion Code&apos;s will be my go-to team for all things mobile.
				</p>
			</div>
		</div>
	);
};

export default FeedbackCard;
