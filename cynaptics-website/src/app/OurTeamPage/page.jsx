import Head from "next/head";
import Card from "../../components/Card";
import { TeamMembers } from "./TeamMembers";
import React from "react";
import { Alumni } from './Alumni'
export const metadata = {
    title: "Our Team",
};

export default function OurTeamPage() {
    return (
        <div id="">
            <h1 className="text-center py-20  text-3xl md:text-5xl font-bold z-[10000]">
                Our Team Members
            </h1>
            <div className="mx-auto !h-fit ">
                <Card
                    className="!my-0  !ring-orange-500 !ring-opacity-80 mx-auto !ring-[10px] rounded-xl"
                    ele={TeamMembers[0]}
                    index={TeamMembers[0].id}
                />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {TeamMembers.map((ele, index) => {
                    return (
                        <React.Fragment key={ele.id}>
                            {ele.position !== "Club Head" && (
                                <div>
                                    <Card
                                        className={`${ele.position.includes("Head") &&
                                            "!ring-[10px] !ring-purple-500 !ring-opacity-70"
                                            } ${ele.position.includes("Member") &&
                                            "!ring-[10px] !ring-blue-500 !ring-opacity-70"
                                            }`}
                                        ele={ele}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            <h1 className="text-center py-20  text-3xl md:text-5xl font-bold z-[10000]">
                Our Alumni
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {Alumni.map((ele, index) => {
                    return (
                        <React.Fragment key={ele.id}>

                            <div>
                                <Card
                                    className={`${
                                        "!ring-[10px] !ring-rose-600 !ring-opacity-70"
                                        }`}
                                    ele={ele}
                                />
                            </div>

                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
