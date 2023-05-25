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
	console.log(CurrentProject);
	return (
		<div>
			<section className="text-black body-font">
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<Image
						width={500}
						height={500}
						className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
						alt="hero"
						src={CurrentProject[0].project_image}
					/>
					<div className="text-center lg:w-2/3 w-full invert">
						<h1 className="title-font sm:text-4xl text-3xl mb-4  font-extrabold text-gray-900">
							{CurrentProject[0].project_title}
						</h1>
						<p className="mb-8 leading-relaxed font-bold">
							{parse(CurrentProject[0].project_description)}
						</p>
						<h3 className="text-2xl font-extrabold text-black text-center mb-8 ">
							Domain Worked On:
						</h3>
						<p className="mb-8 leading-relaxed font-bold">
							{parse(CurrentProject[0].domain ? CurrentProject[0].domain : "")}
						</p>
						<h3 className="text-2xl font-extrabold text-black text-center mb-8">
							People Involed Are:
						</h3>
						<p className="mb-8 leading-relaxed font-bold">
							{parse(
								CurrentProject[0].people_involved
									? CurrentProject[0].people_involved
									: ""
							)}
						</p>
						<h3 className="text-2xl font-extrabold text-black text-center mb-8">
							Achievement Secured:
						</h3>
						<p className="mb-8 leading-relaxed font-bold">
							{parse(
								CurrentProject[0].Achievements
									? CurrentProject[0].Achievements
									: ""
							)}
						</p>
						{CurrentProject[0].github_link && (
							<div className="flex justify-center my-2">
								<Link
									href={CurrentProject[0].github_link}
									className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
								>
									Github Repo
								</Link>
							</div>
						)}
						{CurrentProject[0].frontend_github_link && (
							<div className="flex justify-center my-2">
								<Link
									href={CurrentProject[0].frontend_github_link}
									className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
								>
									Frontend Github Repo
								</Link>
							</div>
						)}
						{CurrentProject[0].backend_github_link && (
							<div className="flex justify-center my-2">
								<Link
									href={CurrentProject[0].backend_github_link}
									className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
								>
									Backend Github Repo
								</Link>
							</div>
						)}
						{CurrentProject[0].deployed_link && (
							<div className="flex justify-center my-2">
								<Link
									href={CurrentProject[0].deployed_link}
									className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
								>
									Deployed Link
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
