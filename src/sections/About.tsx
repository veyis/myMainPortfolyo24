import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
		emoji: "🥾", // Optionally handle missing icon here.
	},
	{
		title: "Photography",
		emoji: "📷", // Optionally handle missing icon here.
	},
	{
		title: "Traveling",
		emoji: "✈️", // Optionally handle missing icon here.
	},
	{
		title: "Gaming",
		emoji: "⚾️", // Optionally handle missing icon here.
	},
	{
		title: "Reading",
		emoji: "📚", // Optionally handle missing icon here.
	},
	{
		title: "Fitness",
		emoji: "🥾", // Optionally handle missing icon here.
	},
	{
		title: "Yoga",
		emoji: "🧘", // Optionally handle missing icon here.
	},
	{
		title: "Meditation",
		emoji: "🧘🏾‍♂️", // Optionally handle missing icon here.
	},
];

export const AboutSection = () => {
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

						<ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
						<ToolboxItems
							toolboxItems={toolboxItems}
							className="mt-6"
							itemsWrapperClassName="-translate-x-1/2"
						/>
					</Card>
          </div>


        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 ">
				
        	<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
						<CardHeader
							title="Beyond the Code"
							description="Explore the interests and hobbies that keep me inspired and creative."
							className="px-6 pt-6 "
						/>
						<div className="space-y-4 space-x-4 px-6">
							{hobbies.map((hobby) => (
								<div
									key={hobby.title}
									className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
								>
									<span className="font-medium text-gray-950 ">
										{hobby.title}
									</span>
									<span>{hobby.emoji}</span>
								</div>
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
           bg-gradient-to-r from-emerald-300 to-sky-400
           after:content-[''] after:absolute after:inset-0 after:outline-2 
           after:outline after:outline-offset-2 after:rounded-full
            after:outline-gray-950/30"
						>
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
