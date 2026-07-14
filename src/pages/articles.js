import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  return (
    <Link href={link} target="_blank">
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <Image
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </li>
  );
};

const FramerImage = motion(Image);
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 relative w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          width={500}
          height={250}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Article Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img="/images/articles/img1.png"
              title="How I Started DevOps - From Zero to AWS, VMs & Automation (Beginner Guide)"
              time="6 min read"
              summary="A beginner-friendly guide sharing my journey into DevOps, covering what DevOps really means, how virtual machines and AWS work, and the fundamentals of automation and Infrastructure as Code."
              link="https://medium.com/@DasunSandeepa/how-i-started-devops-from-zero-to-aws-vms-automation-beginner-guide-03ad72e3bb4c"
            />
            <FeaturedArticle
              img="/images/articles/img3.png"
              title="How I Learned Linux & Shell Scripting for DevOps (Part 2 — Real AWS Automation Project)"
              time="Medium Article"
              summary="A practical continuation of my DevOps journey covering Linux fundamentals, shell scripting, and a real AWS automation project for tracking cloud resources and exploring cost optimization."
              link="https://medium.com/@DasunSandeepa/how-i-learned-linux-shell-scripting-for-devops-part-2-real-aws-automation-project-38b86f0935c3"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Research Papers
          </h2>

          <ul>
            <Article
              title="Explainable Commit-Level Vulnerability Intelligence in DevSecOps Pipelines: A Structured Review and Synthesis"
              date="2026"
              link="/papers/Explainable-Commit-Level-Vulnerability-Intelligence-in-DevSecOps-Pipelines.pdf"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
