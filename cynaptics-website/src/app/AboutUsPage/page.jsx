"use client";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";


export default function AboutUspage() {
  return (
    <div id="" className="h-max">
      <h1 className="text-center py-10 text-3xl md:text-5xl font-bold z-[10000]">
        About Us
      </h1>
      <h6 className="text-center mx-3 text-lg p-3 sm-text-sm">
        {`Cynaptics Club is a dynamic community of students passionate about harnessing the power of AI and ML to push the boundaries of innovation. We believe that the future lies in the convergence of human intelligence and advanced technologies, and our club serves as a hub for knowledge sharing, skill development, and collaborative projects in this rapidly evolving field. Through a diverse range of activities, we provide valuable opportunities for our members to learn, experiment, and create. Our club organizes engaging guest talks by industry professionals who share their experiences, insights, and cutting-edge research, exposing our members to the latest trends and developments in AI and ML. We also host exhilarating hackathons, where you can put your skills to the test, collaborate with peers, and build innovative solutions within a limited timeframe. These hackathons foster teamwork, problem-solving, and creativity, and they serve as an excellent platform for honing your AI and ML skills. Additionally, we showcase our members' talents and achievements through exhibitions, where innovative AI and ML projects are displayed for the college community to see. These exhibitions not only celebrate our members' hard work but also inspire others to delve into the world of AI and ML. To cater to members at all levels of expertise, we regularly organize workshops that cover various AI and ML topics. From introductory sessions that lay the foundation of concepts to advanced deep learning techniques, our workshops provide a comprehensive learning experience that caters to your specific interests and goals. We understand the importance of collaboration and collective learning. Therefore, Cynaptics Club fosters an environment where members can share their ideas, exchange knowledge, and engage in thought-provoking conversations. These interactions facilitate a deeper understanding of AI and ML concepts and encourage critical thinking. Beyond technical learning, we actively bridge the gap between academia and industry. We invite industry professionals to our events, providing valuable networking opportunities and offering insights into career paths and industry trends. We also encourage internships, industry partnerships, and research opportunities to help our members gain practical experience and prepare for successful careers in this rapidly growing field.`}
      </h6>
      <h1 className="text-center py-3 text-3xl">Follow Our Socials</h1>
      <span className="flex justify-center pb-28">
        <Link
          href="https://www.youtube.com/@cynapticsiit9083 "
          target={"_blank"}
          className="text-white"
        >
          <AiFillYoutube className="w-7 h-7" />
        </Link>
        <Link
          href="https://discord.gg/KMV539QtTJ"
          target={"_blank"}
          className="ml-3 text-white"
        >
          <BsDiscord className="w-7 h-7" />
        </Link>
        <Link
          href="https://www.instagram.com/cynapticsclubiiti/"
          target={"_blank"}
          className="ml-3 text-white"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-7 h-7"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/company/cynaptics-club-iit-indore/mycompany/"
          target={"_blank"}
          className="ml-3 text-white"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            className="w-7 h-7"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>

      <style jsx>
        {`
          #body {
            width: 100%;
            height: 100%;
          }

          div {
            background: linear-gradient(
              45deg,
              #2196f3 0%,
              darken(#2196f3, 50%) 100%
            );
            background-size: 200% 200%;
            height: 100vh;
            width: 100vw;
            animation: background 6s ease infinite;
          }

          @keyframes background {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
