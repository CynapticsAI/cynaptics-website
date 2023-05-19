"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Events } from "../Events";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import ThreedCarousel from "@/components/ThreedCarousel";
export default function EachEventPage({ params }) {
	const router = useRouter();
	const index = params.EachEvent.slice(
		params.EachEvent.length - 1,
		params.EachEvent.length
	);
	const CurrentEvent = Events.filter((ele) => {
		return ele.id == index;
	});

	return (
		<div id="EachEvent">
			<section className="text-gray-100 body-font">
				<div className="container mx-auto flex px-5 pt-24  md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<Image
							width={500}
							height={500}
							placeholder="blur"
							className="object-cover object-center rounded"
							alt="hero"
							src={CurrentEvent[0].display_image}
						/>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-centerr ">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100 text-center">
							{CurrentEvent[0].title}
						</h1>
						<p className=" leading-relaxed mx-10">
							{parse(CurrentEvent[0].about_the_event)} 
						</p>
						<div className="flex justify-center"></div>
					</div>
				</div>
			</section>
			{CurrentEvent[0].desc && (
				<section className="text-gray-100 body-font">
					<div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
						<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center ">
							<p className=" leading-relaxed">{parse(CurrentEvent[0].desc)}</p>
						</div>
					</div>
				</section>
			)}

			<div className="">
				<h1 className="text-center text-xl md:text-3xl font-bold md:my-20 my-10  mx-10">
					Few Important Moments of The Event
				</h1>
				<div>
					<ThreedCarousel CurrentEvent={CurrentEvent} />
				</div>
			</div>
			
		</div>
	);
}
