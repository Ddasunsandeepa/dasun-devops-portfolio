import React from "react";
import { motion } from "framer-motion";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Devops
        </motion.div>
        {/* 🔵 CORE DEVOPS (INNER RING) */}
        <Skills name="Docker" x="0vw" y="-12vw" />
        <Skills name="Kubernetes" x="12vw" y="0vw" />
        <Skills name="AWS" x="0vw" y="12vw" />
        <Skills name="CI/CD" x="-12vw" y="0vw" />

        {/* 🟢 FULL STACK (SECOND RING) */}
        <Skills name="React.js" x="-20vw" y="-10vw" />
        <Skills name="Next.js" x="20vw" y="-10vw" />
        <Skills name="Node.js" x="20vw" y="10vw" />
        <Skills name="Express.js" x="-20vw" y="10vw" />

        {/* 🟡 DATABASE + TOOLS */}
        <Skills name="MongoDB" x="-28vw" y="0vw" />
        <Skills name="MySQL" x="28vw" y="0vw" />
        <Skills name="Linux" x="0vw" y="-21vw" />
        <Skills name="Git" x="0vw" y="22vw" />

        {/* 🟣 ADVANCED / DEVOPS TOOLS */}
        <Skills name="Terraform" x="-35vw" y="-15vw" />
        <Skills name="Jenkins" x="35vw" y="-15vw" />
        <Skills name="GitHub Actions" x="35vw" y="15vw" />
        <Skills name="Bash" x="-35vw" y="15vw" />
      </div>
    </>
  );
};

export default Skill;
