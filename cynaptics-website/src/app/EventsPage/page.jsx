/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import $ from "jquery";
import Image from "next/image";
import Link from "next/link";
import { Events } from "./Events";
export default function EventsPage() {
    useEffect(() => {
        let x = document.getElementById("EventImage").height;

        const $menu = document.querySelector(".menu");
        const $items = document.querySelectorAll(".menu--item");
        const $images = document.querySelectorAll(".menu--item img");
        let menuWidth = $menu.clientWidth;
        let itemWidth = $items[0].clientWidth;
        let wrapWidth = $items.length * itemWidth;

        let scrollSpeed = 0;
        let oldScrollY = 0;
        let scrollY = 0;
        let y = 0;

        const lerp = (v0, v1, t) => {
            return v0 * (1 - t) + v1 * t;
        };

        const dispose = (scroll) => {
            gsap.set($items, {
                x: (i) => {
                    return i * itemWidth + scroll;
                },
                modifiers: {
                    x: (x, target) => {
                        const s = gsap.utils.wrap(
                            -itemWidth,
                            wrapWidth - itemWidth,
                            parseInt(x)
                        );
                        return `${s}px`;
                    },
                },
            });
        };
        dispose(0);

        const handleMouseWheel = (e) => {
            scrollY -= e.deltaY * 0.9;
        };

        let touchStart = 0;
        let touchX = 0;
        let isDragging = false;
        const handleTouchStart = (e) => {
            touchStart = e.clientX || e.touches[0].clientX;
            isDragging = true;
            $menu.classList.add("is-dragging");
        };
        const handleTouchMove = (e) => {
            if (!isDragging) return;
            touchX = e.clientX || e.touches[0].clientX;
            scrollY += (touchX - touchStart) * 2.5;
            touchStart = touchX;
        };
        const handleTouchEnd = () => {
            isDragging = false;
            $menu.classList.remove("is-dragging");
        };

        $menu.addEventListener("mousewheel", handleMouseWheel);

        $menu.addEventListener("touchstart", handleTouchStart);
        $menu.addEventListener("touchmove", handleTouchMove);
        $menu.addEventListener("touchend", handleTouchEnd);

        $menu.addEventListener("mousedown", handleTouchStart);
        $menu.addEventListener("mousemove", handleTouchMove);
        $menu.addEventListener("mouseleave", handleTouchEnd);
        $menu.addEventListener("mouseup", handleTouchEnd);

        $menu.addEventListener("selectstart", () => {
            return false;
        });

        window.addEventListener("resize", () => {
            menuWidth = $menu.clientWidth;
            itemWidth = $items[0].clientWidth;
            wrapWidth = $items.length * itemWidth;
        });

        const render = () => {
            requestAnimationFrame(render);
            y = lerp(y, scrollY, 0.1);
            dispose(y);

            scrollSpeed = y - oldScrollY;
            oldScrollY = y;

            gsap.to($items, {
                skewX: -scrollSpeed * 0.2,
                rotate: scrollSpeed * 0.01,
                scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
            });
        };
        render();
    }, []);

    return (
        <div className="body   pb-[200px]">
            <h1 className=" md:text-5xl font-bold text-center text-3xl pt-12 pb-0 lg:pb-12">
                Our Events
            </h1>
            <div className={`menu h-[300px] `}>
                <div className="menu--wrapper">
                    {Events.map((ele, index) => {
                        return (
                            <div key={ele.id}>
                                <Link
                                    href={`/EventsPage/${
                                        ele.title + ele.id.toString()
                                    }`}
                                >
                                    <div className="menu--item !flex !items-center !my-auto  overflow-hidden group">
                                        <div className="  text-white h-full items-center absolute w-full bg-black bg-opacity-80 text-center justify-center top-[-1000px] !z-[1000] group-hover:top-0 transition-all fade-in-out font-bold hidden md:flex">
                                            <div>
                                                <div>{ele.title}</div>
                                                <div>{ele.date}</div>
                                                <div>{ele.venue}</div>
                                            </div>
                                        </div>
                                        <figure className="!flex !items-center !my-auto ">
                                            <div className="hover:border-2 ">
                                                <Image
                                                    id="EventImage"
                                                    className="!z-[-1]"
                                                    placeholder="blur"
                                                    widht={500}
                                                    height={500}
                                                    src={ele.display_image}
                                                    alt="Loading.."
                                                />
                                            </div>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>
                {`
                    * {
                        box-sizing: border-box;
                    }

                    #body {
                        height: 100%;
                        overflow: hidden;
                        background: black;
                        color: #fff;
                        font-family: "Playfair Display", cursive;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .menu {
                        overflow: hidden;
                        cursor: -webkit-grab;
                        cursor: grab;
                        width: 100%;
                        position: relative;
                        z-index: 1;
                    }
                    .menu.is-dragging {
                        cursor: -webkit-grabbing;
                        cursor: grabbing;
                    }
                    .menu--wrapper {
                        display: flex;
                        position: absolute;
                        z-index: 1;
                        height: 100%;
                        top: 0;
                        left: 0;

                        width: 100%;
                    }
                    .menu--item {
                        position: absolute;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        width: 30vw;
                        height: 100%;
                        margin: 10px;
                        padding: 10px;

                        overflow: hidden;
                    }
                    .menu--item:hover {
                        border: 2px solid white;
                    }
                    @media (max-width: 767px) {
                        .menu--item {
                            width: 40vw;
                            height: 100%;
                        }
                    }

                    .menu--item figure {
                        position: absolute;
                        z-index: 1;
                        display: block;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-appxtanchorearance: none;
                        padding: 0;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        pointerevents: none;
                        transform-origin: center;
                    }
                    .menu--item figure img {
                        position: absolute;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        -o-object-fit: contain;
                        object-fit: contain;
                        vertical-align: middle;
                        transform-origin: center;
                    }
                    .menu--item figure:before {
                        position: absolute;
                        z-index: 2;
                        bottom: 1vw;
                        left: 1vw;
                        display: inline-block;

                        color: #ffffff;
                        font-size: 3vw;
                    }

                    .version {
                        display: inline-block;
                        position: fixed;
                        text-align: center;
                        z-index: 1;
                        text-decoration: none;
                        background: #333;
                        font-family: sans-serif;
                        color: #fff;
                        text-transform: uppercase;
                        font-size: 12px;
                        border-radius: 10px;
                        box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2);
                        top: -30px;
                        right: -50px;
                        bottom: auto;
                        transform: rotate(45deg);
                        transform-origin: 0% 100%;
                        border-radius: 0;
                        padding: 8px 30px;
                        font-size: 11px;
                    }
                    .version:before {
                        position: absolute;
                        z-index: -1;
                        width: 100%;
                        height: 100px;
                        bottom: 0;
                        right: 0%;
                        background: transparent;
                    }
                    @media (max-width: 767px) {
                        .version {
                            transform: scale(0.6) rotate(45deg);
                            right: -100px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
