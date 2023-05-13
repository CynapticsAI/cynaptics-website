import React, { useEffect } from "react";
import ReactPlayer from "react-player";
export default function VideoPage() {
	useEffect(()=>{

	},[])
	return (
		<div>
			<h1 className="text-center font-bold  text-2xl md:text-5xl py-20">
				See What AI/ML Can Do
			</h1>
			<div className="grid md:grid-cols-2  group m-10 md:my-auto relative">
				<div className="md:m-10 flex justify-center">
					<video loop muted autoPlay>
						<source src="./videos/quick draw.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="items-center text-center mx-auto my-auto font-semibold md:text-xl absolute z-[100] md:relative bg-black text-white bg-opacity-80 text-wrap  group-hover:opacity-100 opacity-0 md:opacity-100  transition-all fade-in-out p-5 text-[12px] sm:text-sm md:text-md">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam beatae
					repellendus, iste exercitationem quasi quam accusantium. Temporibus
					porro, vel eligendi esse itaque molestias error ducimus qui excepturi
					nisi soluta tenetur culpa laudantium provident ipsam obcaecati minus
					quod quia ab quae. Blanditiis, rerum alias eius natus cumque esse
					provident dolorum amet!
				</div>
			</div>
			<div className="grid md:grid-cols-2  group m-10 md:my-auto relative">
				<div className="items-center text-center mx-auto my-auto font-semibold md:text-xl absolute z-[100] md:relative bg-black text-white bg-opacity-80 text-wrap  group-hover:opacity-100 opacity-0 md:opacity-100  transition-all fade-in-out p-5 text-[12px] sm:text-sm md:text-md">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam beatae
					repellendus, iste exercitationem quasi quam accusantium. Temporibus
					porro, vel eligendi esse itaque molestias error ducimus qui excepturi
					nisi soluta tenetur culpa laudantium provident ipsam obcaecati minus
					quod quia ab quae. Blanditiis, rerum alias eius natus cumque esse
					provident dolorum amet!
				</div>
				<div className="md:m-10 flex justify-center">
					<video loop muted autoPlay>
						<source src="./videos/semantris.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			<div className="grid md:grid-cols-2  group m-10 md:my-auto relative">
				<div className="md:m-10 flex justify-center">
					<video loop muted autoPlay>
						<source src="./videos/thisfacedoesnotexist.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="items-center text-center mx-auto my-auto font-semibold md:text-xl absolute z-[100] md:relative bg-black text-white bg-opacity-80 text-wrap  group-hover:opacity-100 opacity-0 md:opacity-100  transition-all fade-in-out p-5 text-[12px] sm:text-sm md:text-md">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam beatae
					repellendus, iste exercitationem quasi quam accusantium. Temporibus
					porro, vel eligendi esse itaque molestias error ducimus qui excepturi
					nisi soluta tenetur culpa laudantium provident ipsam obcaecati minus
					quod quia ab quae. Blanditiis, rerum alias eius natus cumque esse
					provident dolorum amet!
				</div>
			</div>
			<div className="grid md:grid-cols-2  group m-10 md:my-auto relative">
				<div id="card_text" className=" items-center text-center mx-auto my-auto font-semibold md:text-xl absolute z-[100] md:relative bg-black text-white bg-opacity-80 text-wrap  group-hover:opacity-100 opacity-0 md:opacity-100  transition-all fade-in-out p-5 text-[12px] sm:text-sm md:text-md">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam beatae
					repellendus, iste exercitationem quasi quam accusantium. Temporibus
					porro, vel eligendi esse itaque molestias error ducimus qui excepturi
					nisi soluta tenetur culpa laudantium provident ipsam obcaecati minus
					quod quia ab quae. Blanditiis, rerum alias eius natus cumque esse
					provident dolorum amet!
				</div>
				<div id="card_video" className="md:m-10  flex justify-center z-[-1]">
					<video loop muted autoPlay>
						<source type="video/mp4" src="./videos/pix2pix.mp4" />
					</video>
				</div>
			</div>
		</div>
	);
}
