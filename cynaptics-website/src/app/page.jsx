"use client";
import Image from "next/image";
import { NextSeo } from "next-seo";

import BrainImage from "../../public/images/3dbrain.gif";
import Neuron from "@/components/Model";
import TextAnimation from "@/components/TextAnimation";
import { useEffect } from "react";
import Model from "../components/Model";

export default function Home() {
	
	return (
		<div>
			
			<div className=' h-screen text-center items-center z-[100]  '>
				<div className="pt-64 md:pt-40 lg:pt-44  z-[100]">
					<p className='text-[60px] m-0 p-0'><TextAnimation text="IIT INDORE"/></p>
					<h1 className='text-[120px] m-0 p-0'><TextAnimation text="The Cynaptics Club" /></h1>
					<p className='text-[60px]  m-0 p-0'><TextAnimation text="AI TAKES OVER" /></p>
				</div>
				<div className="mx-auto my-auto flex justify-center w-full  pt-32 ">
					<Model />
				</div>
			</div> 
			
		</div>
	);
}
