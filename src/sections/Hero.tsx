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
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin 
         spinDuration="10s">
          <StarIcon className="size-8 text-yellow-500" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin
          spinDuration="12s">
          <StarIcon className="size-5 text-yellow-500/30" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin
          spinDuration="6s">
          <SparkleIcon className="size-2 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin
          spinDuration="6s">
          <StarIcon className="size-10 text-yellow-500" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin
          spinDuration="10s">
          <SparkleIcon className="size-12 text-white/40" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin
          spinDuration="3s">
          <SparkleIcon className="size-8 text-white/40" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin
          spinDuration="4s">
          <SparkleIcon className="size-2 text-white/40" />
        </HeroOrbit>
        
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin
          spinDuration="3s">
          <SparkleIcon className="size-14 text-white/40" />
        </HeroOrbit>
        
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin
          spinDuration="8s">
          <StarIcon className="size-3 text-white/40" />
        </HeroOrbit>

        <HeroOrbit 
          size={800} 
          rotation={-72} 
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="4s"
          >

          <StarIcon className="size-24 text-white/20" />
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
            <div className="bg-green-500 h-2.5 w-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large">

            </div> </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
          Revolutionize Your Business with us!
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          From stunning Next.js websites to cutting-edge AI-driven strategies, we create digital experiences that convert. Let’s grow your brand in the new era of intelligent marketing.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Get Your Free Strategy</span>
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