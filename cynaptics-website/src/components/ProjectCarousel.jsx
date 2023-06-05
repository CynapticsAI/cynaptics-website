"use client";
import { Projects } from "@/app/ProjectsPage/Projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const ProjectCarousel = () => {
	const [startX, setStartX] = useState(null);
	const [endX, setEndX] = useState(null);
	const carouselRef = useRef(null);

	useEffect(() => {
		const body = document.querySelector("body");
		let count = document.getElementsByClassName("layer");
		let grid = document.getElementById("grid");

		/*
		  Events
		*/
		const handleMouseWheel = (e) => {
			count[0].removeAttribute("on");
			count[0].removeAttribute("open");
			changeLayer(e);
		};

		const handleMouseMove = () => {
			count[0].setAttribute("on", true);
		};

		const handleMouseLeave = () => {
			count[0].removeAttribute("on");
			count[0].removeAttribute("open");
		};

		const handleTouchStart = (e) => {
			const touch = e.touches[0];
			setStartX(touch.clientX);
		};

		const handleTouchEnd = () => {
			if (startX !== null && endX !== null) {
				handleSwipe();
				setStartX(null);
				setEndX(null);
			}
		};

		const handleTouchMove = (e) => {
			const touch = e.touches[0];
			setEndX(touch.clientX);
		};



		const handleSwipe = () => {
			const distance = endX - startX;
			if (distance > 0) {
				// Swipe right
				if (count.length > 1) {
					const lastCard = count[count.length - 1];
					lastCard.style.transform = 'translateX(100%)';
					lastCard.style.transition = 'transform 0.5s ease';

					setTimeout(() => {
						lastCard.style.transform = '';
						grid.insertBefore(lastCard, count[0]);
						lastCard.style.transition = '';
					}, 500);
				}
			} else if (distance < 0) {
				// Swipe left
				if (count.length > 1) {
					const firstCard = count[0];
					firstCard.style.transform = 'translateX(-100%)';
					firstCard.style.transition = 'transform 0.5s ease';

					setTimeout(() => {
						firstCard.style.transform = '';
						grid.appendChild(firstCard);
						firstCard.style.transition = '';
					}, 500);
				}
			}
		};

		grid.addEventListener("mousewheel", handleMouseWheel);
		grid.addEventListener("mousemove", handleMouseMove);
		grid.addEventListener("mouseleave", handleMouseLeave);
		grid.addEventListener("touchstart", handleTouchStart);
		grid.addEventListener("touchmove", handleTouchMove);
		grid.addEventListener("touchend", handleTouchEnd);

		/*
		  Change layer index
		*/
		function changeLayer(e) {
			count[0].removeAttribute("on");
			grid.appendChild(count[0]);
		}
	}, []);

	return (
		<div className="!w-full !min-h-[550px] flex justify-center items-center my-auto !text-black">
			
				<div className="hidden lg:flex w-full h-full  justify-center">
					<div id="grid" className="lg:flex justify-center ">
						{Projects.map((ele) => {
							return (
								<>


									<div
										key={ele.id}
										className="layer hidden lg:flex 
            flex-col lg:flex-row items-center my-auto !border-2 group !border-black break-words  !justify-center !lg:justify-start lg:!rounded-[40px] !rounded-[20px]"
									>
										<div className="w-[400px]">
											<Image
												className=" w-[200px] h-[200px] lg:w-[350px] lg:h-[300px] mx-auto rounded-xl  transition-all fade-in-out lg:ml-6"
												src={ele.display_image}
												alt={ele.project_title}
											/>
										</div>
										<div className=" font-bold lg:mx-10 lg:flex flex-row items-center  lg:my-auto   lg:w-[90%] lg:h-[100%] break-words ">
											<div className="pt-10 lg:pt-auto !text-center items-baseline justify-center lg:justify-start lg:!text-start pb-2   !break-all flex flex-wrap   text-wrap lg:text-5xl  text-xl mx-2">
												{ele.project_title}
											</div>
											<div className=" lg:p-2  lg:text-lg !text-md w-fit lg:fixed lg:translate-y-[125px]  h-fit mx-auto border-2 bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all fade-in-out text-white rounded-md p-4">
											<Link
                                    aria-label="The link of the Respective project"
                                    className="w-full flex justify-center text-center  "
                                    href={`/ProjectsPage/${
                                        ele.project_title
                                    } + ${ele.id.toString()}`}
                                >
												Know More
											</Link>
											</div>
										</div>
									</div>


									
								</>
							);
						})}
					</div>
				</div>
				<div className="lg:hidden w-full h-full  justify-center flex">
					<div id="grid" className="lg:flex justify-center !h-full">
						{Projects.map((ele) => {
							return (
								<>


									


									<div
										key={ele.id}
										className=" lg:hidden 
            flex-col lg:flex-row items-center !bg-white px-10 !border-2 group !border-black break-words  !justify-center  !rounded-[20px] py-10 my-10"
									>
										<div className="w-full">
											<Image
												className=" w-[200px] h-[200px] lg:w-[350px] lg:h-[300px] mx-auto rounded-xl  transition-all fade-in-out lg:ml-6"
												src={ele.display_image}
												alt={ele.project_title}
											/>
										</div>
										<div className=" font-bold lg:mx-10 lg:flex flex-row items-center  lg:my-auto   lg:w-[90%] lg:h-[100%] break-words ">
											<div className="pt-10 lg:pt-auto !text-center items-baseline justify-center lg:justify-start lg:!text-start pb-2   !break-all flex flex-wrap   text-wrap lg:text-5xl  text-xl mx-2">
												{ele.project_title}
											</div>
											<div className=" lg:p-2  lg:text-lg !text-md w-fit lg:fixed lg:translate-y-[125px]  h-fit mx-auto border-2 bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all fade-in-out text-white rounded-md p-4">
											<Link
                                    aria-label="The link of the Respective project"
                                    className="w-full flex justify-center text-center  "
                                    href={`/ProjectsPage/${
                                        ele.project_title
                                    } + ${ele.id.toString()}`}
                                >
												Know More
											</Link>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			
			<style jsx>
				{`
					#grid {
						width: 70%;
						height: 450px;
						position:relative;
						cursor: pointer;
					}

					.layer {
						position: absolute;
						width: 100%;
						height: 100%;
						left: 0%;
						background: #fff;
						border-radius: 5px;
						transition: 1s all ease;

						align-items: center;
					}

					.layer::after {
						content: attr(name);
						font-size: 1.5rem;

						font-weight: 500;
						transition: 1s all ease;
					}

					.layer::before {
						content: "";
						position: absolute;

						background-size: cover;
						width: 150px;
						height: 150px;
						border-radius: 250px;
						left: 2.5rem;
						transition: 2s all ease;
						transform-origin: center;
					}

					.layer[on="true"] {
						z-index: 999 !important;
						opacity: 1 !important;
						top: -2.5px !important;
						box-shadow: 0 0 200px #000000 50 !important;
						transform: scale(1.05) !important;
					}

					.layer[open="true"] {
						padding-top: 1rem;
						align-items: flex-start;
						transition: 0.5s all ease;
						box-shadow: 0 0 200px #000000 80 !important;
						animation: openLayer 0.0001s ease both;
					}

					.layer[open="true"]::before {
						width: 75px;
						height: 75px;
						left: unset;
					}

					.layer[open="true"]::after {
						font-size: 1rem;
						left: 5px;
						margin-left: 0rem;
						margin-top: 90px;
					}

					.layer:nth-child(1) {
						transition: 0.1s all ease;
						top: 10px;
						z-index: 3;
						width: 95%;
						left: 2.5%;
						opacity: 1;
						box-shadow: 0 1px 20px #000000 50;
					}

					.layer:nth-child(2) {
						transition: 0.2s all ease;
						top: 20px;
						z-index: 2;
						width: 90%;
						left: 5%;
						background: #b6b7bb;
					}

					.layer:nth-child(3) {
						transition: 0.3s all ease;
						top: 30px;
						z-index: 1;
						width: 85%;
						left: 7.5%;
						background: #616368;
					}

					.layer:nth-child(4) {
						transition: 0.4s all ease;
						top: 40px;
						z-index: 0;
						width: 80%;
						left: 10%;
						opacity: 0.75;
						background: #414348;
					}

					.layer:nth-child(5) {
						transition: 0.5s all ease;
						top: 50px;
						z-index: -1;
						width: 75%;
						left: 12.5%;
						opacity: 0;
					}

					.layer:nth-child(6) {
						transition: 0.6s all ease;
						top: 60px;
						z-index: -2;
						width: 70%;
						left: 15%;
						opacity: 0;
					}

					.layer:nth-child(7) {
						transition: 0.7s all ease;
						top: 70px;
						z-index: -3;
						width: 65%;
						left: 17.5%;
						opacity: 0;
					}

					.layer:nth-child(8) {
						transition: 0.8s all ease;
						top: 80px;
						z-index: -4;
						width: 60%;
						left: 20%;
						opacity: 0;
					}

					.layer:nth-child(9) {
						transition: 0.9s all ease;
						top: 90px;
						z-index: -5;
						width: 55%;
						left: 22.5%;
						opacity: 0;
					}

					.layer:nth-child(10) {
						transition: 1s all ease;
						top: 100px;
						z-index: -6;
						width: 50%;
						left: 25%;
						opacity: 0;
					}

					.layer:nth-child(11) {
						transition: 1.1s all ease;
						top: 110px;
						z-index: -7;
						width: 45%;
						left: 27.5%;
						opacity: 0;
					}

					.layer:nth-child(12) {
						transition: 1.2s all ease;
						top: 120px;
						z-index: -8;
						width: 40%;
						left: 30%;
						opacity: 0;
					}

					.layer:nth-child(13) {
						transition: 1.3s all ease;
						top: 130px;
						z-index: -9;
						width: 35%;
						left: 32.5%;
						opacity: 0;
					}

					.layer:nth-child(14) {
						transition: 1.4s all ease;
						top: 140px;
						z-index: -10;
						width: 30%;
						left: 35%;
						opacity: 0;
					}

					.layer:nth-child(15) {
						transition: 1.5s all ease;
						top: 150px;
						z-index: -11;
						width: 25%;
						left: 37.5%;
						opacity: 0;
					}

					@keyframes openLayer {
						from {
							top: inherit;
							width: inherit;
							height: inherit;
						}
						to {
							top: -50px;
							width: inherit;
							height: 400px;
						}
					}
				`}
			</style>
		</div>
	);
};

export default ProjectCarousel;
