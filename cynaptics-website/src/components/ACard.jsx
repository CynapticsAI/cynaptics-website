"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ACard({ ele }) {
    return (
        <>
            <Link
                aria-label="The link of the Respective Acheievement"
                className=""
                href={`/Achievements/${ele.title} + ${ele.id.toString()}`}
            >
                <div className="flex justify-center text-center">
                    <div className="nft flex justify-center">
                        <div className="main">
                            <div className="tokenImage flex justify-center">
                                <Image
                                    height={200}
                                    weight={200}
                                    placeholder="blur"
                                    className="tokenImage rounded-md"
                                    src={ele.image}
                                    alt="NFT"
                                />
                            </div>
                            {ele.title && (
                                <h2 className="text-white mt-5 font-extrabold text-xl">
                                    {ele.title}{" "}
                                </h2>
                            )}
                            {ele.Achievements && (
                                <div className="description !text-gray-100 font-bold">
                                    <div className="text-red-500">
                                        Achievements :
                                    </div>{" "}
                                    <div>{ele.Achievements}</div>
                                </div>
                            )}
                            {ele.domain && (
                                <div className="description !text-gray-100 font-bold">
                                    <div className="text-red-500">
                                        Domain Worked On :
                                    </div>{" "}
                                    <div>{ele.domain} </div>
                                </div>
                            )}


                            <hr />
                        </div>
                    </div>
                    <style jsx>
                        {`
                            body {
                                margin: 0;
                                font-family: -apple-system, BlinkMacSystemFont,
                                    "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
                                    "Cantarell", "Fira Sans", "Droid Sans",
                                    "Helvetica Neue", sans-serif;
                                -webkit-font-smoothing: antialiased;
                                -moz-osx-font-smoothing: grayscale;
                                background-color: #ffffff;
                                color: #eee;
                                user-select: none;
                            }
                            code {
                                font-family: source-code-pro, Menlo, Monaco,
                                    Consolas, "Courier New", monospace;
                            }
                            .nft {
                                user-select: none;
                                max-width: 400px;
                                margin: 5rem auto;
                                border: 1px solid #ffffff;
                                background-color: #ffffff;
                                background: linear-gradient(
                                    0deg,
                                    #282c34 0%,
                                    rgb(17, 0, 32) 100%
                                );
                                border-radius: 0.7rem;
                                backdrop-filter: blur(7px);
                                -webkit-backdrop-filter: blur(7px);
                                overflow: hidden;
                                transition: 0.5s all;
                            }
                            .nft hr {
                                width: 100%;
                                border: none;
                                border-bottom: 1px solid #88888855;
                                margin-top: 0;
                            }
                            .nft ins {
                                text-decoration: none;
                            }
                            .nft .main {
                                display: flex;
                                flex-direction: column;
                                width: 90%;
                                padding: 1rem;
                            }
                            .nft .main .tokenImage {
                                border-radius: 0.5rem;
                                max-width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                            .nft .main .description {
                                margin: 0.5rem 0;
                                color: #a89ec9;
                            }
                            .nft .main .tokenInfo {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            }
                            .nft .main .tokenInfo .price {
                                display: flex;
                                align-items: center;
                                color: #ee83e5;
                                font-weight: 700;
                            }
                            .nft .main .tokenInfo .price ins {
                                margin-left: -0.3rem;
                                margin-right: 0.5rem;
                            }
                            .nft .main .tokenInfo .duration {
                                display: flex;
                                align-items: center;
                                color: #a89ec9;
                                margin-right: 0.2rem;
                            }
                            .nft .main .tokenInfo .duration ins {
                                margin: 0.5rem;
                                margin-bottom: 0.4rem;
                            }
                            .nft .main .creator {
                                display: flex;
                                align-items: center;
                                margin-top: 0.2rem;
                                margin-bottom: -0.3rem;
                            }
                            .nft .main .creator ins {
                                color: #a89ec9;
                                text-decoration: none;
                            }
                            .nft .main .creator .wrapper {
                                display: flex;
                                align-items: center;
                                border: 1px solid #ffffff22;
                                padding: 0.3rem;
                                margin: 0;
                                margin-right: 0.5rem;
                                border-radius: 100%;
                                box-shadow: inset 0 0 0 4px #000000aa;
                            }
                            .nft .main .creator .wrapper img {
                                border-radius: 100%;
                                border: 1px solid #ffffff22;
                                width: 2rem;
                                height: 2rem;
                                object-fit: cover;
                                margin: 0;
                            }
                            .nft ::before {
                                position: fixed;
                                content: "";
                                box-shadow: 0 0 100px 40px #ffffff08;
                                top: -10%;
                                left: -100%;
                                transform: rotate(-45deg);
                                height: 60rem;
                                transition: 0.7s all;
                            }
                            .nft:hover {
                                border: 1px solid #ffffff44;
                                box-shadow: 0 7px 50px 10px #000000aa;
                                transform: scale(1.015);
                                filter: brightness(1.3);
                            }
                            .nft:hover ::before {
                                filter: brightness(0.5);
                                top: -100%;
                                left: 200%;
                            }
                            .bg {
                                position: fixed;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                            .bg h1 {
                                font-size: 20rem;
                                filter: opacity(0.5);
                            }
                        `}
                    </style>
                </div>
            </Link>
        </>
    );
}
