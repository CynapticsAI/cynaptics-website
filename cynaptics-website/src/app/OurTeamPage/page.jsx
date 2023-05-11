"use client";
import React, { useEffect, useRef } from "react";
import useWindowSize from "@rooks/use-window-size";
import Card from "../../components/Card";
export default function OurTeamPage() {
	

	return (
		<div id="">
			
			<div className="grid md:grid-cols-2 lg:grid-cols-3">
				{[1, 2, 3].map((ele, index) => {
					return (
						<div key={index}>
							<Card id={ele} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
