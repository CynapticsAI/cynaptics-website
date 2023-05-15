/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { NextSeo } from "next-seo";
import { useEffect, useRef, useCallback } from "react";
import useWindowSize from "@rooks/use-window-size";


const Stars = ({ vel = 1, radius = 1, starsCounter = 300 }) => {
	const canvasRef = useRef(null);
	const starsRef = useRef([]);
	const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
	const center = {
		x: innerWidth / 2,
		y: innerHeight / 2,
	};

	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		center.x = canvas.width / 2;
		center.y = canvas.height / 2;
	};

	useEffect(() => {
		const context = canvasRef.current.getContext("2d");
		context.lineCap = "round";

		const Star = function() {
			this.x = center.x;
			this.y = center.y;

			this.init = function() {
				this.radius = Math.random() * radius;
				this.x = center.x;
				this.y = center.y;
				this.lineWidth = 0;
				this.vel = {
					x: Math.random() * 10 - 5,
					y: Math.random() * 10 - 5,
				};
			};

			this.update = function() {
				this.vel.x *= 1.05;
				this.vel.y *= 1.05;
				this.lineWidth += 0.035;
				this.x0 = this.x;
				this.y0 = this.y;
				this.x += this.vel.x;
				this.y += this.vel.y;
				this.draw();
				if (this.isDead()) this.init();
			};

			this.draw = function() {
				context.beginPath();
				context.moveTo(this.x0, this.y0);
				context.lineTo(this.x, this.y);
				context.lineWidth = this.lineWidth;
				context.stroke();
			};

			this.isDead = function() {
				return (
					this.x < 0 ||
					this.x > canvasRef.current.width ||
					this.y < 0 ||
					this.y > canvasRef.current.height
				);
			};

			this.init();
			return this;
		};

		const stars = [];
		for (let i = 0; i < starsCounter; i++) {
			setTimeout(function() {
				stars.push(new Star());
			}, i * 30);
		}
		starsRef.current = stars;

		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [center.x, center.y, radius, resizeCanvas, starsCounter]);

	const render = useCallback(() => {
		const context = canvasRef.current.getContext("2d");
		context.fillStyle = "rgba(0, 0, 0, 0.8)";
		context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		context.strokeStyle = "white";
		for (let i = 0; i < starsRef.current.length; i++) {
			starsRef.current[i].update();
		}
		window.requestAnimationFrame(render);
	});

	useEffect(() => {
		render();
	}, [render]);

	return (
		<canvas
			ref={canvasRef}
			style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
		/>
	);
};

export default function ProjectLayout({ children }) {
	return (
		<div className=" overflow-hidden">
			<NextSeo
				title="The Cynaptics Club - Our Projects"
				description="The Cynaptics Club(AI/ML) - IIT INDORE"
			/>
			<Stars vel={1} radius={2} starsCounter={500} />
			{children}
		</div>
	);
}
