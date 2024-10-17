import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets: ['latin'], variable:"--font-sans"});
const calistoga = Calistoga({subsets: ['latin'], variable:"--font-serif", weight: "400"});  


export const metadata: Metadata = {
  title: "pxlPeak: Innovative Digital Web Agency | AI-Driven Digital Marketing Solutions",
  description: "Elevate your business with PxlPeak, a top-ranked digital web agency. We specialize in fast, SEO-optimized Next.js websites, AI-powered marketing, and innovative content creation to drive growth and success.",
  
  // SEO Keywords
  keywords: [
    "Digital Web Agency",
    "Next.js Development",
    "AI-Powered Marketing",
    "SEO Optimization",
    "Website Development",
    "Content Creation",
    "AI Integration",
    "Fast Websites",
    "Scalable Web Solutions",
    "AI marketing automation",
    "custom Next.js solutions",
    "content strategy for SEO",
    "fast-loading websites",
    "innovative web agency"
  ],

  // Canonical URL
  alternates: {
    canonical: "https://www.pxlpeak.com",
  },

  // Open Graph Tags (For social media previews)
  openGraph: {
    title: "pxlPeak: Innovative Digital Web Agency | Next.js Experts & AI-Driven Marketing Solutions",
    description: "Discover how PxlPeak uses Next.js development and AI-powered strategies to grow your business. Fast, scalable, and SEO-optimized web solutions.",
    url: "https://www.pxlpeak.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.pxlpeak.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Web Agency | pxlPeak AI-Powered Marketing Solutions",
      },
    ],
  },

  // Twitter Card (For Twitter previews)
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Web Agency | Next.js & AI-Powered Marketing",
    description: "Maximize your business potential with fast, scalable, and SEO-optimized web development and AI-driven strategies.",
    images: "https://www.pxlpeak.com/twitter-image.jpg", // Changed 'image' to 'images'
    // Removed 'url' property as it is not recognized
  },

  // Favicon
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],

  // Additional mobile optimization
  viewport: "width=device-width, initial-scale=1",

  // Robots for indexing control
  robots: "index, follow", // Optional: for public-facing pages
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
      "bg-gray-900 text-white antialiased font-sans"
      ) } 
      >
        {children}
        
      </body>
    </html>
  );
}



