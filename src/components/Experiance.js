import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, subtitle, time, description }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {/* TIME */}
        <span className="text-dark/75 font-medium mb-1">{time}</span>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-primary capitalize">{title}</h3>

        {/* SUBTITLE */}
        <h4 className="text-lg font-semibold text-dark/75 mb-2">{subtitle}</h4>

        {/* DESCRIPTION LIST */}
        <ul className="list-disc ml-5 text-dark/80">
          {description.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};
const Experiance = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-24 w-full text-center">
        Development Journey
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            time="2025 – Present"
            title="DevOps & Cloud Engineering"
            subtitle="Hands-on Practical Experience"
            description={[
              "Implementing CI/CD pipelines using Jenkins and GitHub Actions",
              "Containerizing applications with Docker and managing deployments using Kubernetes",
              "Working with AWS services including EC2, S3, IAM, and VPC",
              "Building and deploying scalable, production-ready applications",
            ]}
          />
          <Details
            time="2024 – 2025"
            title="Full Stack Development"
            subtitle="MERN Stack Projects"
            description={[
              "Developed dynamic web applications using the MERN stack",
              "Designed and built RESTful APIs with authentication and authorization",
              "Integrated frontend and backend systems",
              "Improved application performance and scalability",
            ]}
          />
          <Details
            time="2023 – 2024"
            title="Programming & Web Development Foundations"
            subtitle="Core Learning Phase"
            description={[
              "Built strong foundation in JavaScript, PHP, and programming concepts",
              "Developed responsive web applications and mini projects",
              "Learned database design and system fundamentals",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiance;
