import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 3;

const Card = ({ src }) => (
    <div className="card">
        <Image height={700} src={src} alt={"Loading..."} placeholder="blur" />
    </div>
);

const Carousel = ({ children }) => {
    const count = React.Children.count(children);
    const [active, setActive] = useState(count > 2 ? 1 : 0);

    return (
        <div className="carousel h-[10rem] w-[10rem] lg:w-[50rem] lg:h-[50rem]">
            {active > 0 && (
                <button
                    className="nav left lg:!top-[25%] !w-7 !h-7 md:!w-auto md:!h-auto !right-[140px] sm:!right-auto"
                    onClick={() => setActive((i) => i - 1)}
                >
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className="card-container"
                    key={i}
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 3,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 3,
                        "pointer-events": active === i ? "auto" : "none",
                        opacity:
                            Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                        display:
                            Math.abs(active - i) > MAX_VISIBILITY
                                ? "none"
                                : "block",
                    }}
                >
                    {child}
                </div>
            ))}
            <div className="flex items-center">
                {active < count - 1 && (
                    <button
                        className="nav right lg:!top-[25%] !w-7 !h-7 md:!w-auto md:!h-auto !left-[140px] sm:!left-auto"
                        onClick={() => setActive((i) => i + 1)}
                    >
                        <TiChevronRightOutline />
                    </button>
                )}
            </div>
            <style jsx>
                {`
                    body {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        background-image: linear-gradient(
                            45deg,
                            #8b5cf6,
                            #ec4899
                        );
                        font-family: "Montserrat", sans-serif;
                    }
                    * {
                        box-sizing: border-box;
                    }
                    .carousel {
                        position: relative;

                        perspective: 1000px;
                        transform-style: preserve-3d;
                    }
                    @media only screen and (max-width: 500px) {
                        .carousel {
                            position: relative;

                            perspective: 100px;
                            transform-style: preserve-3d;
                        }
                    }
                    .card-container {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        transform: rotateY(calc(var(--offset) * 50deg))
                            scaleY(calc(1 + var(--abs-offset) * -0.4))
                            translateZ(calc(var(--abs-offset) * -30rem))
                            translateX(calc(var(--direction) * -5rem));
                        filter: blur(calc(var(--abs-offset) * 1rem));
                        transition: all 0.3s ease-out;
                    }
                    .card {
                        width: 100%;
                        height: 100%;
                        padding: 2rem;
                        background-color: #000;
                        border-radius: 1rem;
                        color: #9ca3af;
                        text-align: justify;
                        transition: all 0.3s ease-out;
                    }
                    .card h2 {
                        text-align: center;
                        font-size: 2rem;
                        font-weight: bold;
                        margin: 0 0 0.7em;
                        color: #1f2937;
                    }
                    .card p,
                    .card h2 {
                        transition: all 0.3s ease-out;
                        opacity: var(--active);
                    }
                    .nav {
                        color: white;
                        font-size: 5rem;
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 20%;
                        z-index: 2;
                        cursor: pointer;
                        user-select: none;
                        background: unset;
                        border: unset;
                    }
                    .nav.left {
                        transform: translateX(-100%) translateY(50%);
                    }
                    .nav.right {
                        right: 0;
                        transform: translateX(100%) translateY(50%);
                    }
                `}
            </style>
        </div>
    );
};

export default function ThreedCarousel({ CurrentEvent }) {
    return (
        <div>
            <div className="app flex justify-center">
                <Carousel>
                    {Object.keys(CurrentEvent[0])
                        .filter((ele) => ele.slice(0, 5) == "image")
                        .map((ele, index) => {
                            return (
                                <div key={index}>
                                    <Card src={CurrentEvent[0][ele]} />
                                </div>
                            );
                        })}
                </Carousel>
            </div>
            {/* <div className="carousel">
				<div className="carousel__body">
					<div className="carousel__prev">
						<i className="far fa-angle-left"></i>
					</div>
					<div className="carousel__next">
						<i className="far fa-angle-right"></i>
					</div>
					<div className="carousel__slider">
						
					</div>
				</div>
			</div> */}

            <style jsx>
                {`
                    body {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        background-image: linear-gradient(
                            45deg,
                            #8b5cf6,
                            #ec4899
                        );
                        font-family: "Montserrat", sans-serif;
                    }
                    * {
                        box-sizing: border-box;
                    }
                    .carousel {
                        position: relative;
                        width: 23rem;
                        height: 23rem;
                        perspective: 500px;
                        transform-style: preserve-3d;
                    }
                    .card-container {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        transform: rotateY(calc(var(--offset) * 50deg))
                            scaleY(calc(1 + var(--abs-offset) * -0.4))
                            translateZ(calc(var(--abs-offset) * -30rem))
                            translateX(calc(var(--direction) * -5rem));
                        filter: blur(calc(var(--abs-offset) * 1rem));
                        transition: all 0.3s ease-out;
                    }
                    .card {
                        width: 100%;
                        height: 100%;
                        padding: 2rem;
                        background-color: #000;
                        border-radius: 1rem;
                        color: #9ca3af;
                        text-align: justify;
                        transition: all 0.3s ease-out;
                    }
                    .card h2 {
                        text-align: center;
                        font-size: 2rem;
                        font-weight: bold;
                        margin: 0 0 0.7em;
                        color: #1f2937;
                    }
                    .card p,
                    .card h2 {
                        transition: all 0.3s ease-out;
                        opacity: var(--active);
                    }
                    .nav {
                        color: white;
                        font-size: 5rem;
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 50%;
                        z-index: 2;
                        cursor: pointer;
                        user-select: none;
                        background: unset;
                        border: unset;
                    }
                    .nav.left {
                        transform: translateX(-100%) translatey(-50%);
                    }
                    .nav.right {
                        right: 0;
                        transform: translateX(100%) translatey(-50%);
                    }
                `}
            </style>
        </div>
    );
}
