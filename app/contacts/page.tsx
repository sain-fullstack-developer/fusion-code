"use client";
import Header from "@/components/Header";
import React from "react";

type Props = {};

const Contacts = (props: Props) => {
	return (
		<>
		<Header/>
		<div className="bg-primary h-screen grid place-items-center">
			<h1 className="text-9xl text-white font-roc">Contacts Page</h1>
		</div>
		</>
	);
};

export default Contacts;
