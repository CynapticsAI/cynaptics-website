"use client"

import Image from "next/image";
import React from "react";

export default function HeadCard({ ele, index }) {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  
	return (
		<div key={index} className="">
			<div className="container bg-white">
        <div className="shape">
            <div className="image" >
              <Image src={ele.image}  alt="Club Head Image"  />
            </div>
        </div>
        <h3>Muhammad Farhan</h3>
        <h3 className="title">Web Designer</h3>
        <p>Web Designer,UI designer,photographer,web developer,etc</p>
        <div className="icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
    </div>
			<style jsx>
				{`
					* {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        body {
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
        }
        
        .container {
            height: 450px;
            width: 300px;
            box-shadow: 0 10px 20px black;
            background-size: cover;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
            font-family: 'Abel', sans-serif;
        }
        
        .image {
            height: 150px;
            width: 150px;
            background-size: cover;
            border-radius: 50%;
            border: 8px solid white;
            position: relative;
            top: 200px;
            margin-left: 160px;
            box-shadow: 0 2px 15px rgb(58, 54, 54);
            transform: rotate(-20deg);
        }
        
        .shape {
            height: 250px;
            width: 400px;
            background-color: orange;
            margin-left: -20px;
            position: relative;
            top: -80px;
            box-shadow: 0 2px 15px black;
            transform: rotate(25deg);
        }
        
        h3 {
            margin-bottom: 10px;
            font-family: 'Montserrat', sans-serif;
        }
        
        .title {
            color: rgb(105, 100, 109);
        }
        
        p {
            padding-left: 30px;
            padding-right: 30px;
            color: rgb(105, 100, 109);
        }
        
        .icons {
            margin-top: 15px;
        }
        
        .icons i {
            margin-left: 10px;
            font-size: 20px;
            transition: 0.3s;
            color: rgb(40, 163, 194);
            ;
        }
        
        .icons i:hover {
            transform: scale(1.1);
            color: rgb(18, 192, 235);
        }
				`}
			</style>
		</div>
	);
}
