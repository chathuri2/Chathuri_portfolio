"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>Python, JavaScript, TypeScript</li>
                <li>React, Next.js, Node.js</li>
                <li>TensorFlow, PyTorch, Scikit-learn</li>
                <li>MongoDB, PostgreSQL, Firebase</li>
                <li>Figma, Adobe XD, UI/UX Design</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>BSC.(Hons) in Information Technology in Software Engineering,Sri Lanka Technology Campus, Padukka</li>
                
            </ul>
        )
    },
    {
        title: "Professional Focus",
        id: "professional",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>AI/ML Engineering</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white py-8 px-4 sm:py-16 xl:px-16">
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-[400px] md:h-[600px] relative">
                    <Image
                        src="/images/about-image.png"
                        alt="About me"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
                        I’m an undergraduate Software Engineering student with a passion for Full Stack Development. 
                        Skilled in React, Node.js, MongoDB, and UI/UX design, I enjoy creating responsive and user-friendly web applications.
                    </p>
                    <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
                        I’m a quick learner who is always eager to explore new technologies and expand my skill set. 
                        As a collaborative team player, I enjoy working with others to build impactful solutions that make a difference.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("professional")} 
                            active={tab === "professional"}
                        >
                            Professional Focus
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;