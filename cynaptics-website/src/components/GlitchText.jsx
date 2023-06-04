import React from "react";
import parse from "html-react-parser";
export default function GlitchText({ text }) {
    return (
        <div>
            <div className="glitch !text-3xl">{parse(text)}</div>
            <style jsx>
                {`
                    body {
                        background: black;
                        color: white;
                        margin: 0;
                        display: flex;
                        align-items: center;
                        height: 95vh;
                        justify-content: center;
                    }
                    .glitch {
                        animation: glitch 1s infinite;
                    }
                    @keyframes glitch {
                        0%,
                        50%,
                        100% {
                            transform: skewX(0deg) translateX(0px) scale(1, 1);
                            text-shadow: 0px 0 cyan;
                            clip-path: none;
                        }
                        5%,
                        15%,
                        25% {
                            transform: skewX(12deg) translateX(-5px)
                                scale(1, -1);
                            text-shadow: 0px -2rem magenta, -5px 5px #fe0000;
                        }
                        10%,
                        30% {
                            transform: skewX(25deg) translateX(15px) scale(1, 1);
                            text-shadow: -1rem 2rem yellow;
                        }
                        35%,
                        45% {
                            transform: skewX(-12deg) translateX(-5px)
                                scale(1, 1);
                            text-shadow: -1rem 2rem #fe0000, -10px 0px #ff00fe;
                        }
                        11%,
                        14% {
                            clip-path: polygon(
                                100% 0,
                                0 18%,
                                99% 46%,
                                0 78%,
                                100% 100%,
                                100% 57%,
                                0 100%,
                                100% 76%,
                                0 59%,
                                100% 35%,
                                0 37%,
                                100% 21%
                            );
                        }
                        12%,
                        16% {
                            clip-path: polygon(
                                0 51%,
                                0 29%,
                                100% 0,
                                0 14%,
                                99% 57%,
                                100% 23%,
                                0 100%,
                                100% 72%,
                                0 0,
                                100% 100%
                            );
                        }
                        13%,
                        17% {
                            clip-path: polygon(
                                0% 0%,
                                99% 0%,
                                99% 8%,
                                0% 7%,
                                0% 14%,
                                99% 15%,
                                100% 22%,
                                0% 22%,
                                0% 30%,
                                99% 30%,
                                99% 39%,
                                0% 37%,
                                0% 43%,
                                100% 45%,
                                100% 50%,
                                0% 49%,
                                0% 56%,
                                99% 57%,
                                99% 63%,
                                0% 63%,
                                0% 68%,
                                99% 68%,
                                99% 75%,
                                0% 76%,
                                0% 81%,
                                100% 83%,
                                100% 89%,
                                0% 88%,
                                0% 94%,
                                100% 95%,
                                100% 100%,
                                0% 99%
                            );
                        }
                    }
                `}
            </style>
        </div>
    );
}
