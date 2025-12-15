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
import { LinuxSysModules } from "../data/data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LinuxAdmin = () => {
  return (
    <>
      <Helmet>
        <title>Linux System Administrator | Adexbit EduTech Academy</title>
        <meta
          name="title"
          content="Linux System Administrator | Adexbit EduTech Academy"
        />
        <meta
          name="description"
          content="Become a job-ready Linux System Administrator. Learn Linux administration, server management, Docker containers, Ansible automation, networking, security, and real-world DevOps practices."
        />

        <meta
          name="og:title"
          content="Linux System Administrator | Adexbit EduTech Academy"
        />
        <meta
          name="og:description"
          content="A practical 2-month Linux System Administration program covering Linux, Docker, Ansible, networking, security, and automation."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://adexbitedutech.com/linux-admin"
        />

        <meta
          name="keywords"
          content="Linux System Administrator, Learn Linux in Nigeria, DevOps Linux, Docker, Ansible, RHCSA, Linux Server Administration, Adexbit EduTech"
        />
      </Helmet>

      <Navbar />

      <CouseDesc
        title="Linux System Administrator: Master Linux, Docker & Automation"
        desc="This hands-on program equips you with the practical skills required to manage Linux servers, automate system tasks, deploy containers, and secure production environments. Perfect for aspiring system administrators and DevOps engineers."
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

        {/* Main Content */}
        <div className="md:max-w-[700px] lg:max-w-[800px]">
          {/* About */}
          <div>
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <div className="flex gap-2 items-center">
              <p className="font-out text-2xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
                Made with
              </p>
              <p className="text-2xl mt-1 text-purple-300">
                <FaHeart />
              </p>
            </div>

            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              ABOUT THE COURSE
            </h1>
            <p className="pt-4 text-gray-700 text-lg text-justify leading-relaxed">
              The Linux System Administrator program is a 2-month intensive
              training designed to prepare you for real-world server
              administration roles. You’ll learn Linux fundamentals, networking,
              user and permission management, process control, security
              hardening, Docker containerization, and Ansible automation —
              skills used daily by system administrators and DevOps engineers.
            </p>
          </div>

          {/* What you'll learn */}
          <div className="pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-2xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              Highly Practical
            </p>

            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              What You'll Learn
            </h1>

            <ul className="pt-4 space-y-4 leading-relaxed">
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Install and manage Linux servers (Ubuntu & CentOS).
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Work confidently with the Linux terminal and file system.
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Manage users, groups, permissions, and system processes.
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Configure networking, SSH access, and secure Linux systems.
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Deploy and manage applications using Docker containers.
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Automate server tasks using Ansible playbooks.
              </li>
              <li className="flex gap-3 text-gray-700">
                <IoCheckmark className="text-purple-500" />
                Build real-world Linux administration projects for your
                portfolio.
              </li>
            </ul>
          </div>

          {/* Course content */}
          <div className="pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-2xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              A Perfectly Structured Course
            </p>

            <div className="font-mon font-bold my-2 text-xl text-black">
              <p className="pt-2 my-2">
                Price : &#x20A6;250,000
              </p>
              <p className="pt-2 my-2">Timing: Weekdays or Saturday</p>
              <p className="pt-2 my-2">Duration: 2-Months</p>
              <p className="pt-2 my-2">Format: Online, live interactive sessions</p>
              <p className="pt-2 my-2">Hands-on Labs & Projects</p>
              <p className="pt-2 my-2">Flexible Payment (Up to 2 installments)</p>
              <p className="pt-2 my-2">Class recordings available</p>
            </div>

            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>

            <CourseOutline modules={LinuxSysModules} />
          </div>

          {/* Target student */}
          <div className="pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              Target Student
            </p>

            <h1 className="text-2xl text-gray-700 font-semibold pt-8">
              Who Is This For?
            </h1>

            <p className="flex gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Beginners who want to start a career in system administration.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              IT professionals transitioning into DevOps or Cloud roles.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Students and graduates seeking hands-on Linux skills.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700">
              <IoCheckmark className="text-purple-500" />
              Anyone preparing for Linux certifications (RHCSA, Linux+).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LinuxAdmin;
