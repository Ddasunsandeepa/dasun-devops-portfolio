import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer inline-block overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto transition duration-300 hover:scale-105"
          width={700}
          height={300}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
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
          Tech: • SpringBoot • PostgreSQL • React • Node.js • MongoDB • Express
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
            {/* ====================================================== */}
            {/* DEVOPS / CLOUD / PLATFORM ENGINEERING PROJECTS */}
            {/* ====================================================== */}

            <div className="col-span-12">
              <FeaturedProject
                type="DevOps / GitOps / Cloud Platform"
                title="Enterprise Multi-Cluster GitOps Platform"
                summary="Architected a hub-and-spoke GitOps platform across AWS EKS clusters, centralizing application delivery with Argo CD. Deployed a 5-component cloud-native application and implemented Kubernetes persistence using StatefulSets, PVCs, and AWS EBS CSI-backed storage."
                img="/images/projects/img1.png"
                link="https://github.com/Ddasunsandeepa/Enterprise-Multi-Cluster-GitOps-Platform.git"
                github="https://github.com/Ddasunsandeepa/Enterprise-Multi-Cluster-GitOps-Platform.git"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="DevSecOps / CI/CD / GitOps Project"
                title="End-to-End DevSecOps Pipeline with Kubernetes & GitOps"
                summary="Built an end-to-end DevSecOps pipeline automating testing, static analysis, container builds, Trivy vulnerability scanning, immutable Git SHA image publishing to GHCR, and Git-driven continuous deployment with Kubernetes and Argo CD."
                img="/images/projects/img2.png"
                link="YOUR_GITHUB_LINK"
                github="YOUR_GITHUB_LINK"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="DevOps / Cloud-Native Microservices Platform"
                title="Enterprise DevOps Control Center"
                summary="Architected a 5-component containerized DevOps platform using React, Spring Cloud Gateway, Spring Boot microservices, PostgreSQL, and Docker Compose. Implemented 10+ REST API operations and a dedicated CI/CD deployment-event API for centralized deployment visibility."
                img="/images/projects/img3.png"
                link="https://github.com/Ddasunsandeepa/enterprise-devops-control-center.git"
                github="https://github.com/Ddasunsandeepa/enterprise-devops-control-center.git"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="DevOps / AWS Configuration Automation"
                title="Multi-Node AWS Configuration Automation"
                summary="Automated configuration across multiple AWS EC2 nodes from a centralized Ansible control node using grouped inventories, reusable roles, SSH authentication, Jinja2 templates, and handlers, with idempotent execution across converged infrastructure."
                img="/images/projects/img4.png"
                link="https://github.com/Ddasunsandeepa/ansible-server-configuration-automation.git"
                github="https://github.com/Ddasunsandeepa/ansible-server-configuration-automation.git"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="DevOps / AWS Cloud Automation"
                title="AWS Cost Optimization Reporter"
                summary="Built an automated AWS resource analysis tool using Python, Boto3, and Bash to inspect cloud resources and identify cost-review candidates including stopped EC2 instances, unattached EBS volumes, and unassociated Elastic IPs, with scheduled reporting through Linux cron."
                img="/images/projects/aws.png"
                link="https://github.com/Ddasunsandeepa/AWS-cost-optimization-reporter.git"
                github="https://github.com/Ddasunsandeepa/AWS-cost-optimization-reporter.git"
              />
            </div>

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

            {/* ====================================================== */}
            {/* EXISTING PROJECTS */}
            {/* ====================================================== */}

            <div className="col-span-6">
              <Project
                type="AI / NLP Project"
                title="Sinhala Multi-Agent Conversational Assistant"
                summary="A Sinhala NLP chatbot built with a multi-agent architecture and machine learning-based intent detection. It processes Sinhala text and routes queries to specialized conversational agents."
                img="/images/projects/chatbot.png"
                link="https://github.com/Ddasunsandeepa/sinhala-multi-agent-chatbot.git"
                github="https://github.com/Ddasunsandeepa/sinhala-multi-agent-chatbot.git"
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
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
