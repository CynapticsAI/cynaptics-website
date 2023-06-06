"use client";
import React from "react";
import { AD } from "./AD";
import ACard from "@/components/ACard";
import Bounce from "react-reveal/Bounce";
export default function page() {
    return (
        <div className="overflow-hidden">
            <h1 className="text-center mt-20 md:my-20 mx-10 font-bold lg:text-5xl text-3xl">
                Achievements By The Club Members
            </h1>
            <div className="md:grid-cols-2 grid lg:grid-cols-3 overflow-hidden">
                {AD.map((ele, index) => {
                    return (
                        <div key={ele.id} className="mx-10 md:mx-auto">
                            <Bounce>
                                <ACard ele={ele} />
                            </Bounce>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
