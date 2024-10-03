'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
	{
		title: "JavaScript",
		icon: JavascriptIcon,
	},
	{
		title: "React",
		icon: ReactIcon,
	},
	{
		title: "Chrome",
		icon: ChromeIcon,
	},
	{
		title: "HTML",
		icon: HTMLIcon,
	},
	{
		title: "CSS",
		icon: CSSIcon,
	},
	{
		title: "GitHub",
		icon: GithubIcon,
	},
];

const hobbies = [
	{
	  title: "Hiking",
	  emoji: "🥾",
	  left: "10%",
	  top: "10%",
	},
	{
	  title: "Photography",
	  emoji: "📷",
	  left: "30%",
	  top: "20%",
	},
	{
	  title: "Traveling",
	  emoji: "✈️",
	  left: "70%",
	  top: "15%",
	},
	{
	  title: "Gaming",
	  emoji: "⚾️",
	  left: "20%",
	  top: "60%",
	},
	{
	  title: "Reading",
	  emoji: "📚",
	  left: "50%",
	  top: "65%",
	},
	{
	  title: "Fitness",
	  emoji: "🥾",
	  left: "80%",
	  top: "40%",
	},
	{
	  title: "Yoga",
	  emoji: "🧘",
	  left: "10%",
	  top: "78%",
	},
	{
	  title: "Meditation",
	  emoji: "🧘🏾‍♂️",
	  left: "50%",
	  top: "82%",
	},
  ];
  
export const AboutSection = () => {
	const constraintRef = useRef(null);
	
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eybrow="About Us" // Fixed typo from `eybrow` to `eyebrow`
					title="A glimpse into our story"
					description="Learn more about who I am and what I do, and how I can help you with your next project."
				/>

				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
						<Card className="h-[320px] md:col-span-2">
							<CardHeader
								title="My Reads"
								description="Explore the books shaping my perspective "
								className=""
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={bookImage} alt="Book Cover" />
							</div>
						</Card>

						<Card className="h-[320px] p-0 md:col-span-3">
							<CardHeader
								title="My Toolbox"
								description="Explore the technologies and tools I use to craft exceptional digital experiences for my clients."
								className=""
							/>

							<ToolboxItems
								toolboxItems={toolboxItems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:15s]"
							/>

							<ToolboxItems
								toolboxItems={toolboxItems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:20s]"
							/>
						</Card>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
					<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
  <CardHeader
    title="Beyond the Code"
    description="Explore the interests and hobbies that keep me inspired and creative."
    className="px-6 pt-6"
  />
  <div className="relative flex-1" ref={constraintRef}>
    {hobbies.map((hobby) => (
      <motion.div
        key={hobby.title}
        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
        style={{
          left: hobby.left,
          top: hobby.top,
        }}
        drag
        dragConstraints={constraintRef}
      >
        <span className="font-medium text-gray-950">
          {hobby.title}
        </span>
        <span>{hobby.emoji}</span>
      </motion.div>
    ))}
  </div>
</Card>


						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								src={mapImage}
								alt="Map"
								className="h-full w-full object-cover object-left-top "
							/>

							<div
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full 
           
           after:content-[''] after:absolute after:inset-0 after:outline-2 
           after:outline after:outline-offset-2 after:rounded-full
            after:outline-gray-950/30"
							>
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
								<Image
									src={smileMemoji}
									alt="Smiling Memoji"
									className="w-20 h-20"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
