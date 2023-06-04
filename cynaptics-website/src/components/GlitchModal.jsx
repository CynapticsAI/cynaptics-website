import parse from "html-react-parser";
import React from "react";

export default function GlitchModal({ text }) {
    return (
        <div>
            <div className="container">
                <h1 className="glitch5">{parse(text)}</h1>
            </div>
            <style jsx>
                {`
                    *,
                    *::before,
                    *::after {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        height: 100vh;
                        width: 100%;
                        font-family: Arial, Helvetica, sans-serif;
                    }

                    .container {
                        height: 100%;
                        width: 100%;
                        background-color: transparent;
                        display: grid;
                        place-items: center;
                    }
                    .glitch5 {
                        font-size: 2rem;
                        color: #ffffff;
                        letter-spacing: 0.6rem;
                        animation: glitch5 0.4s infinite forwards;
                        animation-direction: alternate-reverse;
                        position: relative;
                        user-select: none;
                    }

                    .glitch5::before {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);
                        animation: glitch51 0.3s infinite forwards;
                        animation-direction: alternate-reverse;
                        text-shadow: none;
                    }
                    .glitch5::after {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-50%);
                        animation: glitch52 0.3s infinite forwards;
                        animation-direction: alternate-reverse;
                        text-shadow: none;
                    }

                    @keyframes glitch5 {
                        20% {
                            text-shadow: 2px 0 #00ffff, -2px 0 #ff01ae;
                        }
                        60% {
                            text-shadow: 0 3px #ff01ae, 0 -3px #00ffff;
                        }
                        100% {
                            text-shadow: 2px 0 #00ffff, -2px 0 #ff01ae;
                        }
                    }

                    @keyframes glitch51 {
                        to {
                            transform: translate(-30px, -50%);
                            opacity: 0;
                        }
                    }

                    @keyframes glitch52 {
                        to {
                            transform: translate(30px, -50%);
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
}
