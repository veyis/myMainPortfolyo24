import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to bottom, transparent, black_10%, black_80%, transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Hero Rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px]  hero-ring"></div>
        <div className="size-[1020px]  hero-ring"></div>
        <div className="size-[1220px]  hero-ring"></div>

        {/* Spinning Star Icon */}
        <HeroOrbit size={700} rotation={0}>
          <StarIcon className="size-20 text-yellow-500" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={15}>
          <StarIcon className="size-12 text-yellow-500/30" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={98}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={-14}>
          <StarIcon className="size-8 text-yellow-500" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={79}>
          <SparkleIcon className="size-8 text-white/40" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={178}>
          <SparkleIcon className="size-6 text-white/40" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-4 text-white/40" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <SparkleIcon className="size-8 text-white/40" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={0}>
          <SparkleIcon className="size-4 text-white/40" />
        </HeroOrbit>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="w-24 h-24"
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 h-2.5 w-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span> 👋 </span>
            <span> Let's Connect </span>
          </button>
        </div>
      </div>
    </div>
  );
};