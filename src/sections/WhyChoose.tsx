import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const WhyChooseUsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="bg-gradient-to-r from-slate-200 to-slate-500 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-10 -z-10"
     
          ></div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Text Section */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Why Choose Us?</h2>
              <p className="text-sm md:text-base mt-2">
                We combine cutting-edge technologies like Next.js and AI-driven solutions to deliver fast, scalable, and SEO-optimized websites. Let us elevate your digital presence and unlock your business potential.
              </p>

              {/* Benefits List */}
              <ul className="mt-4 space-y-2 text-left">
                <li className="text-sm md:text-base">
                  <strong>AI Integration:</strong> Automate and optimize your marketing strategy.
                </li>
                <li className="text-sm md:text-base">
                  <strong>Next.js Expertise:</strong> Build fast and scalable websites.
                </li>
                <li className="text-sm md:text-base">
                  <strong>SEO Optimization:</strong> Boost your search engine rankings and visibility.
                </li>
                <li className="text-sm md:text-base">
                  <strong>Personalized Solutions:</strong> Tailored to fit your unique business needs.
                </li>
              </ul>
            </div>

            {/* Button Section */}
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition">
                <span className="font-semibold">Work With Us</span>
                <ArrowUpRightIcon className="size-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
