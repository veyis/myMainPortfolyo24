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
		title: "Figma",
		icon: "", // Optionally handle missing icon here.
	},
	{
		title: "CSS",
		icon: CSSIcon,
	},
	{
		title: "GitHub",
		icon: GithubIcon,
	},
	{
		title: "Netlify",
		icon: "", // Optionally handle missing icon here.
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
		<div className="pb-96">
			<SectionHeader
				eybrow="About Us" // Fixed typo from `eybrow` to `eyebrow`
				title="A glimpse into our story"
				description="Learn more about who I am and what I do, and how I can help you with your next project."
			/>

			<div className="space-y-8">
				<Card>
					<div className="mb-4">
						<StarIcon />
						<h3 className="text-lg font-semibold">My Reads</h3>
						<p className="text-gray-600">
							Explore the books shaping my perspective on design, technology,
							and life.
						</p>
					</div>
					<Image src={bookImage} alt="Book Cover" />
				</Card>

				<Card>
					<div className="mb-4">
						<StarIcon />
						<h3 className="text-lg font-semibold">My Toolbox</h3>
						<p className="text-gray-600">
							Explore the technologies and tools I use to craft exceptional
							digital experiences for my clients.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{toolboxItems.map((item) => (
							<div key={item.title} className="flex items-center gap-2">
								{item.icon ? (
									<TechIcon component={item.icon} />
								) : (
									<span>No icon available</span>
								)}
								<span>{item.title}</span>
							</div>
						))}
					</div>
				</Card>
				<Card>
					<div>
						<StarIcon />
						<h3 className="text-lg font-semibold">Beyond the Code</h3>
						<p className="text-gray-600">
							Explore the interests and hobbies that keep me inspired and
							creative.
						</p>
					</div>
					<div>
						{hobbies.map((hobby) => (
							<div key={hobby.title} className="flex items-center gap-2">
								<span>{hobby.title}</span>
								<span>{hobby.emoji}</span>
							</div>
						))}
					</div>
				</Card>

				<Card>
					<Image src={mapImage} alt="Map" />
					<Image src={smileMemoji} alt="Smiling Memoji" />
				</Card>
			</div>
		</div>
	);
};
