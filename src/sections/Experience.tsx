import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Munzai Solutions",
      role: "WordPress Developer",
      url: "https://www.rapidops.com",
      start: "May 2022",
      end: "October 2022",
      shortDescription: [
        "I have experience designing and developing WordPress websites for multiple clients.",
        "I was responsible for maintaining, and updating the website and ensuring that the website is secure, performs optimally, and is regularly updated with the latest features and plugins.",
        "I've also created wireframes and graphical content for websites",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
        name: "Munzai Solutions",
        role: "Marketing Executive",
        url: "https://www.rapidops.com",
        start: "November 2022",
        end: "Present",
        shortDescription: [
          "I had experience of working with several marketing softwares and different aspects of this field.",
          "Throughout my work, I've created multiple HTML emails and have ran several marketing campaigns.",
          "I've also managed social media marketing and have created content for it",
          "I've worked with cross-functional teams, including sales, product development, and customer service, to align marketing strategies with business goals.",
        ],
      },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Working Experience </h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.role}
              >
                <span>{expereince.role}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;