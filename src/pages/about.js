import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profpic from "../../public/images/profile/dasun.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill";
import Experiance from "@/components/Experiance";
import Education from "@/components/Education";
import Certifications from "@/components/Certificates";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="text-gray-800 font-medium">
                Hi, I&lsquo;m Dasun, a final-year Software Engineering
                undergraduate with a strong focus on DevOps and Full Stack
                Development.
              </p>

              <p className="text-gray-800 my-3 font-medium">
                I have hands-on experience in building modern, scalable web
                applications and deploying them using cloud and DevOps
                practices. My work involves developing applications with the
                MERN stack, containerizing them using Docker, and orchestrating
                deployments with Kubernetes to ensure scalability and
                reliability.
              </p>

              <p className="text-gray-800 font-medium my-3">
                I am particularly interested in automation and continuous
                integration/continuous deployment (CI/CD). I have worked with
                tools like Jenkins and GitHub Actions to automate build, test,
                and deployment pipelines, helping to streamline development
                workflows and improve efficiency.
              </p>
              <p className="text-gray-800 font-medium my-3">
                Currently, I am seeking opportunities to apply my skills in
                real-world environments, contribute to impactful projects, and
                grow as a DevOps Engineer.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8
"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profpic}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Technologies
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Certifications
                </h2>
              </div>
            </div>
          </div>
          <Skill />
          <Experiance />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
};

export default about;
