"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center h-screen text-white overflow-hidden">
            <div className="absolute inset-0 bg-animated"></div>
            <div className="relative z-10 text-center">
                <div className="py-8 px-4 sm:py-16 xl:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-9">
                        <div className="col-span-7 place-self-center text-center sm:text-left">
                            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                    Hello, I'm{" "}
                                </span>
                                <br />
                                <TypeAnimation
                                    sequence={[
                                        'Chathuri Nirosha',
                                        1000,
                                        'AI Engineer',
                                        1000,
                                        'Software Engineer',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'Mobile Developer',
                                        1000,
                                        'UI/UX Designer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h1>
                            <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
                                I'm an undergraduate Software Engineering student with a passion for AI and innovation. 
                                I work across web and mobile development, UI/UX design, and aspire to grow as an AI engineer. 
                                I love building smart, user-friendly solutions that make a difference.
                            </p>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/chathuri-nirosha-a9155b249/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-blue-500 hover:bg-slate-200 text-white"
                                >
                                    Hire Me
                                </a>
                                {/* download cv button*/ }
                                <a 
                                    href="/ChathuriNirosha_CV.pdf" 
                                    download="ChathuriNirosha_CV.pdf"
                                    className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 to-blue-500 hover:bg-slate-800 text-white mt-3 inline-block"
                                >
                                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                        Download CV
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                            <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                                <Image
                                    src="/images/hero-image.png"
                                    alt="hero image"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;