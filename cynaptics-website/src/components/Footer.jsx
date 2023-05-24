"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {AiFillYoutube} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import Logo from '../../public/images/Logos/Logo.jpg'
export default function Footer() {
	const pathname = usePathname()
	return (
		<footer className={`${(pathname=="/EventsPage" || pathname=="/PongGamePage")?"fixed bottom-0":""}text-white body-font  shadow-[3px_3px_30px_3px] w-screen 
		shadow-blue-600 border-black bg-black bottom-0  ${pathname==="/PongGamePage"?"opacity-20 hover:opacity-100 transition-all fade-in-out":""} `}>
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<div className="flex title-font font-medium items-center md:justify-start !w-10 
				!h-10 justify-center text-gray-600">
				<Image className="rounded-full " src={Logo} width={500} height={500} placeholder="blur" alt="Loading..." />
				</div>
				<p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
					© 2023 The Cynaptics Club —
					
						@IITI
					
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<Link href="https://www.youtube.com/@cynapticsiit9083 " target={"_blank"}  className="text-white">
						<AiFillYoutube className="w-5 h-5"/>
					</Link>
					<Link href="https://discord.gg/KMV539QtTJ" target={"_blank"} className="ml-3 text-white">
						<BsDiscord className="w-5 h-5"/>
					</Link>
					<Link href="https://www.instagram.com/cynapticsclubiiti/" target={"_blank"} className="ml-3 text-white">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</Link>
					<Link href="https://www.linkedin.com/company/cynaptics-club-iit-indore/mycompany/" target={"_blank"} className="ml-3 text-white">
						<svg
							fill="currentColor"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="0"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</Link>
				</span>
			</div>
		</footer>
	);
}
