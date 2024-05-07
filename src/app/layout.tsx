import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

const inter = Inter({
	weight: ["400", "600"],
	subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className={inter.className}>
			<body className="bg-zinc-800 text-zinc-50 tracking-wide">{children}</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: "Spotify UI",
};
