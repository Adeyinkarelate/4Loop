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
import { FrontendModules } from "../data/data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Frontend = () => {
  return (
    <>
    <Helmet>
        <title>Frontend| Adexbit's Edutech Academy</title>
        <meta name="title" content="Frontend| Adexbit's Edutech Academy" />
        <meta
          name="description"
          content=" Adexbit's Edutech Academy is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />

        <meta
          name="og:title"
          content="Frontend | Adexbit's Edutech Academy"
        />
        <meta
          name="og:description"
          content="Adexbit's Edutech Academy is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://adexbitedutech.com/front-end"
        />

        <meta
          name="keywords"
          content="Home page, Adexbit, Tech, Academy, Adexbit's,DevOp,Cloud Engineering, Learn Data Analytics, Learn Data science, Learn web development in Nigeria, Become a software engineer, frontend development, backend development, Learn HTML, Learn CSS, Learn JavaScript, Learn Python, Learn SQL,"
        ></meta>
      </Helmet>
      <Navbar />
      <CouseDesc
        title="Frontend Development: Mastering the Froontend Developent"
        desc="Whether you're starting your tech journey or upgrading your digital skills, this program gives you everything you need to become job-ready and confidently step into the world of Frontend development."
      />
      <div className="flex flex-col lg:flex-row min-h-screen justify-center gap-30 mt-20 p-4 md:p-8">
        {/* Side bar */}
        <aside className='lg:sticky top-30 "w-[400px]  self-start p-4'>
          <ul className="space-y-5">
            <li className=" text-white  text-xl  flex items-center  gap-3">
              <IoBookOutline /> About the course
            </li>
            <li className=" text-white  text-xl flex items-center gap-3 ">
              <IoBulbOutline />
              What You'll Learn
            </li>
            <li className=" text-white  text-xl flex items-center gap-3">
              {" "}
              <IoCheckmarkDoneOutline />
              Curriculum
            </li>
            <li className=" text-white  text-xl flex gap-3 items-center">
              {" "}
              <IoPerson />
              Target Audience
            </li>
            <li className=" text-white  text-xl flex items-center gap-3">
              {" "}
              <GiRoundShield />
              Prerequisites
            </li>
            <li className=" text-white  text-xl flex gap-3 items-center">
              {" "}
              <IoPerson />
              Your Instructor
            </li>
            <li className=" text-white  text-xl flex gap-3 items-center">
              {" "}
              <AiOutlineMessage />
              Reviews
            </li>
            <li className=" text-white  text-xl flex gap-3 items-center">
              {" "}
              <LuPackageOpen />
              Exclusive Bonus
            </li>
          </ul>
          <Link
            to="/contact"
            className="bg-purple-700 text-white text-[20px] rounded-full px-8 py-3 mt-3"
          >
            Enroll now
          </Link>
        </aside>

        {/*============ main contents =========*/}

        <div className=" md:max-w-[700px] lg:max-w-[800px]   ">
          <div>
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">
              ?
            </p>

            <div className="flex gap-2 items-center  ">
              <p className="font-out text-2xl flex gap-2 items-center mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
                Made with
              </p>
              <p className="text-2xl mt-1 text-purple-300 ">
                <FaHeart />
              </p>
            </div>
            {/* =============change================ */}
            <div>
              <h1 className=" text-2xl text-white font-semibold pt-8">
                ABOUT THE COURSE
              </h1>
              <p className=" pt-4 text-white text-lg text-justify leading-relaxed">
                Kickstart your tech career with our 3-Month Frontend Development
                Program! Learn how to design beautiful interfaces with Figma,
                build responsive websites using HTML, CSS & Tailwind, and create
                powerful web applications with JavaScript & React. With
                step-by-step guidance, real projects, and a supportive learning
                community, you’ll gain the skills and confidence to land your
                first tech role — even with no prior experience.
              </p>
            </div>
          </div>
          {/* ==================================================================================== */}

          {/* what tou will learn */}

          {/* what you will learn */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">
              ?
            </p>

            <p className="font-out text-2xl flex gap-2 items-center mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              Highly Practical
            </p>

            <div>
              <h1 className="text-2xl text-white font-semibold pt-8">
                What You'll Learn
              </h1>

              <ul className="pt-4 space-y-4 leading-relaxed">
                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Build responsive and accessible web pages using HTML & CSS.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Apply modern styling techniques with Tailwind CSS to create
                  clean, professional UI components.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Understand JavaScript fundamentals and build interactive web
                  interfaces.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Work with the DOM, events, and API calls to create dynamic
                  applications.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Master React components, props, state, and hooks (useState,
                  useEffect).
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Build multi-page applications using React Router and reusable
                  components.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Use Figma to design UI layouts, components, and
                  developer-ready prototypes.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Develop a complete project from design to deployment for your
                  portfolio.
                </li>
              </ul>
            </div>
          </div>

          {/* course content */}
          {/* ======================================================================================================== */}

          <div className=" gap-2 items-center  pt-15 ">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">
              ?
            </p>

            <p className="font-out text-2xl flex gap-2 items-center mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              A Perfectly Structured Course
            </p>
            <div className=" font-out font-semibold my-2">
              <p className="font-medium  pt-2 text-md my-2">
                Timing: Week-days / Saturday (2pm - 5pm)
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Duration: 3-Month
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Format: Online, live interractive sessions
              </p>
              <p className="font-medium  pt-2 text-md my-2">4 - Prjects</p>
              <p className="font-medium  pt-2 text-md my-2">
                Flexible Payment (3 times){" "}
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Class recording will be available at the end of each class{" "}
              </p>
            </div>
            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>
            <div>
              <CourseOutline modules={FrontendModules} />
            </div>
          </div>

          {/* ================================================================================== */}

          {/* /* Target Student *============================================/} */}

          <div className=" gap-2 items-center  pt-15 ">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">
              ?
            </p>

            <p className=" font-out text-xl flex gap-2 items-center mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent">
              Target Student
            </p>
            <div>
              <h1 className="text-2xl text-white font-semibold pt-8">
                Who Is This For?
              </h1>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Individuals looking to build solid, industry-ready skills from
                scratch.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Learners who want a structured, mentorship-driven program with
                hands-on projects.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Professionals seeking to switch careers and enter a high-demand
                tech field.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Students and graduates who want practical skills to stand out in
                the job market.
              </p>
            </div>
          </div>
          {/* =========================================================================== */}
        </div>

        {/* ========================== */}
      </div>
      <Footer />
    </>
  );
};

export default Frontend;
