"use client";
import React from "react";
import { Projects } from "../Projects";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { AiFillGithub } from "react-icons/ai";
export default function EachProjectpage({ params }) {
    const index = params.EachProject.slice(
        params.EachProject.length - 1,
        params.EachProject.length
    );
    const CurrentProject = Projects.filter((ele) => {
        return ele.id == index;
    });

    return (
        <div className="">
            <section className="text-gray-100 body-font">
                <div className="container mx-auto flex px-5 py-24  items-center justify-center flex-col">
                    {CurrentProject[0].video ? (
                        <video loop autoPlay playsInline controls>
                            <source
                                src={CurrentProject[0].video}
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <Image
                            className=" object-center rounded"
                            alt="project_image"
                            src={CurrentProject[0].display_image}
                        />
                    )}

                    <h1 className="title-font sm:text-4xl text-3xl  mt-24 font-bold text-white">
                        {CurrentProject[0].project_title}
                    </h1>

                    <section className="text-gray-100 body-font">
                        <div className="container mx-auto flex px-5 justify-center py-24 md:flex-row flex-col items-center">
                            {CurrentProject[0].desc1 && (
                                <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <div className="mb-8 leading-relaxed">
                                        {parse(CurrentProject[0].desc1)}
                                    </div>
                                </div>
                            )}
                            {CurrentProject[0].image1 && (
                                <div className="lg:max-w-lg lg:w-full flex justify-center mx-auto mb-10 md:mb-0">
                                    <Image
                                        className="object-cover object-center rounded"
                                        alt="project_image"
                                        src={CurrentProject[0].image1}
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    <section className="text-gray-100 body-font">
                        <div className="container mx-auto flex px-5 justify-center  md:flex-row flex-col items-center">
                            {CurrentProject[0].image2 && (
                                <div className="lg:max-w-lg lg:w-full flex justify-center mx-auto mb-10 md:mb-0">
                                    <Image
                                        className="object-cover object-center rounded"
                                        alt="project_image"
                                        src={CurrentProject[0].image2}
                                    />
                                </div>
                            )}
                            {CurrentProject[0].desc2 && (
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <div className="mb-8 leading-relaxed">
                                        {parse(CurrentProject[0].desc2)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">
                            <Link
                                target={"_blank"}
                                href={CurrentProject[0].github_link}
                                className="flex items-center "
                            >
                                <AiFillGithub className="mr-5 w-10 h-10 my-auto" />{" "}
                                <div className="items-center my-auto flex">
                                    Github Repo{" "}
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    a {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
}
