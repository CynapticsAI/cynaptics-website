import React from "react";

export default function TextAnimation(props: { text: string }) {
    return (
        <div>
            <svg viewBox="10 10 1500 120">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    {props.text}
                </text>
            </svg>

            <style jsx>
                {`
                    body {
                        background: #e3f2fd;
                    }

                    svg text {
                        text-transform: uppercase;
                        animation: stroke 5s infinite alternate;
                        stroke-width: 2;
                        margin: 0px;
                        padding: 0px;
                        stroke: white;
                    }
                    @keyframes stroke {
                        10% {
                            fill: rgba(72, 138, 20, 0);
                            stroke: #ffffff;
                            stroke-dashoffset: 25%;
                            stroke-dasharray: 0 100%;
                            stroke-width: 3;
                        }
                        20% {
                            fill: rgba(72, 138, 20, 0);
                            stroke: #ffffff;
                        }
                        30% {
                            fill: rgba(72, 138, 20, 0);
                            stroke: #ffffff;
                        }
                        40% {
                            fill: rgba(72, 138, 20, 0);
                            stroke: #ffffff;
                        }
                        70% {
                            fill: rgba(72, 138, 20, 0);
                            stroke: rgb(255, 255, 255);
                            stroke-width: 3;
                        }
                        100% {
                            fill: #ffffff;
                            stroke: rgba(54, 95, 160, 0);
                            stroke-dashoffset: -25%;
                            stroke-dasharray: 50% 0;
                            stroke-width: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
}
