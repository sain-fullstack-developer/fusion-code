"use client";

import Header from "@/components/Header";
import React from "react";

type Props = {};

const Services = (props: Props) => {
	const onScrollToContactsEl: any = async () => {};
	return (
		<>
			<Header scrollContacts={onScrollToContactsEl} />
			<div className="bg-primary h-screen grid place-items-center">
				<h1 className="text-9xl text-white font-roc">Services Page</h1>
			</div>
		</>
	);
};

export default Services;
