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
import { PythonFullStackModules } from "../data/data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const PythonFullStack = () => {
  return (
    <>
      <Helmet>
        <title>Full Stack Python & Django | Adexbit EduTech Academy</title>
        <meta
          name="title"
          content="Full Stack Python & Django | Adexbit EduTech Academy"
        />
        <meta
          name="description"
          content="Become a job-ready Full Stack Python Developer. Learn HTML, CSS, JavaScript, Tailwind, Python, Django, Django REST Framework (DRF), Git, APIs, and full-stack deployment."
        />

        <meta
          name="og:title"
          content="Full Stack Python & Django | Adexbit EduTech Academy"
        />
        <meta
          name="og:description"
          content="A complete Full Stack Python program covering frontend development, backend APIs with Django & DRF, authentication, databases, and real-world projects."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://adexbitedutech.com/python" />

        <meta
          name="keywords"
          content="Full Stack Python, Django, DRF, Python Developer Nigeria, Learn Python, Web Development, Backend Development, Adexbit EduTech"
        />
      </Helmet>

      <Navbar />

      <CouseDesc
        title="Full Stack Python Development with Django & DRF"
        desc="This intensive program prepares you to become a professional Full Stack Python Developer. You’ll master frontend technologies, backend development with Python & Django, build REST APIs using DRF, manage databases, and deploy complete web applications."
      />

      <div className="flex flex-col lg:flex-row min-h-screen justify-center gap-30 mt-20 p-4 md:p-8">
        {/* Sidebar */}
        <aside className='lg:sticky top-30 "w-[400px] self-start p-4'>
          <ul className="space-y-5">
            <li className="text-gray-700 dark:text-gray-100 text-xl flex items-center gap-3">
              <IoBookOutline /> About the course
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex items-center gap-3">
              <IoBulbOutline /> What You'll Learn
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex items-center gap-3">
              <IoCheckmarkDoneOutline /> Curriculum
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex gap-3 items-center">
              <IoPerson /> Target Audience
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex items-center gap-3">
              <GiRoundShield /> Prerequisites
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex gap-3 items-center">
              <IoPerson /> Your Instructor
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex gap-3 items-center">
              <AiOutlineMessage /> Reviews
            </li>
            <li className="text-gray-700 dark:text-gray-100 text-xl flex gap-3 items-center">
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

            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              ABOUT THE COURSE
            </h1>
            <p className="pt-4 text-gray-700 dark:text-gray-100 text-lg text-justify leading-relaxed">
              The Full Stack Python with Django program is designed to take you
              from beginner to job-ready developer. You’ll learn how to build
              responsive user interfaces, write clean Python code, develop
              secure backend applications with Django, expose APIs using Django
              REST Framework, and deploy full-stack solutions used by modern
              companies.
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

            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              What You'll Learn
            </h1>

            <ul className="pt-4 space-y-4 leading-relaxed">
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Build responsive websites using HTML, CSS, Tailwind, and
                JavaScript.
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Write clean, efficient Python code and understand core concepts.
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Develop backend applications using Django.
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Build RESTful APIs with Django REST Framework (DRF).
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Implement authentication, permissions, and security best
                practices.
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Use Git and GitHub for version control and collaboration.
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Build and deploy a complete Full Stack Python application.
              </li>
            </ul>
          </div>

          {/* Course content */}
          <div className="pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 dark:text-gray-100 text-3xl">
              ?
            </p>

            <p className="font-out text-2xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              A Perfectly Structured Course
            </p>

            <div className="font-mon font-bold my-2 text-xl text-black dark:text-amber-600">
              <p className="pt-2">Price : &#x20A6;550,000</p>
              <p className="pt-2 my-2">Timing: Weekdays or Saturday </p>
              <p className="pt-2 my-2">Duration: 6 Months</p>
              <p className="pt-2 my-2">
                Format: Online, live interactive sessions
              </p>
              <p className="pt-2 my-2">Multiple Hands-on Projects</p>
              <p className="pt-2 my-2">
                Flexible Payment (Up to 3 installments)
              </p>
              <p className="pt-2 my-2">
                Class recordings available, immediately after every class
              </p>
            </div>

            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>

            <CourseOutline modules={PythonFullStackModules} />
          </div>

          {/* Target student */}
          <div className="pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 text-3xl">
              ?
            </p>

            <p className="font-out text-xl mt-2 bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              Target Student
            </p>

            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              Who Is This For?
            </h1>

            <p className="flex gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Beginners who want to start a career in software development.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Frontend developers looking to transition into backend
              development.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Career switchers targeting Python and web development roles.
            </p>

            <p className="flex gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Anyone preparing for Python, Django, or backend developer roles.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PythonFullStack;
