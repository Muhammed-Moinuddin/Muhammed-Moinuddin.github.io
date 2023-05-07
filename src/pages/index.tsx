import Head from "next/head";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Slider from "@/sections/Slider";
import { motion, useScroll } from "framer-motion";



const Index = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="app">
      <Head>
        <title>Muhammad Moinuddin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
          <Navbar />
          <SocialIcons />
          <Email />
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Slider/>
            <Contact />
          </main>
      <Footer/>
    </div>
  );
}

export default Index