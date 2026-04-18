import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, subtitle, time, description, result }) => {
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
        {result && (
          <p className="text-sm text-primary font-medium mb-1">{result}</p>
        )}
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-24 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            time="2023 – 2027"
            title="University of Sri Jayewardenepura"
            subtitle="BSc (Hons) Computing – Software Engineering"
            result="Current GPA: 3.876"
            description={[
              "Undergraduate in Software Engineering",
              "Focused on software development, system design, and DevOps practices",
              "Gaining experience in full stack and cloud-based systems",
            ]}
          />
          <Details
            time="Feb 2024 – Nov 2024"
            title="Institute of Java and Software Engineering (IJSE)"
            subtitle="CMJD Professional – Computer Software Engineering"
            description={[
              "Learned advanced Java and backend development concepts",
              "Worked with TypeScript and ORM-based systems",
              "Built practical software development projects",
            ]}
          />
          <Details
            time="Oct 2024 – Present"
            title="SLIIT"
            subtitle="Advanced Linux Administration"
            description={[
              "Learning Linux system administration",
              "Working with server configurations and system management",
            ]}
          />
          <Details
            time="Jan 2023 – Present"
            title="SLIIT"
            subtitle="Web Development & Designing"
            description={[
              "Frontend development using HTML, CSS, JavaScript",
              "Worked with Bootstrap and responsive design",
            ]}
          />

          <Details
            time="Jan 2022 – Sep 2022"
            title="Aquinas College of Higher Studies"
            subtitle="Diploma in English Language & Literature"
            description={[
              "Improved communication and professional writing skills",
            ]}
          />
          <Details
            time="2007 – 2021"
            title="President College, Kotte"
            subtitle="Secondary Education"
            description={[
              "GCE A/L: 3 B’s (Combined Maths, Physics, Chemistry)",
              "GCE O/L: 8 A’s and 1 B",
              "Active in sports and extracurricular activities",
            ]}
          />
          <Details
            time="2024 – Present"
            title="Self Learning & Certifications"
            subtitle="DevOps & Cloud"
            description={[
              "Completed DevOps learning path covering Docker, Kubernetes, CI/CD",
              "Hands-on practice with AWS cloud services",
              "Continuous learning through online platforms like Coursera and YouTube",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
