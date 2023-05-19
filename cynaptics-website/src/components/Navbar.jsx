"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logos/Logo.jpg";
import { usePathname } from "next/navigation";
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";
import Modal from 'react-modal';
import OffCanvasNavbar from "./OffCanvasNavbar";
import { useEffect, useRef } from "react";
import PongGame from '../app/PongGamePage/page'
import useWindowSize from "@rooks/use-window-size";
export default function Navbar() {
	const {innerWidth} = useWindowSize()
	const customStyles = {
		overlay: {
			position: "fixed",
			zIndex: 1020,
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			background: "rgba(0, 0, 0, 0.75)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		  },
	};
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const pathname = usePathname();
	const ref = useRef(null);
	
	useEffect(() => {
		if(pathname=="/PongGamePage" || pathname=='/PongGameMobile'){
			setIsOpen(false)
		}
		else{
			setTimeout(() => {
				setIsOpen(true)
			}, 5000);
		}
		
		
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
	console.log(pathname)
	const OpenOffCanvas = () => {
		if (document.getElementById("offcanvas").offsetLeft === -1000) {
			document.querySelector("#offcanvas").classList.add("smenu");
		} else {
			document.querySelector("#offcanvas").classList.remove("smenu");
		}
	};
	
	
	return (
		<>
			<div id="Navbar_body" className="flex shadow-[3px_3px_30px_3px] rounded-b-md shadow-blue-600 justify-between p-2 bg-black w-screen">
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
						{innerWidth<700?(
							<li
							className={`mx-10 ${
								pathname === "/PongGameMobile"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/PongGameMobile">Game</Link>
						</li>
						):(
							<li
							className={`mx-10 ${
								pathname === "/PongGamePage"
									? "border-2 -skew-x-12 bg-gray-200 text-black font-semibold"
									: "hover:border-t-2 border-gray-200  transition-all fade-in-out "
							}  p-2  max-w-[150px] text-center transition-all fade-in-out`}
						>
							<Link href="/PongGamePage">Game</Link>
						</li>
						)}
						
					</ul>
				</div>
				<button
					onClick={OpenOffCanvas}
					id="offcanvasbtn"
					className="my-auto lg:hidden"
				>
					<HiBarsArrowDown className="my-auto mx-auto w-9 h-9 mr-2" />
				</button>
			</div>
			<Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>{
			setIsOpen(false)
		}}
		style={customStyles}
        
        
      >
		<div className="w-full flex justify-center">
		<Link onClick={()=>{
			setIsOpen(false)
		}}  className="border-2 border-black bg-blue-600  text-white font-bold mx-auto p-2 rounded-md" href={innerWidth<700?`/PongGameMobile`:"/PongGamePage"}>Hey Woud You Like To Play A Game , Then Click On Me</Link></div>
	  </Modal>
			<div ref={ref} className="lg:hidden overflow-hidden text-white">
				<OffCanvasNavbar />
			</div>
		</>
	);
}
