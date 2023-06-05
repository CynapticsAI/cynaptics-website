"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Projects } from "@/app/ProjectsPage/Projects";
import { useEffect } from "react";
import parse from "html-react-parser";
import Link from "next/link";
export default function ProjectCarousel() {
    useEffect(() => {
        (() => {
            // Respect user preference
            const isReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            // Helper to apply inline CSS
            const setStyleProps = ($el, styles) => {
                for (const [key, value] of Object.entries(styles)) {
                    if (value === false) {
                        $el.style.removeProperty(key);
                    } else {
                        $el.style.setProperty(key, value);
                    }
                }
            };

            document.querySelectorAll(".Carousel").forEach(($carousel) => {
                $carousel.scrollLeft = 0;

                const $cards = Array.from($carousel.querySelectorAll(".Card"));
                const $pagination = $carousel.nextElementSibling;
                const [$previous, $next] =
                    $pagination.querySelectorAll(".Arrow");
                $pagination.querySelector(".Dot").classList.add("Dot--active");

                const $start = document.createElement("div");
                const $end = document.createElement("div");
                $carousel.prepend($start);
                $carousel.append($end);

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.target === $start) {
                            if ($previous) {
                                $previous.disabled = entry.isIntersecting;
                            }
                        }
                        if (entry.target === $end) {
                            if ($next) {
                                $next.disabled = entry.isIntersecting;
                            }
                        }
                    });
                });
                observer.observe($start);
                observer.observe($end);

                const scrollTo = ($card) => {
                    let offset = getOffset($card);
                    const left = document.dir === "rtl" ? -offset : offset;
                    const behavior = isReducedMotion ? "auto" : "smooth";
                    $carousel.scrollTo({ left, behavior });
                };

                const getOffset = ($el) => {
                    let offset = $el.offsetLeft;
                    if (document.dir === "rtl") {
                        offset =
                            $carousel.offsetWidth - (offset + $el.offsetWidth);
                    }
                    return offset;
                };

                $previous.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    let $card = $cards[0];
                    const scroll = Math.abs($carousel.scrollLeft);
                    $cards.forEach(($item) => {
                        const offset = getOffset($item);
                        if (offset - scroll < -1 && offset > getOffset($card)) {
                            $card = $item;
                        }
                    });
                    scrollTo($card);
                });

                $next.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    let $card = $cards[$cards.length - 1];
                    const scroll = Math.abs($carousel.scrollLeft);
                    $cards.forEach(($item) => {
                        const offset = getOffset($item);
                        if (offset - scroll > 1 && offset < getOffset($card)) {
                            $card = $item;
                        }
                    });
                    scrollTo($card);
                });

                $pagination.addEventListener("click", (ev) => {
                    if (ev.target.classList.contains("Dot")) {
                        ev.preventDefault();
                        const $card = document.querySelector(
                            new URL(ev.target.href).hash
                        );
                        if ($card) scrollTo($card);
                    }
                });

                // Highlight nearest "Dot" in pagination
                let scrollTimeout;
                $carousel.addEventListener(
                    "scroll",
                    () => {
                        clearTimeout(scrollTimeout);
                        scrollTimeout = setTimeout(() => {
                            let $dot =
                                $pagination.querySelector(".Dot--active");
                            if ($dot) $dot.classList.remove("Dot--active");
                            let $active;
                            const scroll = Math.abs($carousel.scrollLeft);
                            if (scroll <= 0) {
                                $active = $cards[0];
                            }
                            if (
                                scroll >=
                                $carousel.scrollWidth - $carousel.offsetWidth
                            ) {
                                $active = $cards[$cards.length - 1];
                            }
                            if (!$active) {
                                let oldDiff;
                                $cards.forEach(($card) => {
                                    const newDiff = Math.abs(
                                        scroll - getOffset($card)
                                    );
                                    if (!$active || newDiff < oldDiff) {
                                        $active = $card;
                                        oldDiff = newDiff;
                                    }
                                });
                            }
                            $dot = $pagination.querySelector(
                                `[href="#${($active ?? $card[0]).id}"]`
                            );
                            if ($dot) $dot.classList.add("Dot--active");
                        }, 50);
                    },
                    { passive: true }
                );

                // Improve transition when tabbing focus

                let scrollLeft = 0;

                $carousel.addEventListener("wheel", (event) => {
                    // Get the delta value to determine the direction of the scroll
                    const delta = Math.sign(event.deltaY);

                    // Calculate the index of the currently visible card
                    const visibleCardIndex = Math.round(
                        $carousel.scrollLeft / $cards[0].offsetWidth
                    );

                    // Calculate the index of the next visible card based on the scroll direction
                    const nextCardIndex = visibleCardIndex + delta;

                    // Make sure the next card index is within the bounds of the cards array
                    const clampedNextCardIndex = Math.max(
                        0,
                        Math.min(nextCardIndex, $cards.length - 1)
                    );

                    // Get the next visible card element
                    const $nextCard = $cards[clampedNextCardIndex];

                    // Scroll to the next card
                    scrollTo($nextCard);

                    // Prevent the default scroll behavior
                    event.preventDefault();
                });
            });

            // Optional polyfill for Safari 14
        })();
    }, []);

    return (
        <div>
            <main className="!block  !p-0 !h-full my-20">
                <section
                    className="Carousel !m-0 !p-0  "
                    id="carousel"
                    tabIndex="-1"
                >
                    {Projects.map((ele) => {
                        return (
                            <article
                                key={ele.id}
                                className="Card Card--overlay Card--square group relative transition-all fade-in-out"
                                id={`card-${ele.id}`}
                            >
                                <Link
                                    aria-label="The link of the Respective project"
                                    className="w-full flex justify-center text-center  "
                                    href={`/ProjectsPage/${
                                        ele.project_title
                                    } + ${ele.id.toString()}`}
                                >
                                    <div className="Card__media">
                                        <Image
                                            className="Card__image !h-full !w-full lg:group-hover:blur-md"
                                            alt={ele.project_title}
                                            placeholder="blur"
                                            width="400"
                                            height="400"
                                            loading="lazy"
                                            src={ele.display_image}
                                        />
                                    </div>
                                    <div className="bg-black rounded-t-3xl py-10 px-5 absolute bottom-0 lg:bottom-[-2000px] w-full text-center group-hover:bottom-0 transition-all fade-in-out">
                                        <div className="underlline !text-xl mb-5">
                                            {ele.project_title}
                                        </div>
                                        <div className="!text-sm hidden lg:block">
                                            {parse(
                                                ele.display_desc
                                                    ? ele.display_desc
                                                    : ele.desc1
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        );
                    })}
                </section>

                <nav className="Pagination !m-0 !p-0 !mx-10 mt-10 flex justify-center">
                    <button
                        className="Arrow"
                        type="button"
                        aria-controls="carousel"
                        disabled
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="presentation"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                            />
                        </svg>
                    </button>
                    <button
                        className="Arrow"
                        type="button"
                        aria-controls="carousel"
                        disabled
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="presentation"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                            />
                        </svg>
                    </button>
                    <div className="Dots">
                        {Projects.map((ele) => {
                            return (
                                <a
                                    key={ele.id}
                                    href={`#card-${ele.id}`}
                                    className="Dot"
                                    tabIndex="-1"
                                ></a>
                            );
                        })}
                    </div>
                </nav>
            </main>

            <style jsx>
                {`
                    :root {
                        --theme-blue: 200, 80%, 38%;
                        --theme-red: 350, 63%, 52%;
                        --theme-pink: 350, 100%, 69%;
                        --theme-black: 0, 7%, 9%;
                        --theme-white: 0, 0%, 100%;
                        --theme-light: 40, 100%, 97%;
                        --theme-dark: 0, 7%, 29%;
                        color: hsl(var(--theme-dark));
                        background: hsl(var(--theme-light));
                    }

                    *,
                    *::after,
                    *::before {
                        box-sizing: border-box;
                    }

                    a {
                        color: hsl(var(--theme-blue));
                        transition: color 150ms, text-decoration-color 150ms;
                    }
                    a:active,
                    a:visited {
                        color: hsl(var(--theme-blue));
                    }
                    a:hover {
                        color: hsl(var(--theme-red));
                    }
                    a:focus,
                    a:hover {
                        text-decoration-color: transparent;
                    }

                    a:focus,
                    [tabindex="-1"]:focus {
                        outline: 0.125rem solid hsl(var(--theme-pink));
                    }
                    a:focus:not(:focus-visible),
                    [tabindex="-1"]:focus:not(:focus-visible) {
                        outline: none;
                    }

                    .Carousel {
                        --carousel-gap: 1rem;
                        border-radius: 1rem;
                        display: flex;
                        gap: var(--carousel-gap);
                        overflow-y: hidden;
                        overflow-x: auto;
                        position: relative;
                        scroll-behavior: auto;
                        scroll-snap-type: x mandatory;
                        scrollbar-width: none;
                        -webkit-overflow-scrolling: touch;
                        height: 50vw;
                        outline: none !important;
                        min-height: 20rem;
                        max-height: 30rem;
                    }
                    .Carousel::-webkit-scrollbar {
                        display: none;
                    }
                    .Carousel .Card {
                        aspect-ratio: var(--card-ratio);
                        flex: 1 0 auto;
                        min-height: 100%;
                        scroll-snap-align: start;
                    }
                    .Carousel .Card__media {
                        aspect-ratio: auto;
                    }
                    .Carousel > div:empty {
                        position: relative;
                    }
                    .Carousel > div:empty:first-child {
                        inset-inline-start: 10%;
                        margin-inline-end: calc(-1 * var(--carousel-gap));
                    }
                    .Carousel > div:empty:last-child {
                        inset-inline-end: 10%;
                        margin-inline-start: calc(-1 * var(--carousel-gap));
                    }

                    .Carousel--single .Card {
                        --card-ratio: auto;
                        flex: 1 0 100%;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .Carousel {
                            scroll-behavior: auto;
                        }
                    }
                    @supports not (aspect-ratio: 1/1) {
                        .Carousel .Card__media {
                            padding-block-end: 0 !important;
                        }
                        .Carousel .Card__image {
                            position: relative !important;
                        }
                    }
                    .Dots {
                        align-items: center;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .Dot {
                        border-radius: 100%;
                        display: block;
                        height: 1.5rem;
                        width: 1.5rem;
                        position: relative;
                    }
                    .Dot::after {
                        background: currentColor;
                        border-radius: 100%;
                        content: "";
                        display: block;
                        height: 0.375rem;
                        width: 0.375rem;
                        left: 50%;
                        position: absolute;
                        top: 50%;
                        transform: translateX(-50%) translateY(-50%);
                    }

                    .Dot--active {
                        color: hsl(var(--theme-pink)) !important;
                    }

                    .Pagination {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        margin: 1rem -0.5rem;
                    }
                    .Pagination .Arrow {
                        flex: 0 0 auto;
                    }
                    .Pagination .Arrow:first-of-type {
                        margin-inline-end: auto;
                        order: -1;
                    }
                    .Pagination .Arrow:last-of-type {
                        margin-inline-start: auto;
                        order: 1;
                    }

                    .Arrow {
                        align-items: center;
                        appearance: none;
                        background: transparent;
                        border: none;
                        border-radius: 0.125rem;
                        cursor: pointer;
                        color: hsl(var(--theme-blue));
                        display: flex;
                        height: 3rem;
                        justify-content: center;
                        opacity: 1;
                        padding: 0.5rem;
                        transition: opacity 150ms, color 150ms;
                        width: 3rem;
                    }
                    .Arrow:hover {
                        color: hsl(var(--theme-red));
                    }
                    .Arrow:focus {
                        color: hsl(var(--theme-pink));
                        outline: none;
                    }
                    .Arrow:focus svg {
                        box-shadow: 0 0 0 0.125rem hsla(var(--theme-white), 1),
                            0 0 0 0.25rem currentColor;
                    }
                    .Arrow:focus:not(:focus-visible) {
                        color: hsl(var(--theme-red));
                    }
                    .Arrow:focus:not(:focus-visible) svg {
                        box-shadow: none;
                    }
                    .Arrow[disabled] {
                        color: hsl(var(--theme-dark));
                        opacity: 0.4;
                        pointer-events: none;
                    }
                    .Arrow svg {
                        border-radius: 100%;
                        fill: currentColor;
                        height: 100%;
                        width: 100%;
                        transition: box-shadow 150ms;
                    }
                    [dir="rtl"] .Arrow svg {
                        transform: scaleX(-1);
                    }

                    .Hidden {
                        border: 0 !important;
                        clip: rect(0 0 0 0) !important;
                        clip-path: inset(50%) !important;
                        height: 1px !important;
                        margin: -1px !important;
                        overflow: hidden !important;
                        padding: 0 !important;
                        position: absolute !important;
                        width: 1px !important;
                        white-space: nowrap !important;
                    }

                    :root {
                        --card-link-color: var(--theme-blue);
                        --card-hover-color: var(--theme-red);
                        --card-focus-color: var(--theme-pink);
                        --card-inner-focus-color: var(--theme-white);
                        --card-shadow-color: var(--theme-black);
                        --card-foreground-color: var(--theme-dark);
                        --card-background-color: var(--theme-dark);
                    }

                    .Card {
                        --card-ratio: auto 1/1;
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: [media-start] auto [media-end main-start] auto [main-end];
                        max-width: 100%;
                        position: relative;
                    }

                    .Card__media {
                        aspect-ratio: var(--card-ratio);
                        background: hsla(var(--card-background-color), 0.5);
                        border-radius: 1rem;
                        grid-column: 1/-1;
                        grid-row: media-start/media-end;
                        max-width: 100%;
                        overflow: hidden;
                        position: relative;
                        z-index: -1;
                    }
                    .Card__media > * {
                        border-radius: inherit;
                        height: 100%;
                        object-fit: cover;
                        position: absolute;
                        width: 100%;
                    }

                    .Card__main {
                        align-self: end;
                        color: hsl(var(--card-foreground-color));
                        grid-column: 1/-1;
                        grid-row: main-start/main-end;
                        padding: 1.25rem;
                    }
                    .Card__main [href]:not(.Card__link) {
                        position: relative;
                        z-index: 2;
                    }
                    .Card__main > * {
                        margin: 0;
                    }

                    .Card__link {
                        color: hsl(var(--card-link-color));
                        font-weight: 600;
                        text-decoration-line: underline;
                        text-decoration-color: hsla(
                            var(--card-link-color),
                            0.2
                        );
                        text-decoration-thickness: 0.125rem;
                        text-decoration-skip: ink;
                        text-decoration-skip-ink: all;
                        text-decoration-offset: 100%;
                    }
                    .Card__link::after {
                        border: 0.125rem solid hsl(var(--card-focus-color));
                        box-shadow: inset 0 0 0 0.125rem
                            hsla(var(--card-inner-focus-color), 1);
                        border-radius: 1rem;
                        bottom: 0;
                        content: "";
                        display: block;
                        left: 0;
                        opacity: 0;
                        position: absolute;
                        right: 0;
                        top: 0;
                        transition: border-color 150ms, opacity 150ms;
                        z-index: 1;
                    }
                    .Card__link:hover,
                    .Card__link:focus {
                        text-decoration-color: hsla(var(--card-hover-color), 1);
                    }
                    .Card__link:hover::after,
                    .Card__link:focus::after {
                        opacity: 1;
                    }
                    .Card__link:focus {
                        outline: none;
                        text-decoration-color: currentColor;
                    }

                    .Card__heading {
                        line-height: 1.25;
                        margin-block-end: 0.5rem;
                    }

                    .Card--border .Card__link::after {
                        opacity: 1;
                    }
                    .Card--border .Card__link:not(:focus):not(:hover)::after {
                        border-color: hsla(var(--card-foreground-color), 0.5);
                    }

                    .Card--overlay {
                        --card-shadow-color: var(--theme-black);
                        --card-foreground-color: var(--theme-white);
                        --card-background-color: var(--theme-dark);
                        --card-link-color: var(--theme-white);
                        --card-hover-color: var(--theme-white);
                        grid-template-rows: [media-start] 1fr [overlay-start] 1rem [main-start] auto [main-end overlay-end media-end];
                    }
                    .Card--overlay::before {
                        background: linear-gradient(
                            to top,
                            hsla(var(--card-shadow-color), 0.8) 20%,
                            hsla(var(--card-shadow-color), 0.3) 60%,
                            transparent
                        );
                        border-bottom-left-radius: 1rem;
                        border-bottom-right-radius: 1rem;
                        content: "";
                        display: block;
                        grid-column: 1/-1;
                        grid-row: overlay-start/overlay-end;
                        overflow: hidden;
                    }
                    .Card--overlay .Card__main p {
                        text-shadow: 0 0.0625rem 0.0625rem
                            hsl(var(--card-shadow-color));
                    }
                    .Card--overlay .Card__main a {
                        color: hsl(var(--card-link-color));
                    }
                    .Card--overlay .Card__main a:active,
                    .Card--overlay .Card__main a:visited {
                        color: hsl(var(--card-link-color));
                    }
                    .Card--overlay .Card__main a:hover,
                    .Card--overlay .Card__main a:focus {
                        color: hsl(var(--card-hover-color));
                    }

                    .Card--square {
                        --card-ratio: auto 1/1;
                    }

                    .Card--photo {
                        --card-ratio: auto 4/3;
                    }

                    .Card--portrait {
                        --card-ratio: auto 3/4;
                    }

                    .Card--wide {
                        --card-ratio: auto 16/9;
                    }

                    @supports not (aspect-ratio: 1/1) {
                        .Card__media {
                            height: 100%;
                            padding-block-end: 100%;
                        }
                        .Card--square .Card__media {
                            padding-block-end: 100%;
                        }
                        .Card--photo .Card__media {
                            padding-block-end: 75%;
                        }
                        .Card--portrait .Card__media {
                            padding-block-end: 133.3333333333%;
                        }
                        .Card--wide .Card__media {
                            padding-block-end: 56.25%;
                        }
                    }
                    @font-face {
                        font-family: "Raleway";
                        src: url("https://assets.codepen.io/85421/Raleway-VariableFont.woff2")
                            format("woff2");
                        font-display: swap;
                        font-weight: 1 900;
                        font-style: normal;
                        unicode-range: U+0020-007F, U+00A0-00FF, U+0100-017F,
                            U+2000-206F;
                    }
                    @font-face {
                        font-family: "Fallback";
                        size-adjust: 104%;
                        ascent-override: 96%;
                        src: local("Arial");
                    }
                    html {
                        line-height: 1.5;
                        font-family: Raleway, Fallback, sans-serif;
                    }

                    body {
                        margin: 0;
                    }

                    img {
                        display: block;
                        height: auto;
                        max-width: 100%;
                    }

                    .Main {
                        margin: 0 auto;
                        max-width: calc(90rem + 10vw);
                        padding: 1.5rem 5vw;
                        width: 100%;
                    }
                    .Main > *:first-child {
                        margin-block-start: 0;
                    }
                    .Main > h1 {
                        font-weight: 800;
                    }
                    .Main > h1,
                    .Main > h2,
                    .Main > h3 {
                        line-height: 1.25;
                        margin-block: 1.5rem 1rem;
                    }
                    .Main > ul {
                        margin-block: 1.5rem;
                        padding-inline: 2rem 0;
                    }
                    .Main > ul li {
                        margin-block: 0.5rem;
                    }
                    .Main > p {
                        margin-block: 1rem;
                    }
                    .Main a:not([class]) {
                        font-weight: 500;
                    }
                `}
            </style>
        </div>
    );
}
