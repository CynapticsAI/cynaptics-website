"use client";
import React from "react";
import { Projects } from "../Projects";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
export default function EachProjectpage({ params }) {
	const index = params.EachProject.slice(
		params.EachProject.length - 1,
		params.EachProject.length
	);
	const CurrentProject = Projects.filter((ele) => {
		return ele.id == index;
	});
	
	return (
		<div>
			<section className="text-gray-100 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image placeholder="blur" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={CurrentProject[0].project_image}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{CurrentProject[0].project_title}</h1>
      <p className="mb-8 leading-relaxed">{CurrentProject[0].project_description}</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
		</div>
	);
}
