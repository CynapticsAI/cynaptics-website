"use client";
import { useEffect } from "react";
import LoadingBar from "@/components/Loading";
export default function Loading() {
    return (
        <div className="h-screen w-full">
            <LoadingBar />
        </div>
    );
}
