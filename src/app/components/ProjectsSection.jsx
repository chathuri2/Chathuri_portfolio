"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "MoodMate",
      description: "real-time emotion detection and voice recognition with virtual pets to support mental well-being",
      image: "/images/projects/project1.jpg",
      tag: ["All", "AI/ML"],
      gitUrl: "https://github.com/chathuri2/Moodmate",
      previewUrl: "https://www.figma.com/design/QmZ9sfsPXsxYZgQRv9pNpp/Moodmate-wireframe?t=q54sCOrt4mzAK7Wu-1",
      technologies: ["Python", "TensorFlow", "Flask", "React", "figma"]
    },
    {
      id: 2,
      title: "Crickinfo",
      description: "Sri Lankan Cricket Squad Selector ",
      image: "/images/projects/project2.png",
      tag: ["All", "Web","AI/ML","Design"],
      gitUrl: "https://github.com/chathuri2/CrickInfo",
      previewUrl: "https://www.figma.com/design/Indh6rpOvF7DEXRFFWieTS/CrickInfo?node-id=0-1&t=q54sCOrt4mzAK7Wu-1",
      technologies: ["React", "Flask", "scikit-learn", "pandas","figma"]
    },
    {
      id: 3,
      title: "NIC Decoder",
      description: "A Flutter-based NIC Decoder app that extracts and displays personal details from a Sri Lankan NIC number.",
      image: "/images/projects/project3.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/chathuri2/find_nicdecode",
      previewUrl: "",
      technologies: ["C++", "CMake", "Dart", "HTML","C"]
    },
    {
      id: 5,
      title: "My Portfolio",
      description: "A personal portfolio showcasing my skills, projects, and experiences",
      image: "/images/projects/project5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/chathuri2/Chathuri_portfolio",
      previewUrl: "",
      technologies: ["Figma", "React", "Tailwind CSS", "JavaScript","CSS"]
    },
    {id: 6,
      title: "The Novel Store",
      description: "simple Book Store application built with Flutter",
      image: "/images/projects/project6.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/chathuri2/The_novel_Store",
      previewUrl: "",
      technologies: ["C++", "CMake", "Dart", "HTML","C", "Flutter"]
    },
    {id: 7,
      title: "Authentication system",
      description: "This project is a simple Authentication System built with Flask and SQLite.",
      image: "/images/projects/project7.png",
      tag: ["All", "web"],
      gitUrl: "https://github.com/chathuri2/Authlab_Authentication-System",
      previewUrl: "https://your-design-system-demo.com",
      technologies: ["python", "Flask", "SQLite"]
    },
    {id: 8,
      title: "Attendmi",
      description: "Attendence Management system designed with figma.",
      image: "/images/projects/Attendmi.png",
      tag: ["All", "Design"],
      gitUrl: "https://www.figma.com/design/Hclo5aEYW9j1DRyJ4No3gu/AttendMi?node-id=0-1&t=IDW0Z6DDlmkg7xa0-1",
      previewUrl: "https://www.figma.com/design/Hclo5aEYW9j1DRyJ4No3gu/AttendMi?node-id=0-1&t=IDW0Z6DDlmkg7xa0-1",
      technologies: ["figma"]
    },
    {id: 9,
      title: "Learning Platform",
      description: "Learning Platform designed with figma.",
      image: "/images/projects/project9.png",
      tag: ["All", "Design"],
      gitUrl: "https://www.figma.com/design/9LzRydweU5JPCcxatwrXBj/Untitled?node-id=0-1&t=JIUxFFqqrAKHN79v-1",
      previewUrl: "https://www.figma.com/design/9LzRydweU5JPCcxatwrXBj/Untitled?node-id=0-1&t=JIUxFFqqrAKHN79v-1",
      technologies: ["figma"]
    }
  ];


  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
          My Projects
        </h2>
        <p className="text-[#ADB7BE] text-center mb-8 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in AI, web development, mobile apps, and design
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "AI/ML", "Web", "Mobile", "Design"].map((filterTag) => (
            <button
              key={filterTag}
              onClick={() => handleTagChange(filterTag)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                tag === filterTag
                  ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                  : "bg-[#181818] text-[#ADB7BE] hover:text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {filterTag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;