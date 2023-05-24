"use client";
import VideoPage from '@/components/VideoPage'
import TextAnimation from "@/components/TextAnimation";
import Model from "@/components/Model"

export default function Home() {
	return (
		<div>
			{/* <Suspense fallback={<LoadingBar/>}> */}
			<div className="bg-black bg-opacity-30 ">
				<div className="absolute h-full w-full z-[-100]">
					<Model />
				</div>
				<div className=" text-center items-center z-[100] my-auto h-screen relative ">
					<div className=" absolute w-full h-fit top-[35%] md:top-[25%]   z-[10000]  ">
						<p className="text-[50px] m-0 p-0 font-extrabold">
							<TextAnimation text="IIT INDORE" />
						</p>
						<h1 className="text-[100px] m-0 p-0 font-extrabold">
							<TextAnimation text="The Cynaptics Club" />
						</h1>
						<p className="text-[50px]  m-0 p-0 font-extrabold">
							<TextAnimation text="AI TAKES OVER" />
						</p>
					</div>
				</div>
				<div className=" ">
					<VideoPage />
				</div>
			</div>
			{/* </Suspense> */}
		</div>
	);
}
