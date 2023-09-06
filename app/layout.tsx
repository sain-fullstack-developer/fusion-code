"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
	title: "Fusion Code",
	description: "Assignment Animated Landing page",
};

const rocGrotesk = localFont({
	src: [
		{
			path: "../public/fonts/rocgrotesk-medium.otf",
			weight: "500",
		},
		{
			path: "../public/fonts/rocgrotesk-regular.otf",
			weight: "400",
		},
	],
	variable: "--font-rocgrotesk",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${rocGrotesk.variable} fontsans`}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
