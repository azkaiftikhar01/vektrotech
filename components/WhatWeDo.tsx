"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  siNodedotjs,
  siReact,
  siMongodb,
  siLinux,
  siGithub,
  siNextdotjs,
  siGit,
  siPostgresql,
  siTailwindcss,
  siTypescript,
  siDocker,
  siFigma,
  siPython,
  siUbuntu,
} from "simple-icons";

const techStack = [
  { name: "Node.js", icon: siNodedotjs, top: "5%", left: "3%", rotate: -8, delay: 0 },
  { name: "React", icon: siReact, top: "8%", right: "5%", rotate: 12, delay: 0.1 },
  { name: "MongoDB", icon: siMongodb, top: "28%", left: "1%", rotate: -15, delay: 0.2 },
  { name: "Linux", icon: siLinux, top: "30%", right: "2%", rotate: 8, delay: 0.3 },
  { name: "GitHub", icon: siGithub, top: "55%", left: "2%", rotate: -12, delay: 0.4 },
  { name: "Next.js", icon: siNextdotjs, top: "58%", right: "1%", rotate: 10, delay: 0.5 },
  { name: "Git", icon: siGit, top: "80%", left: "4%", rotate: -10, delay: 0.6 },
  { name: "PostgreSQL", icon: siPostgresql, top: "78%", right: "3%", rotate: 14, delay: 0.7 },
  { name: "Tailwind", icon: siTailwindcss, bottom: "8%", left: "8%", rotate: -12, delay: 0.8 },
  { name: "TypeScript", icon: siTypescript, bottom: "5%", right: "8%", rotate: 11, delay: 0.9 },
  { name: "Docker", icon: siDocker, top: "18%", left: "22%", rotate: -5, delay: 1.0 },
  { name: "Figma", icon: siFigma, top: "15%", right: "20%", rotate: 7, delay: 1.1 },
  { name: "Python", icon: siPython, bottom: "20%", left: "20%", rotate: -8, delay: 1.2 },
  { name: "Ubuntu", icon: siUbuntu, bottom: "18%", right: "22%", rotate: 9, delay: 1.2 },
];

const services = [
  { title: "Web Development" },
  { title: "Mobile Apps" },
  { title: "AI Assistants" },
  { title: "QA & Testing" },
  { title: "Cloud Infrastructure" },
  { title: "Custom Software" },
];

export default function WhatWeDo() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center pb-52 md:pb-20"
      style={{
        background: "linear-gradient(135deg, #F3F7FF 0%, #F9FAFB 50%, #EEF4FF 100%)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Central radial gradient */}
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(13, 132, 255, 0.06) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
        />
        
        {/* Blur circles */}
        <div
          className="absolute"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(109, 58, 207, 0.04) 0%, transparent 70%)",
            top: "15%",
            right: "10%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(13, 132, 255, 0.04) 0%, transparent 70%)",
            bottom: "10%",
            left: "8%",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Floating tech cards - Desktop only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              top: tech.top,
              left: tech.left,
              right: tech.right,
              bottom: tech.bottom,
            }}
            initial={{ scale: 0.6, opacity: 0, rotate: tech.rotate }}
            whileInView={{ scale: 1, opacity: 1, rotate: tech.rotate }}
            transition={{
              delay: tech.delay * 0.08,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Bobbing animation */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                delay: tech.delay * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              {/* Card container */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(13, 132, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* SVG Icon from SimpleIcons */}
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill={tech.icon.hex}
                  dangerouslySetInnerHTML={{ __html: tech.icon.svg }}
                />
              </div>
              
              {/* Label */}
              <p
                className="text-center text-xs font-medium mt-1 whitespace-nowrap"
                style={{ color: "#475569" }}
              >
                {tech.name}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central content */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-2xl px-6 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#0084FF" }}
          >
            What We Do
          </span>
        </motion.div>

        {/* Main heading with rotating service */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontFamily: "DM Serif Display",
              fontSize: "clamp(36px, 6vw, 56px)",
              lineHeight: 1.3,
              color: "#1B2A6B",
            }}
          >
            We build{" "}
            <motion.span
              key={currentServiceIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "linear-gradient(135deg, #0084FF, #6D3ACF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {services[currentServiceIndex].title}
            </motion.span>
            {"."}
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-center mt-4 mx-auto"
          style={{
            fontFamily: "DM Sans",
            fontSize: "16px",
            color: "#64748B",
            lineHeight: 1.6,
            maxWidth: "520px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          From web and mobile apps to AI assistants and automation, we combine cutting-edge technologies to build solutions that scale.
        </motion.p>

        {/* Services list */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {mounted && (
            <>
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  animate={
                    idx === currentServiceIndex
                      ? { scale: 1.1, boxShadow: "0 8px 20px rgba(13, 132, 255, 0.3)" }
                      : { scale: 1, boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" }
                  }
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 rounded-full text-center font-medium cursor-pointer"
                  style={{
                    backgroundColor:
                      idx === currentServiceIndex
                        ? "rgba(13, 132, 255, 0.15)"
                        : "rgba(13, 132, 255, 0.05)",
                    color: "#1B2A6B",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    border:
                      idx === currentServiceIndex
                        ? "1.5px solid rgba(13, 132, 255, 0.5)"
                        : "1px solid rgba(13, 132, 255, 0.2)",
                  }}
                  onClick={() => setCurrentServiceIndex(idx)}
                >
                  {service.title}
                </motion.div>
              ))}
            </>
          )}
        </motion.div>

        {/* Stats pills */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="px-6 py-3 rounded-full text-center"
            style={{
              backgroundColor: "rgba(13, 132, 255, 0.1)",
              border: "1px solid rgba(13, 132, 255, 0.3)",
              color: "#0084FF",
              fontFamily: "DM Sans",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            10+ Technologies
          </div>
          <div
            className="px-6 py-3 rounded-full text-center"
            style={{
              backgroundColor: "rgba(109, 58, 207, 0.1)",
              border: "1px solid rgba(109, 58, 207, 0.3)",
              color: "#6D3ACF",
              fontFamily: "DM Sans",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            6 Service Areas
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile tech scroll - only on mobile */}
      <motion.div
        className="md:hidden absolute bottom-0 left-0 right-0 z-20 overflow-x-auto"
        style={{
          paddingBottom: "40px",
          paddingTop: "20px",
          background: "linear-gradient(to top, #F3F7FF, rgba(243, 247, 255, 0.8), transparent)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-3 px-4 w-max">
          {techStack.slice(0, 6).map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.7 + idx * 0.05,
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(13, 132, 255, 0.3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill={tech.icon.hex}
                  dangerouslySetInnerHTML={{ __html: tech.icon.svg }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
