import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.jpg",
      projectName: "Munzai Solutions Website",
      projectLink: "https://munzaisolutions.com/",
      projectDescription:
        "This is a WordPress based website that uses Elementor as a page builder, and Astra as it's theme. It has a unique design and eye-catching graphical content that I've created using Canva.",
      projectTech: [
        "WordPress",
        "Elementor",
        "Astra",
        "GoDaddy",
        "Canva",
      ],
      projectExternalLinks: {
        github: "https://munzaisolutions.com/",
        externalLink: "https://munzaisolutions.com/",
      },
    },
    {
      image: "/project2.jpg",
      projectName: "Admin Dashboard",
      projectLink: "https://admin-dashboard-moin.netlify.app/",
      projectDescription:
        "This is a Admin Dashboard app made with React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.",
      projectTech: [
        "React",
        "Material UI",
        "Nivo Charts",
        "Formik",
        "Yup",
      ],
      projectExternalLinks: {
        github: "https://github.com/Muhammed-Moinuddin/admin-dashboard",
        externalLink: "https://admin-dashboard-moin.netlify.app/",
      },
    },
    {
      image: "/project3.jpg",
      projectName: "Video Sharing Platform",
      projectLink: "https://video-sharing-platform-moin.netlify.app/",
      projectDescription:
        "I made a Video-Sharing Platform like Youtube using Rapid API with React JS. It consist of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your App!",
      projectTech: [
        "React",
        "Rapid API",
        "Material UI",
      ],
      projectExternalLinks: {
        github: "https://github.com/Muhammed-Moinuddin/video-sharing-platform",
        externalLink: "https://video-sharing-platform-moin.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <Link href={projectLink} target="_blank" className="project-info-link"><h3 className="project-info-title">{projectName}</h3></Link>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;


                