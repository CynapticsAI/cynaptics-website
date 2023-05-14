"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.jpg";
import { usePathname } from "next/navigation";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";

import OffCanvasNavbar from "./OffCanvasNavbar";
import { useEffect, useRef } from "react";

export default function Navbar() {
	
	const pathname = usePathname()
	const ref = useRef(null);
	useEffect(() => {
		
		const handleClicKOutsideOffcanvas = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				document.querySelector("#offcanvas")?.classList.remove("smenu");
			}
		};
		document.addEventListener("click", handleClicKOutsideOffcanvas, true);
		return () => {
			document.removeEventListener("click", handleClicKOutsideOffcanvas, true);
		};
	}, []);

	const OpenOffCanvas = () => {
		
		if (document.getElementById('offcanvas').offsetLeft === -1000) {
			document.querySelector('#offcanvas').classList.add('smenu')
		}
		else {
			document.querySelector('#offcanvas').classList.remove('smenu')
		}
	};
	return (
		<>
			<div className="flex shadow-[10px_1px_20px_1px] rounded-b-md shadow-gray-400 justify-between p-2 bg-black">
				<div className="ml-2">
					<Image
						className="rounded-md"
						src={Logo}
						alt="Loading"
						width="70"
						height="70"
					/>
				</div>
				<div className="w-full items-center justify-center hidden lg:flex">
					<ul className="w-fit flex justify-center  my-auto items-center">
						<li
							className={`mx-10 ${
								pathname === "/"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/">Home</Link>
						</li>
						<li
							className={`mx-10 ${
								pathname === "/ProjectsPage"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/ProjectsPage">Projects</Link>
						</li>
						<li
							className={`mx-10 ${
								pathname === "/EventsPage"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/EventsPage">Events</Link>
						</li>
						<li
							className={`mx-10 ${
								pathname === "/OurTeamPage"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/OurTeamPage">Our Team</Link>
						</li>
						<li
							className={`mx-10 ${
								pathname === "/AboutUsPage"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/AboutUsPage">About Us</Link>
						</li>
					</ul>
				</div>
				<button onClick={OpenOffCanvas} id="offcanvasbtn" className="my-auto lg:hidden">
					<HiBarsArrowDown className="my-auto mx-auto w-9 h-9 mr-2" />
				</button>
			</div>
			<div ref={ref} className="lg:hidden overflow-hidden text-white">
				<OffCanvasNavbar />
			</div>
		</>
	);
}
