import React from "react";
import {
  IoBookOutline,
  IoBulbOutline,
  IoCheckmarkDoneOutline,
  IoPerson,
  IoCheckmark,
} from "react-icons/io5";
import { GiRoundShield } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { LuPackageOpen } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import CouseDesc from "../components/CouseDesc";
import CourseOutline from "../components/CourseOutline";
import { AWSArchitectModules } from "../data/data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AwsSolutionArchitect = () => {
  return (
    <>
      <Helmet>
        <title>AwsSolutionArchitect| Adexbit's Edutech Academy</title>
        <meta
          name="title"
          content="AwsSolutionArchitect| Adexbit's Edutech Academy"
        />
        <meta
          name="description"
          content=" Adexbit's Edutech Academy is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />

        <meta
          name="og:title"
          content="AwsSolutionArchitect | Adexbit's Edutech Academy"
        />
        <meta
          name="og:description"
          content="Adexbit's Edutech Academy is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://adexbitedutech.com/solution-architect"
        />

        <meta
          name="keywords"
          content="Home page, Adexbit, Tech, Academy, Adexbit's,DevOp,Cloud Engineering, Learn Data Analytics, Learn Data science, Learn web development in Nigeria, Become a software engineer, frontend development, backend development, Learn HTML, Learn CSS, Learn JavaScript, Learn Python, Learn SQL,"
        ></meta>
      </Helmet>
      <Navbar />
      <CouseDesc
        title="AWS Solution Architect: Master Cloud Infrastructure & Deployment"
        desc="A complete 3-month hands-on training designed to prepare you for cloud careers using AWS. Learn Linux, networking, security, automation, and real-world AWS architecture — and get ready for the AWS Solutions Architect exam."
      />

      <div className="flex flex-col lg:flex-row min-h-screen justify-center gap-30 mt-20 p-4 md:p-8">
        {/* Sidebar */}
        <aside className='lg:sticky top-30 "w-[400px] self-start p-4'>
          <ul className="space-y-5">
            <li className="text-gray-700 text-xl flex items-center gap-3">
              <IoBookOutline /> About the course
            </li>
            <li className="text-gray-700 text-xl flex items-center gap-3">
              <IoBulbOutline /> What You'll Learn
            </li>
            <li className="text-gray-700 text-xl flex items-center gap-3">
              <IoCheckmarkDoneOutline /> Curriculum
            </li>
            <li className="text-gray-700 text-xl flex gap-3 items-center">
              <IoPerson /> Target Audience
            </li>
            <li className="text-gray-700 text-xl flex items-center gap-3">
              <GiRoundShield /> Prerequisites
            </li>
            <li className="text-gray-700 text-xl flex gap-3 items-center">
              <IoPerson /> Your Instructor
            </li>
            <li className="text-gray-700 text-xl flex gap-3 items-center">
              <AiOutlineMessage /> Reviews
            </li>
            <li className="text-gray-700 text-xl flex gap-3 items-center">
              <LuPackageOpen /> Exclusive Bonus
            </li>
          </ul>

          <Link
            to="/contact"
            className="bg-blue-950 text-white text-[20px] rounded-full px-8 py-3 mt-3 inline-block"
          >
            Enroll now
          </Link>
        </aside>

        {/* Main Section */}
        <div className="md:max-w-[700px] lg:max-w-[800px]">
          {/* Made With Love */}
          <div>
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>
            <div className="flex gap-2 items-center">
              <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
                Made with
              </p>
              <p className="text-2xl text-purple-300">
                <FaHeart />
              </p>
            </div>

            {/* ABOUT THE COURSE */}
            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              ABOUT THE COURSE
            </h1>

            <p className="pt-4 text-gray-700 text-lg text-justify leading-relaxed">
              Become a certified AWS Solution Architect in just 3 months. This
              program teaches you everything from Linux fundamentals to cloud
              networking, security, automation, and building scalable AWS
              architectures. Through hands-on labs, guided projects, and
              real-life scenarios, you'll learn how to design and deploy secure,
              highly available and cost-optimized cloud solutions using EC2,
              VPC, IAM, S3, RDS, Load Balancers, Auto Scaling, CloudFront, Route
              53, and more.
            </p>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              Highly Practical
            </p>

            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              What You'll Learn
            </h1>

            <ul className="pt-4 space-y-4 leading-relaxed">
              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Master Linux commands, system administration, package management
                & shell scripting.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Understand networking: IPs, subnets, routing, load balancers,
                firewalls & DNS.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Build and deploy cloud infrastructure using EC2, VPC, RDS, S3,
                EBS, IAM & CloudWatch.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Design scalable architectures using Auto Scaling, Load Balancing
                & Multi-AZ strategies.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Learn Infrastructure-as-Code (IaC) using AWS CloudFormation.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Configure routing, failover & global delivery using Route 53 &
                CloudFront.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Implement security best practices for identity, encryption,
                logging & compliance.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Build a complete cloud project and prepare for the AWS Solutions
                Architect Certification.
              </li>
            </ul>
          </div>

          {/* COURSE CONTENT */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              A Perfectly Structured Course
            </p>

            <div className="font-mon font-bold my-2 text-xl text-black">
              <p className="pt-2 my-2">
                Price : &#x20A6;250,000
              </p>
              <p className="pt-2 my-2">
                Timing: Week-days or Saturday 
              </p>
              <p className="pt-2 my-2">Duration: 2-Month</p>
              <p className="pt-2 my-2">
                Format: Online, live interactive sessions
              </p>
              <p className="pt-2 my-2">
                4 - Real Cloud Projects
              </p>
              <p className="pt-2 my-2">
                Flexible Payment (3 installments)
              </p>
              <p className="pt-2 my-2">
                Class recordings available after each session
              </p>
            </div>

            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>

            <CourseOutline modules={AWSArchitectModules} />
          </div>

          {/* TARGET STUDENT */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-xl bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              Target Student
            </p>

            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              Who Is This For?
            </h1>

            <p className="flex items-center gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Beginners wanting to start a high-paying career in cloud
              computing.
            </p>

            <p className="flex items-center gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              IT professionals who want hands-on AWS skills and
              certification-level knowledge.
            </p>

            <p className="flex items-center gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Developers, DevOps engineers and system admins looking to expand
              into cloud architecture.
            </p>

            <p className="flex items-center gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Anyone switching careers into cloud technology with no prior
              experience.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AwsSolutionArchitect;
