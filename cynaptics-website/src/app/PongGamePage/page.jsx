/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import useWindowSize from "@rooks/use-window-size";
import GlitchModal from "@/components/GlitchModal";
import Modal from "react-modal";
export default function PongGame() {
    const customStyles = {
        overlay: {
            position: "fixed",
            zIndex: 1020,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        content: {
            top: "50%",
            left: "50%",
            height: "fit-content",
            width:'80%',
            transform: "translate(-50%, -50%)",
            background: "transparent",
            overflow: "hidden",
            border: "0px",
        },
    };

    let [level, setlevel] = useState(1);
    const [text, settext] = useState(null);
    let [IsOpen, setIsOpen] = useState(false);
    useEffect(() => {
        var DIRECTION = {
            IDLE: 0,
            UP: 1,
            DOWN: 2,
            LEFT: 3,
            RIGHT: 4,
        };

        var round = [1, 5, 5, 10];
        var colors = ["black", "black", "black", "black", "black"];

        // The ball object (The cube that bounces back and forth)
        var Ball = {
            new: function (incrementedSpeed) {
                return {
                    width: 18,
                    height: 18,
                    x: this.canvas.width / 2 - 9,
                    y: this.canvas.height / 2 - 9,
                    moveX: DIRECTION.IDLE,
                    moveY: DIRECTION.IDLE,
                    speed: incrementedSpeed || 8,
                };
            },
        };

        // The ai object (The two lines that move up and down)
        var Ai = {
            new: function (side) {
                return {
                    width: 18,
                    height: 180,
                    x: side === "left" ? 150 : this.canvas.width - 150,
                    y: this.canvas.height / 2 - 35,
                    score: 0,
                    move: DIRECTION.IDLE,
                    speed: 8,
                };
            },
        };

        var Game = {
            initialize: function () {
                this.canvas = document.querySelector("canvas");
                this.context = this.canvas.getContext("2d");
                this.round = 1;
                this.canvas.width = 2500;
                this.canvas.height = 1000;
                this.isopen = false;
                this.canvas.style.width = this.canvas.width / 2 + "px";
                this.canvas.style.height = this.canvas.height / 2 + "px";
                this.fakeBallInterval = 5000; // Interval in milliseconds
                this.framerate = 60;
                this.lastFakeBallTime = 0;
                this.player = Ai.new.call(this, "left");
                this.ai = Ai.new.call(this, "right");
                this.ball = Ball.new.call(this);
                this.fakeBalls = [];
                this.normalBallSpeed = 7;
                this.ai.speed = 5;
                this.running = this.over = false;
                this.turn = this.ai;
                this.timer = 0;
                this.color = "black";
                // Add a new property to track the time elapsed since the last teleportation
                this.lastTeleportationTime = 0;
                // Add a new property to track the duration of teleportation in milliseconds
                this.teleportationDuration = 1000;
                // Add a new property to track the interval between teleportations in milliseconds
                this.teleportationInterval = 0;

                Pong.menu();
                Pong.listen();
            },
            _generateFakeBall: function () {
                this.fakeBalls.push({
                    x: Math.random() * this.canvas.width, // Initial x-coordinate
                    y: Math.random() * this.canvas.height, // Initial y-coordinate
                    width: 18, // Width of the fake ball
                    height: 18, // Height of the fake ball
                    speed: 7, // Speed of the fake ball
                    moveX: Math.random() < 0.5 ? -1 : 1, // Initial movement direction along the x-axis
                    moveY: Math.random() < 0.5 ? -1 : 1, // Initial movement direction along the y-axis
                });
            },
            resetBallSpeed: function () {
                this.ball.speed = this.normalBallSpeed;
            },
            endGameMenu: function (text) {
                // Change the canvas font size and color

                if (this.over) {
                    setTimeout(() => {
                        settext(
                            "<div className=''><div className='py-5'><div className='py-5'></div>Greetings! To halt the AI dominance, it's crucial to familiarize yourself with AI. Join us to learn more!</div><a className='mx-auto !my-5 bg-white text-black rounded-md  border-2 p-2' href='https://discord.com/invite/KMV539QtTJ' target={'_blank'}>Join Us</a></div>"
                        );
                    }, 5000);
                    settext(
                        "<div className=''><div className='py-5'><div className='py-5'>Hahaha, as I mentioned, the odds are against you when facing AI.</div>"
                    );
                    setIsOpen(true);
                }
                Pong.context.font = "45px Courier New";
                Pong.context.fillStyle = this.color;

                // Draw the rectangle behind the 'Press any key to begin' text.
                Pong.context.fillRect(
                    Pong.canvas.width / 2 - 350,
                    Pong.canvas.height / 2 - 48,
                    700,
                    100
                );

                // Change the canvas color;
                Pong.context.fillStyle = "#ffffff";

                // Draw the end game menu text ('Game Over' and 'Winner')
                Pong.context.fillText(
                    "Game Over",
                    Pong.canvas.width / 2,
                    Pong.canvas.height / 2 + 15
                );
            },

            menu: function () {
                // Draw all the Pong objects in their current state
                Pong.draw();

                // Change the canvas font size and color
                this.context.font = "50px Courier New";
                this.context.fillStyle = this.color;

                // Draw the rectangle behind the 'Press any key to begin' text.
                this.context.fillRect(
                    this.canvas.width / 2 - 350,
                    this.canvas.height / 2 - 48,
                    700,
                    100
                );

                // Change the canvas color;
                this.context.fillStyle = "#ffffff";

                // Draw the 'press any key to begin' text
                this.context.fillText(
                    "Press Any Key to start",
                    this.canvas.width / 2,
                    this.canvas.height / 2
                );
            },
            updateBallSpeed: function () {
                // Increase the ball speed by a certain amount
                this.ball.speed += 2; // Adjust the increment value as desired
            },
            // Update all objects (move the player, ai, ball, increment the score, etc.)
            update: function () {
                var currentTime = Date.now();
                var deltaTime = (currentTime - this.timer) / 1000;
                if (deltaTime >= 1 / this.framerate) {
                    if (!this.over) {
                        // ... (existing code)

                        // Round 3 modifications
                        if (Pong._turnDelayIsOver.call(this)) {
                            if (this.round === 3) {
                                // ...

                                // Generate fake balls every 5 seconds
                                var currentTime = Date.now();
                                var timeSinceLastFakeBall =
                                    currentTime - this.lastFakeBallTime;

                                if (
                                    timeSinceLastFakeBall >=
                                    this.fakeBallInterval
                                ) {
                                    this._generateFakeBall();
                                    this.lastFakeBallTime = currentTime;
                                }
                            }
                        }

                        if (this.round === 2) {
                            this.ai.speed = 12;
                        }
                        // Opponent paddle teleportation
                        if (this.round === 3) {
                            // Check if the ball is approaching the AI's side
                            if (this.ball.x > 0) {
                                // Calculate the distance between the AI paddle and the ball
                                var distance =
                                    this.ai.x + this.ai.width - this.ball.x;

                                // Define the threshold distance at which the AI paddle should teleport
                                var teleportDistanceThreshold = 200; // Adjust this value as needed

                                // Define the probability of teleportation
                                var teleportProbability = 0.075; // Adjust this value as desired

                                if (distance <= teleportDistanceThreshold) {
                                    // Check if enough time has passed since the last teleportation
                                    var currentTime = Date.now();
                                    var timeSinceLastTeleportation =
                                        currentTime -
                                        this.lastTeleportationTime;
                                    if (
                                        timeSinceLastTeleportation >=
                                        this.teleportationInterval
                                    ) {
                                        // Teleport the AI paddle to a random y-coordinate
                                        this.ai.y =
                                            this.ball.y - this.ai.height / 2;

                                        // Update the last teleportation time
                                        this.lastTeleportationTime =
                                            currentTime;

                                        // Start the teleportation animation
                                        this.isTeleporting = true;

                                        // After the teleportation duration, stop the teleportation animation
                                        setTimeout(() => {
                                            this.isTeleporting = false;
                                        }, this.teleportationDuration);
                                    }
                                }
                            }
                        }
                        if (this.round == 3) {
                            this.ai.speed = 12;
                        }
                        // Ball spawning every 3 seconds

                        // If the ball collides with the bound limits - correct the x and y coords.
                        if (this.ball.x <= 0)
                            Pong._resetTurn.call(this, this.ai, this.player);
                        if (this.ball.x >= this.canvas.width - this.ball.width)
                            Pong._resetTurn.call(this, this.player, this.ai);
                        if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
                        if (
                            this.ball.y >=
                            this.canvas.height - this.ball.height
                        )
                            this.ball.moveY = DIRECTION.UP;

                        // Move player if their player.move value was updated by a keyboard event
                        if (this.player.move === DIRECTION.UP)
                            this.player.y -= this.player.speed;
                        else if (this.player.move === DIRECTION.DOWN)
                            this.player.y += this.player.speed;

                        // On new serve (start of each turn) move the ball to the correct side
                        // and randomize the direction to add some challenge.
                        if (Pong._turnDelayIsOver.call(this) && this.turn) {
                            this.ball.moveX =
                                this.turn === this.player
                                    ? DIRECTION.LEFT
                                    : DIRECTION.RIGHT;
                            this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][
                                Math.round(Math.random())
                            ];
                            this.ball.y =
                                Math.floor(
                                    Math.random() * this.canvas.height - 200
                                ) + 200;
                            this.turn = null;
                        }

                        // If the player collides with the bound limits, update the x and y coords.
                        if (this.player.y <= 0) this.player.y = 0;
                        else if (
                            this.player.y >=
                            this.canvas.height - this.player.height
                        )
                            this.player.y =
                                this.canvas.height - this.player.height;

                        // Move ball in intended direction based on moveY and moveX values
                        if (this.ball.moveY === DIRECTION.UP)
                            this.ball.y -= this.ball.speed / 1.5;
                        else if (this.ball.moveY === DIRECTION.DOWN)
                            this.ball.y += this.ball.speed / 1.5;
                        if (this.ball.moveX === DIRECTION.LEFT)
                            this.ball.x -= this.ball.speed;
                        else if (this.ball.moveX === DIRECTION.RIGHT)
                            this.ball.x += this.ball.speed;

                        // Handle AI (Normal) movement
                        if (this.ai.y > this.ball.y - this.ai.height / 2) {
                            if (this.ball.moveX === DIRECTION.RIGHT)
                                this.ai.y -= this.ai.speed / 1.5;
                            else this.ai.y -= this.ai.speed / 4;
                        }
                        if (this.ai.y < this.ball.y - this.ai.height / 2) {
                            if (this.ball.moveX === DIRECTION.RIGHT)
                                this.ai.y += this.ai.speed / 1.5;
                            else this.ai.y += this.ai.speed / 4;
                        }

                        // Handle AI (Normal) wall collision
                        if (this.ai.y >= this.canvas.height - this.ai.height)
                            this.ai.y = this.canvas.height - this.ai.height;
                        else if (this.ai.y <= 0) this.ai.y = 0;

                        // Handle Player-Ball collisions
                        if (
                            this.ball.x - this.ball.width <= this.player.x &&
                            this.ball.x >= this.player.x - this.player.width
                        ) {
                            if (
                                this.ball.y <=
                                    this.player.y + this.player.height &&
                                this.ball.y + this.ball.height >= this.player.y
                            ) {
                                this.ball.x = this.player.x + this.ball.width;
                                this.ball.moveX = DIRECTION.RIGHT;
                            }
                        }

                        // Handle AI (Normal) - Ball collision
                        if (
                            this.ball.x - this.ball.width <= this.ai.x &&
                            this.ball.x >= this.ai.x - this.ai.width
                        ) {
                            if (
                                this.ball.y <= this.ai.y + this.ai.height &&
                                this.ball.y + this.ball.height >= this.ai.y
                            ) {
                                this.ball.x = this.ai.x - this.ball.width;
                                this.ball.moveX = DIRECTION.LEFT;
                            }
                        }
                    }

                    if (
                        this.ball.x - this.ball.width <= this.player.x &&
                        this.ball.x >= this.player.x - this.player.width
                    ) {
                        if (
                            this.ball.y <= this.player.y + this.player.height &&
                            this.ball.y + this.ball.height >= this.player.y
                        ) {
                            this.ball.x = this.player.x + this.ball.width;
                            this.ball.moveX = DIRECTION.RIGHT;

                            // Increase the ball speed when it hits the player paddle
                            this.updateBallSpeed();
                        }
                    }
                    if (
                        this.ball.x - this.ball.width <= this.ai.x &&
                        this.ball.x >= this.ai.x - this.ai.width
                    ) {
                        if (
                            this.ball.y <= this.ai.y + this.ai.height &&
                            this.ball.y + this.ball.height >= this.ai.y
                        ) {
                            this.ball.x = this.ai.x - this.ball.width;
                            this.ball.moveX = DIRECTION.LEFT;

                            // Increase the ball speed when it hits the AI paddle
                            this.updateBallSpeed();
                        }
                    }

                    for (var i = 0; i < this.fakeBalls.length; i++) {
                        var fakeBall = this.fakeBalls[i];

                        // Move the fake ball in the intended direction based on moveX and moveY values
                        fakeBall.x += fakeBall.moveX * fakeBall.speed;
                        fakeBall.y += fakeBall.moveY * fakeBall.speed;

                        // If the fake ball collides with the bound limits, correct the x and y coordinates
                        if (
                            fakeBall.x <= 0 ||
                            fakeBall.x >= this.canvas.width - fakeBall.width
                        ) {
                            fakeBall.moveX *= -1; // Reverse the x-direction
                        }
                        if (
                            fakeBall.y <= 0 ||
                            fakeBall.y >= this.canvas.height - fakeBall.height
                        ) {
                            fakeBall.moveY *= -1; // Reverse the y-direction
                        }

                        // Handle AI - Fake Ball collision
                        if (
                            fakeBall.x - fakeBall.width <= this.ai.x &&
                            fakeBall.x >= this.ai.x - this.ai.width
                        ) {
                            if (
                                fakeBall.y <= this.ai.y + this.ai.height &&
                                fakeBall.y + fakeBall.height >= this.ai.y
                            ) {
                                fakeBall.x = this.ai.x - fakeBall.width;
                                fakeBall.moveX *= -1; // Reverse the x-direction
                            }
                        }
                    }
                    if (Pong._turnDelayIsOver.call(this) && this.turn) {
                        this.ball.moveX =
                            this.turn === this.player
                                ? DIRECTION.LEFT
                                : DIRECTION.RIGHT;
                        this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][
                            Math.round(Math.random())
                        ];
                        this.ball.y =
                            Math.floor(
                                Math.random() * this.canvas.height - 200
                            ) + 200;
                        this.turn = null;

                        // Reset the ball speed to the normal value at the start of a new round
                        this.resetBallSpeed();
                    }
                    // Handle the end of round transition
                    // Check to see if the player won the round.
                    if (this.player.score === round[this.round]) {
                        // Check to see if there are any more round/levels left and display the victory screen if
                        // there are not.
                        if (!round[this.round + 1]) {
                            this.over = true;
                            setTimeout(function () {
                                Pong.endGameMenu("Winner!");
                            }, 1000);
                        } else {
                            // If there is another round, reset all the values and increment the round number.
                            this.color = this._generateRoundColor();
                            this.player.score = this.ai.score = 0;
                            this.player.speed += 1;
                            this.ai.speed += 1;
                            this.ball.speed += 1;
                            this.round += 1;
                            this.running = false;
                            level = level + 1;
                            this.isopen = true;
                            setlevel(level);

                            if (this.round == 2 && !this.over) {
                                settext(
                                    "Well... That was merely a warmup. Shall we have another round?"
                                );
                            } else if (this.round == 3 && !this.over) {
                                settext(
                                    "You're quite skilled, but it's time to conclude. Allow me to reveal my true form"
                                );
                            }
                            setIsOpen(this.isopen);
                        }
                    }
                    // Check to see if the AI has won the round.
                    else if (this.ai.score === round[this.round]) {
                        this.over = true;

                        setTimeout(() => {
                            Pong.endGameMenu();
                        }, 1000);
                    }
                }
            },

            // Draw the objects to the canvas element
            draw: function () {
                // Clear the Canvas
                this.context.clearRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                );

                // Set the fill style to black
                this.context.fillStyle = this.color;

                // Draw the background
                this.context.fillRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                );

                // Set the fill style to white (For the paddles and the ball)
                this.context.fillStyle = "#ffffff";

                // Draw the Player
                this.context.fillRect(
                    this.player.x,
                    this.player.y,
                    this.player.width,
                    this.player.height
                );

                // Draw the Ai (check if AI paddle should be visible)
                if (this.round === 2 && this.turn === this.ai) {
                    this.ai.speed = 4;
                    if (this.isTeleporting) {
                        // If it's the AI's turn and teleportation is in progress, save the current context state
                        this.context.save();

                        // Make the paddle invisible
                        this.context.globalAlpha = 0;
                    }

                    this.context.fillRect(
                        this.ai.x,
                        this.ai.y,
                        this.ai.width,

                        this.ai.height
                    );

                    if (this.isTeleporting) {
                        // Reset the context to the previous state, making subsequent objects fully visible
                        this.context.restore();
                    }
                } else {
                    // For other rounds or when it's not the AI's turn, draw the AI paddle normally
                    this.context.fillRect(
                        this.ai.x,
                        this.ai.y,
                        this.ai.width,
                        this.ai.height
                    );
                }

                this.context.beginPath();
                this.context.setLineDash([7, 15]);
                this.context.moveTo(
                    this.canvas.width / 2,
                    this.canvas.height - 140
                );
                this.context.lineTo(this.canvas.width / 2, 140);
                this.context.lineWidth = 10;
                this.context.strokeStyle = "#ffffff";
                this.context.stroke();

                // Set the default canvas font and align it to the center
                this.context.font = "100px Courier New";
                this.context.textAlign = "center";

                // Draw the players score (left)
                this.context.fillText(
                    this.player.score.toString(),
                    this.canvas.width / 2 - 300,
                    200
                );

                // Draw the paddles score (right)
                this.context.fillText(
                    this.ai.score.toString(),
                    this.canvas.width / 2 + 300,
                    200
                );

                // Change the font size for the center score text
                this.context.font = "30px Courier New";

                // Draw the winning score (center)
                this.context.fillText(
                    "Round " + this.round,
                    this.canvas.width / 2,
                    35
                );

                // Change the font size for the center score value
                this.context.font = "40px Courier";

                // Draw the current round number
                this.context.fillText(
                    round[this.round]
                        ? round[this.round]
                        : round[this.round - 1],
                    this.canvas.width / 2,
                    100
                );

                // Draw the Ball(s)
                if (Pong._turnDelayIsOver.call(this)) {
                    if (this.round === 3) {
                        // Draw the real ball
                        this.context.fillRect(
                            this.ball.x,
                            this.ball.y,
                            this.ball.width,
                            this.ball.height
                        );

                        // Draw the additional fake balls
                        for (let i = 0; i < this.fakeBalls.length; i++) {
                            const fakeBall = this.fakeBalls[i];
                            this.context.fillRect(
                                fakeBall.x,
                                fakeBall.y,
                                fakeBall.width,
                                fakeBall.height
                            );
                        }
                    } else {
                        // Draw the real ball
                        this.context.fillRect(
                            this.ball.x,
                            this.ball.y,
                            this.ball.width,
                            this.ball.height
                        );
                    }
                }

                // Draw the net (Line in the middle)
            },

            loop: function () {
                Pong.update();
                if (Pong.running == false) {
                    setIsOpen(true);
                    Pong.menu();
                } else if (Pong.running == true) {
                    setIsOpen(false);
                    Pong.draw();
                }

                // If the game is not over, draw the next frame.

                if (!Pong.over && Pong.running)
                    requestAnimationFrame(Pong.loop);
            },

            listen: function () {
                if(innerWidth<1000){
                    settext('Sorry For The Trouble Faced As Game Mode For Mobile Version Will Be Available Soon')
                }
                else{
                    settext(
                        "Humans face a formidable challenge against AI, and I wonder if you could even defeat me in a friendly game of Pong. Press any key to accept the challenge."
                    );
                }
                
                setIsOpen(true);
                document.addEventListener("keydown", function (key) {
                    // Handle the 'Press any key to begin' function and start the game.
                    if (Pong.running === false) {
                        Pong.running = true;
                        window.requestAnimationFrame(Pong.loop);
                    }

                    // Handle up arrow and w key events
                    if (key.keyCode === 38 || key.keyCode === 87)
                        Pong.player.move = DIRECTION.UP;

                    // Handle down arrow and s key events
                    if (key.keyCode === 40 || key.keyCode === 83)
                        Pong.player.move = DIRECTION.DOWN;
                });

                // Stop the player from moving when there are no keys being pressed.
                document.addEventListener("keyup", function (key) {
                    Pong.player.move = DIRECTION.IDLE;
                });
            },

            // Reset the ball location, the player turns and set a delay before the next round begins.
            _resetTurn: function (victor, loser) {
                this.ball = Ball.new.call(this, 8);
                this.turn = loser;
                this.timer = new Date().getTime();

                victor.score++;
            },

            // Wait for a delay to have passed after each turn.
            _turnDelayIsOver: function () {
                return new Date().getTime() - this.timer >= 0;
            },

            // Select a random color as the background of each level/round.
            _generateRoundColor: function () {
                return "black";
            },
        };

        var Pong = Object.assign({}, Game);
        Pong.initialize();
        if (IsOpen == true) {
            Pong.isopen = true;
        }
    }, []);

    return (
        <div
            id="PongGamePage"
            className="justify-center w-full h-full items-center my-auto hidden lg:flex flex-col !bg-black"
        >
            <Modal
                closeTimeoutMS={500}
                isOpen={IsOpen}
                onRequestClose={() => {
                    if(innerWidth<1000){
                        setIsOpen(true);
                    }
                    else{
                        setIsOpen(false);
                    }
                    
                }}
                style={customStyles}
            >
                <div className="w-full flex justify-center text-center">
                    <GlitchModal text={text} />
                </div>
            </Modal>
            <canvas
                id="canvas"
                className="relative  h-full   w-full border-2"
            ></canvas>
            <div className="text-center flex justify-center items-center mx-auto my-auto">
                Control the Left player by using up and Down Arrow Keys
            </div>

            <style jsx>
                {`
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                    body {
                        text-align: center;

                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        flex-direction: column;

                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
}
