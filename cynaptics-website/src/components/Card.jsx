"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Fade from 'react-reveal/Fade';

export default function Card({ ele, index,className }) {
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	useEffect(() => {
		const buttons = document.querySelectorAll(`.card-buttons${index} button`);
		const sections = document.querySelectorAll(`.card-section${index}`);
		const card = document.querySelector(`.card${index}`);

		const handleButtonClick = (e) => {
			const targetSection = e.target.getAttribute("data-section");
			const section = document.querySelector(targetSection);
			targetSection !== `#about${index}`
				? card.classList.add("is-active")
				: card.classList.remove("is-active");
			card.setAttribute("data-state", targetSection);
			sections.forEach((s) => s.classList.remove("is-active"));
			buttons.forEach((b) => b.classList.remove("is-active"));
			e.target.classList.add("is-active");
			section.classList.add("is-active");
		};

		buttons.forEach((btn) => {
			btn.addEventListener("click", handleButtonClick);
		});
	}, [index]);

	return (
		<div className={`my-10  `} id={index}>
			<Fade bottom>
			<div className={`card${index}  card ${className}`} data-state={`#about${index}`}>
				<div className="card-header">
					<div
						className="card-cover"
						
					></div>
					<div className="!rounded-full card-avatar">
						<Image
							className="!rounded-full h-full w-full"
							src={ele.image}
							width={100}
							height={100}
							alt="avatar"
						/>
					</div>
					<h1 className="card-fullname !text-black">{ele.name}</h1>
					<h2 className="card-jobtitle !text-black ">{ele.position}</h2>
				</div>
				<div className="card-main">
					<div
						className={`card-section${index} is-active`}
						id={`about${index}`}
					>
						<div className="card-content">
							<div className="card-subtitle !text-black">ABOUT</div>
							<p className="card-desc">
								I am a{" "}
								{parseInt(year.toString().slice(2, 4)) -
									parseInt(ele.email.slice(-20, -18)) ==
									1 && "2nd"}{" "}
								{parseInt(year.toString().slice(2, 4)) -
									parseInt(ele.email.slice(-20, -18)) ==
									2 && "3rd"}{" "}
								{parseInt(year.toString().slice(2, 4)) -
									parseInt(ele.email.slice(-20, -18)) ==
									3 && "4th"}{" "}
								
								Year Student, Currently Pursuing My B.Tech In{" "}
								<span className="uppercase">{ele.email.slice(0, -20)}</span>
							</p>
						</div>
						<div className="card-social">
							<Link className="mx-2" href={ele.github}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</Link>
							<Link className="mx-2" href={ele.linkedin}>
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
								</svg>
							</Link>
						</div>
					</div>

					<div
						className={`card-section${index} card-section`}
						id={`contact${index}`}
					>
						<div className="card-content">
							<div className="card-subtitle !text-black">CONTACT</div>
							<div className="card-contact-wrapper">
								<div className="card-contact">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
										<path d="M22 6l-10 7L2 6" />
									</svg>
									{ele.email}
								</div>
							</div>
						</div>
					</div>
					<div className={`card-buttons${index} card-buttons`}>
						<button data-section={`#about${index}`} className="is-active">
							ABOUT
						</button>

						<button data-section={`#contact${index}`}>CONTACT</button>
					</div>
				</div>
			</div>
			<style jsx>
				{`
					@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");
					* {
						box-sizing: border-box;
					}
					body {
						color: #2b2c48;
						font-family: "Jost", sans-serif;
						background: #134935;
						min-height: 100vh;
						display: flex;
						flex-wrap: wrap;
						padding: 20px;
					}
					.card {
						max-width: 340px;
						margin: auto;
						overflow-y: auto;
						position: relative;
						z-index: 1;
						overflow-x: hidden;
						background-color: rgba(255, 255, 255, 1);
						display: flex;
						transition: 0.3s;
						flex-direction: column;
						border-radius: 10px;
						box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
					}
					.card[data-state="#about"] {
						height: 450px;
					}
					.card[data-state="#about"] .card-main {
						padding-top: 0;
					}
					.card[data-state="#contact"] {
						height: 430px;
					}
					.card[data-state="#experience"] {
						height: 550px;
					}
					.card.is-active .card-header {
						height: 80px;
					}
					.card.is-active .card-cover {
						height: 100px;
						top: -50px;
					}
					.card.is-active .card-avatar {
						transform: none;
						left: 20px;
						width: 50px;
						height: 50px;
						bottom: 10px;
					}
					.card.is-active .card-fullname,
					.card.is-active .card-jobtitle {
						left: 86px;
						transform: none;
					}
					.card.is-active .card-fullname {
						bottom: 18px;
						font-size: 19px;
					}
					.card.is-active .card-jobtitle {
						bottom: 16px;
						letter-spacing: 1px;
						font-size: 10px;
					}
					.card-header {
						position: relative;
						display: flex;
						height: 200px;
						flex-shrink: 0;
						width: 100%;
						transition: 0.3s;
					}
					.card-header * {
						transition: 0.3s;
					}
					.card-cover {
						width: 100%;
						height: 100%;
						position: absolute;
						height: 98px;
						top: -20%;
						filter: blur(12px);
						left: 0;
						background-position: center;
						transform: scale(1.2);
						transition: 0.5s;
					}
					.card-avatar {
						width: 100px;
						height: 100px;
						box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
						border-radius: 50%;
						object-position: center;
						object-fit: cover;
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%) translateY(-64px);
					}
					.card-fullname {
						position: absolute;
						bottom: 0;
						font-size: 22px;
						font-weight: 700;
						text-align: center;
						white-space: nowrap;
						transform: translateY(-10px) translateX(-50%);
						left: 50%;
					}
					.card-jobtitle {
						position: absolute;
						bottom: 0;
						font-size: 11px;
						white-space: nowrap;
						font-weight: 500;
						opacity: 0.7;
						text-transform: uppercase;
						letter-spacing: 1.5px;
						margin: -15px 0px;
						left: 50%;
						transform: translateX(-50%) translateY(-7px);
					}
					.card-main {
						position: relative;
						flex: 1;
						display: flex;
						padding-top: 10px;
						flex-direction: column;
					}
					.card-subtitle {
						font-weight: 700;
						font-size: 13px;
						margin-bottom: 8px;
					}
					.card-content {
						padding: 20px;
					}
					.card-desc {
						line-height: 1.6;
						color: #636b6f;
						font-size: 14px;
						margin: 0;
						font-weight: 400;
						font-family: "DM Sans", sans-serif;
					}
					.card-social {
						display: flex;
						align-items: center;
						padding: 0 20px;
						margin-bottom: 30px;
					}
					.card-social svg {
						fill: #a5b5ce;
						width: 16px;
						display: block;
						transition: 0.3s;
					}
					.card-social a {
						color: #8797a1;
						height: 32px;
						width: 32px;
						border-radius: 50%;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						transition: 0.3s;
						background-color: rgba(93, 133, 193, 0.05);
						border-radius: 50%;
						margin-right: 10px;
					}
					.card-social a:hover svg {
						fill: #637faa;
					}
					.card-social a:last-child {
						margin-right: 0;
					}
					.card-buttons${index} {
						display: flex;
						background-color: #fff;
						margin-top: auto;
						position: sticky;
						bottom: 0;
						left: 0;
					}
					.card-buttons${index} button {
						flex: 1 1 auto;
						user-select: none;
						background: 0;
						font-size: 13px;
						border: 0;
						padding: 15px 5px;
						cursor: pointer;
						color: #5c5c6d;
						transition: 0.3s;
						font-family: "Jost", sans-serif;
						font-weight: 500;
						outline: 0;
						border-bottom: 3px solid transparent;
					}
					.card-buttons${index} button.is-active,
					.card-buttons${index} button:hover {
						color: #2b2c48;
						border-bottom: 3px solid #8a84ff;
						background: #ffff71;
					}
					.card-section${index} {
						display: none;
					}
					.card-section${index}.is-active {
						display: block;
						animation: fadeIn 0.6s both;
					}
					@keyframes fadeIn {
						0% {
							opacity: 0;
							transform: translatey(40px);
						}
						100% {
							opacity: 1;
						}
					}
					.card-timeline {
						margin-top: 30px;
						position: relative;
					}
					.card-timeline:after {
						background: linear-gradient(
							to top,
							rgba(134, 214, 243, 0) 0%,
							rgba(81, 106, 204, 1) 100%
						);
						content: "";
						left: 42px;
						width: 2px;
						top: 0;
						height: 100%;
						position: absolute;
						content: "";
					}
					.card-item {
						position: relative;
						padding-left: 60px;
						padding-right: 20px;
						padding-bottom: 30px;
						z-index: 1;
					}
					.card-item:last-child {
						padding-bottom: 5px;
					}
					.card-item:after {
						content: attr(data-year);
						width: 10px;
						position: absolute;
						top: 0;
						left: 37px;
						width: 8px;
						height: 8px;
						line-height: 0.6;
						border: 2px solid #fff;
						font-size: 11px;
						text-indent: -35px;
						border-radius: 50%;
						color: rgba(134, 134, 134, 0.7);
						background: linear-gradient(to bottom, #a0aee3 0%, #516acc 100%);
					}
					.card-item-title {
						font-weight: 500;
						font-size: 14px;
						margin-bottom: 5px;
					}
					img {
						overflow-clip-margin: content-box;
						overflow: clip;
						aspect-ratio: auto 200 / 200;
					}
					.card-item-desc {
						font-size: 13px;
						color: #6f6f7b;
						line-height: 1.5;
						font-family: "DM Sans", sans-serif;
					}
					.card-contact-wrapper {
						margin-top: 20px;
					}
					.card-contact {
						display: flex;
						align-items: center;
						font-size: 13px;
						color: #6f6f7b;
						font-family: "DM Sans", sans-serif;
						line-height: 1.6;
						cursor: pointer;
					}
					.card-contact + .card-contact {
						margin-top: 16px;
					}
					.card-contact svg {
						flex-shrink: 0;
						width: 30px;
						min-height: 34px;
						margin-right: 12px;
						transition: 0.3s;
						padding-right: 12px;
						border-right: 1px solid #dfe2ec;
					}
					.contact-me {
						border: 0;
						outline: none;
						background: #134935;
						box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
						color: #fff;
						padding: 12px 16px;
						width: 100%;
						border-radius: 5px;
						margin-top: 25px;
						cursor: pointer;
						font-size: 14px;
						font-weight: 500;
						font-family: "Jost", sans-serif;
						transition: 0.3s;
					}
					::-webkit-scrollbar {
						display: none;
					}
				`}
			</style>
			</Fade>
		</div>
	);
}
