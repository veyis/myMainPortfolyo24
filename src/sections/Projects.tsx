import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import aiAgent from "@/assets/images/aiAgents.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
	{
		company: "Digital Innovators",
		year: "2024",
		title: "Next.js Website Development",
		results: [
			{ title: "Launched a blazing-fast, SEO-optimized website" },
			{ title: "Improved user engagement by 30%" },
			{ title: "Reduced bounce rate by 25%" },
		],
		link: "",
		image: darkSaasLandingPage,
	},
	{
		company: "AI Marketing Solutions",
		year: "2024",
		title: "AI-Driven Digital Marketing Campaign",
		results: [
			{ title: "Automated 40% of marketing workflows using AI agents" },
			{ title: "Increased ROI by 50%" },
			{
				title: "Optimized campaign performance with personalized AI strategies",
			},
		],
		link: "",
		image: lightSaasLandingPage,
	},
	{
		company: "Content Creators Hub",
		year: "2024",
		title: "AI-Enhanced Content Creation",
		results: [
			{ title: "Delivered SEO-optimized content with 20% faster turnaround" },
			{ title: "Increased organic traffic by 35%" },
			{ title: "Boosted brand visibility with AI-curated content" },
		],
		link: "",
		image: aiStartupLandingPage,
	},
	{
		company: "Tech Innovators",
		year: "2024",
		title: "AI Agent Integration",
		results: [
			{ title: "Integrated AI chatbots to automate customer service" },
			{ title: "Reduced response time by 60%" },
			{ title: "Improved customer satisfaction by 40%" },
		],
		link: "",
		image: aiAgent,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16 lg:py-4">
			<div>
				<div className="container">
					<div>
						<SectionHeader
							eyebrow="Website Development"
							title="Fast and SEO Optimized"
							description="Blazing-fast, SEO-optimized websites with Next.js that combine stunning design and top-tier performance."
						/>
						<hr className="border-t-2 border-gray-600/30 my-10" />

						<SectionHeader
							eyebrow="AI-Driven Digital Marketing"
							title="Automate and Optimize"
							description="Harness the power of AI to automate workflows, optimize campaigns, and deliver personalized experiences that boost your brand’s ROI."
						/>
						<hr className="border-t-2 border-gray-600/30 my-10" />

						<SectionHeader
							eyebrow="Content Creation"
							title="Enhanced Content"
							description="Engage your audience with AI-enhanced content creation that is informative, SEO-friendly, and tailored to your brand's voice."
						/>
							<hr className="border-t-2 border-gray-600/30 my-10" />

						<SectionHeader
							eyebrow="AI Agent Integration"
							title="Intelligent Automations"
							description="Integrate AI agents to handle customer interactions, automate tasks, and provide data-driven insights, giving your business the edge."
						/>
						<hr className="border-t-2 border-gray-600/30 my-10" />
					</div>

					<div className="mt-10 md:mt-20 flex flex-col gap-20 ">
						{portfolioProjects.map((project, projectIndex) => (
							<Card
								key={project.title}
								className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
								style={{
									top: `calc(64px + ${projectIndex * 40}px)`,
								}}
							>
								<div className="lg:grid lg:grid-cols-2 lg:gap-16">
									<div className="lg:pb-16">
										<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
											<span>{project.company}</span>
											<span> {project.year} </span>
										</div>
										<h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
											{project.title}
										</h3>
										<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
										<ul className="flex flex-col gap-4 mt-4 md:mt-5">
											{project.results.map((result) => (
												<li className="flex gap-2 text-sm md:text-base text-white/50">
													<CheckCircleIcon className="size-5 md:size-6 " />
													<span> {result.title}</span>
												</li>
											))}
										</ul>
										<a href="{project.link}">
											<button
												className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
                inline-flex items-center justify-center gap-2 mt-8 "
											>
												<span> Visit Live Site </span>
												<ArrowUpRightIcon className="size-4" />
											</button>
										</a>
									</div>
									<div className="relative">
										<Image
											src={project.image}
											alt={project.title}
											className="mt-8 -mb-4 md:-mb-0 lg:mt:0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
										/>
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
