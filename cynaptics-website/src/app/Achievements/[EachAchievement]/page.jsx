import Image from "next/image";
import React from "react";
import { AD } from "../AD";
import parse from "html-react-parser";
import Link from "next/link";
export default function page({ params }) {
	const index = params.EachAchievement.slice(
		params.EachAchievement.length - 1,
		params.EachAchievement.length
	);
	const CurrentAchievement = AD.filter((ele) => {
		return ele.id == index;
	});
	return (
		<div>
			<section className="text-gray-100 body-font mx-10">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4  text-white font-extrabold">
							{parse(CurrentAchievement[0].title)}
						</h1>
						<div className="mb-3 leading-relaxed">
							{parse(CurrentAchievement[0].desc)}
						</div>
						<h3 className="font-bold text-3xl leading-relaxed my-5">
							Achievement:
						</h3>
						<div className="mb-3 leading-relaxed">
							{parse(CurrentAchievement[0].Achievements)}
						</div>
						<h3 className="font-bold text-3xl leading-relaxed my-5">
							People Involved: 
						</h3>
						<div className="mb-3 leading-relaxed">
							{parse(CurrentAchievement[0].people_involved)}
						</div>
						<h3 className="font-bold text-3xl leading-relaxed my-5">
							Domain Worked On:
						</h3>
						<div className="mb-3 leading-relaxed">
							{parse(CurrentAchievement[0].domain)}
						</div>
						
						<div className="flex justify-center">
							{CurrentAchievement[0].github_link && (
								<Link href={CurrentAchievement[0].github_link} target={"_blank"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Github Repo
								</Link>
							)}
							{CurrentAchievement[0].frontend_github_link && (
								<Link href={CurrentAchievement[0].frontend_github_link} target={"_blank"} className="mx-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
									Frontend Github Repo
								</Link>
							)}
							{CurrentAchievement[0].backend_github_link && (
								<Link href={CurrentAchievement[0].backend_github_link} target={"_blank"} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Backend Github Repo
								</Link>
							)}
                            {CurrentAchievement[0].deployed_link && (
                                <Link href={CurrentAchievement[0].deployed_link} target={"_blank"} className="mx-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Deployed Link
                            </Link>
                            )}
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<Image
							className="object-cover object-center rounded"
							alt="hero"
							placeholder="blur"
							src={CurrentAchievement[0].image}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
