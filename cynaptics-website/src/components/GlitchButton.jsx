import Link from "next/link";
import React from "react";

export default function GlitchButton({ text, className, setIsOpen }) {
    return (
        <div className={className} id="body">
            <div className="button">
                <span className="caption">{text}</span>
            </div>
            <style jsx>
                {`
                    body {
                        background: #000;
                    }
                    .button {
                        border: 2px solid #fff;
                        color: #fff;
                        font-family: "RobotoMono", monospace;
                        padding: 20px;
                        width: 170px;
                        margin: auto;
                        text-align: center;
                        position: relative;
                    }
                    .button:hover {
                        cursor: pointer;
                    }
                    .button:hover span:after {
                        animation: glitch1 0.3s
                            cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
                            infinite;
                    }
                    .button:hover span:before {
                        animation: glitch1 0.3s
                            cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
                    }
                    span:after,
                    span:before {
                        padding: 20px;
                        width: 170px;
                        content: ${text};
                        position: absolute;
                        top: -2px;
                        left: -2px;
                        opacity: 0.7;
                    }
                    span:before {
                        border: 2px solid #0ff;
                        z-index: -2;
                        color: #0ff;
                    }
                    span:after {
                        border: 2px solid #f0f;
                        z-index: -2;
                        color: #f0f;
                    }
                    @keyframes glitch1 {
                        0% {
                            transform: translate(0);
                        }
                        20% {
                            transform: translate(-3px, 3px);
                        }
                        40% {
                            transform: translate(-3px, -3px);
                        }
                        60% {
                            transform: translate(3px, 3px);
                        }
                        80% {
                            transform: translate(3px, -3px);
                        }
                        100% {
                            transform: translate(0);
                        }
                    }
                `}
            </style>
        </div>
    );
}
