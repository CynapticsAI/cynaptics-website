import React from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
export const metadata = {
    title: "Our Projects",
};
export default function page() {
    return (
        <div>
            <ProjectCarousel />
        </div>
    );
}
