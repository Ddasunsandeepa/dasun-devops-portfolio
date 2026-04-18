import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition duration-300 hover:scale-105"
          width={700}
          height={300}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <p className="text-sm text-dark/60">
          Tech: React • Node.js • MongoDB • Express
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition duration-300 hover:scale-105"
          width={700}
          height={300}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-12"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="DevOps / Microservices Project"
                title=".NET Microservices with REST, gRPC & RabbitMQ"
                summary="Designed and implemented a distributed microservices architecture using .NET 9 with REST and gRPC communication, integrated RabbitMQ for asynchronous messaging, and prepared for containerized deployment."
                img="/images/projects/microo.png"
                link="https://github.com/Ddasunsandeepa/.NET-Microservices.git"
                github="https://github.com/Ddasunsandeepa/.NET-Microservices.git"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="DevOps Automation Project"
                title="AWS Cost Optimization  Reporter"
                summary="An automated AWS cost optimization tool built using Bash and AWS CLI. The script scans cloud resources such as EC2, S3, Lambda, and IAM, and generates daily reports to identify unused resources and reduce cloud costs."
                img="/images/projects/aws.png"
                link="https://github.com/Ddasunsandeepa/AWS-cost-optimization-reporter.git"
                github="https://github.com/Ddasunsandeepa/AWS-cost-optimization-reporter.git"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Full Stack Project"
                title="E-commerce Food Ordering System"
                summary="A full-stack online food ordering system developed as a university group project. Users can browse menus, add items to cart, place orders, and track deliveries."
                img="/images/projects/food-ordering.png"
                link="https://github.com/Ddasunsandeepa/Group-Project-Food-Ordering-System"
                github="https://github.com/Ddasunsandeepa/Group-Project-Food-Ordering-System"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="AI / NLP Project"
                title="Sinhala Multi-Agent Conversational Assistant"
                summary="A Sinhala NLP chatbot built with a multi-agent architecture and machine learning-based intent detection. It processes Sinhala text and routes queries to specialized conversational agents."
                img="/images/projects/chatbot.png"
                link="https://github.com/Ddasunsandeepa/sinhala-multi-agent-chatbot.git"
                github="https://github.com/Ddasunsandeepa/sinhala-multi-agent-chatbot.git"
              />
            </div>

            {/* <div className="col-span-6">Project-3</div>

            <div className="col-span-6">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
