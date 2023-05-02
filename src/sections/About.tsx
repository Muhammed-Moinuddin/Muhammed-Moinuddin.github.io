import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Building stunning websites from scratch is not just a job, it's my passion as a Web developer. I thrive on the challenge of solving complex problems and turning innovative ideas into practical solutions that drive real-world impact.
          </p>
          <p className="about-grid-info-text">
          I am currently pursuing a degree in Computer Science from the University of Karachi while also holding the position of Marketing Executive at {" "}
            <Link href="https://munzaisolutions.com/" className="link" target="_blank">
            Munzai Solutions,
            </Link> a Digital Sales Agency. With over two years of experience in the field of web development, I have developed a strong focus on WordPress development. 
          </p>

          <p className="about-grid-info-text">
          Nowadays, I am expanding my expertise in MERN stack and React Native. My goal is to become a proficient React.js developer and leverage my skills to create even more dynamic and innovative applications.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">WordPress</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js / Express.js</li>
            <li className="about-grid-info-list-item">Mongodb</li>
            <li className="about-grid-info-list-item">Canva</li>
            <li className="about-grid-info-list-item">Bootstrap / MUI</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/moin-profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;