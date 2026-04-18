import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aws from "../../public/images/logos/aws.png";

const certifications = [
  {
    title: "AWS Knowledge: Amazon Q Developer Fundamentals",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    skills: ["AWS", "AI"],
    category: "Cloud",
    logo: "/images/logos/aws.png",
    link: "https://www.credly.com/badges/378bf6a6-9364-49e6-b05d-dbd2fc2a63d8/linked_in_profile",
  },
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Udemy",
    date: "Sep 2025",
    skills: ["Azure"],
    category: "Cloud",
    logo: "/images/logos/azure.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-edd0a8dd-fd04-411d-813f-a85072140450.pdf",
  },
  {
    title: "Ultimate DevOps Project Implementation",
    issuer: "Udemy",
    date: "Sep 2025",
    skills: ["DevOps", "CI/CD"],
    category: "DevOps",
    logo: "/images/logos/docker.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bbebe19c-b0bb-4a7b-852c-5a398e3c57ad.pdf",
  },
  {
    title: "Kubernetes for Beginners",
    issuer: "Udemy",
    date: "Sep 2025",
    skills: ["Kubernetes"],
    category: "DevOps",
    logo: "/images/logos/k8s.png",
    link: "https://www.udemy.com/certificate/UC-8a1f9b68-85fd-437d-af12-528730f7ade5/",
  },
  {
    title: "Complete Linux Training Course",
    issuer: "Udemy",
    date: "Sep 2025",
    skills: ["Linux"],
    category: "DevOps",
    logo: "/images/logos/linux.png",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c0420247-0472-4a69-8178-9c2fe2884c5e.pdf",
  },
  {
    title: "Oracle Cloud Foundations Associate",
    issuer: "Oracle",
    date: "Jul 2023",
    skills: ["Cloud"],
    category: "Cloud",
    logo: "/images/logos/oracal.png",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9CF6F61C4628B244BD9BDB6D7E856EE7ADF84B1BC6FE3F1FFEE5DE899D4BDFBF",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    date: "Jun 2024",
    skills: ["Python"],
    category: "Programming",
    logo: "/images/logos/google.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/D3K3JC6X4DW6",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "May 2023",
    skills: ["JavaScript"],
    category: "Programming",
    logo: "/images/logos/meta.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/D3K3JC6X4DW6",
  },
  {
    title: "Programming Fundamentals with C",
    issuer: "Duke University",
    date: "Aug 2023",
    skills: ["C", "Algorithms"],
    category: "Programming",
    logo: "/images/logos/duke.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/V3AA3D56UVAP",
  },
];

const categories = ["All", "Cloud", "DevOps", "Programming"];

const Certifications = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? certifications
      : certifications.filter((c) => c.category === active);

  return (
    <div className="my-40">
      {/* TITLE */}
      <h2 className="font-bold text-8xl mb-10 text-center">
        Certifications & Licenses
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? "bg-primary text-white"
                : "border-gray-400 dark:border-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl shadow-lg bg-light dark:bg-dark border border-gray-200 dark:border-gray-700"
          >
            {/* LOGO */}
            <Image
              src={cert.logo}
              alt={cert.issuer}
              className="mb-3"
              width={40}
              height={40}
            />

            {/* TITLE */}
            <h3 className="text-lg font-bold text-primary">{cert.title}</h3>

            {/* ISSUER */}
            <p className="text-sm text-dark/70 dark:text-light/70">
              {cert.issuer}
            </p>

            {/* DATE */}
            <p className="text-xs text-dark/60 dark:text-light/60 mb-3">
              Issued {cert.date}
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 mb-3">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* LINK */}
            {cert.link !== "#" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Show Credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
