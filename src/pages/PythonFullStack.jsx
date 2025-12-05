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
import Footer from "../components/Footer";
import { PythonFullStackModules } from "../data/data";
import { Link } from "react-router-dom";

const PythonFullStack = () => {
  return (
    <>
      <Navbar />

      <CouseDesc
        title="Python Full-Stack Development (6 Months)"
        desc="A complete, hands-on program designed to transform you into a professional full-stack Python developer. Learn HTML, CSS, JavaScript, Tailwind, React, Python, SQL, Django & Django REST Framework — and build real industry-level applications."
      />

      <div className="flex flex-col lg:flex-row min-h-screen justify-center gap-30 mt-20 p-4 md:p-8">

        {/* SIDEBAR */}
        <aside className='lg:sticky top-30 w-[400px] self-start p-4'>
          <ul className="space-y-5">
            <li className="text-white text-xl flex items-center gap-3">
              <IoBookOutline /> About the course
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <IoBulbOutline /> What You'll Learn
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <IoCheckmarkDoneOutline /> Curriculum
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <IoPerson /> Target Audience
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <GiRoundShield /> Prerequisites
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <IoPerson /> Your Instructor
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <AiOutlineMessage /> Reviews
            </li>
            <li className="text-white text-xl flex items-center gap-3">
              <LuPackageOpen /> Exclusive Bonus
            </li>
          </ul>

          <Link
            to="/contact"
            className="bg-purple-700 text-white text-[20px] rounded-full px-8 py-3 mt-3 block text-center"
          >
            Enroll now
          </Link>
        </aside>

        {/* MAIN SECTION */}
        <div className="md:max-w-[700px] lg:max-w-[800px]">

          {/* MADE WITH LOVE */}
          <div>
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">
              ?
            </p>
            <div className="flex gap-2 items-center">
              <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
                Made with
              </p>
              <p className="text-2xl text-purple-300"><FaHeart /></p>
            </div>

            {/* ABOUT THE COURSE */}
            <h1 className="text-2xl text-white font-semibold pt-8">
              ABOUT THE COURSE
            </h1>

            <p className="pt-4 text-white text-lg text-justify leading-relaxed">
              This 6-month Python Full-Stack Development program takes you from
              beginner to job-ready. You will master the complete ecosystem of
              modern full-stack development — frontend, backend, databases,
              APIs, and deployment.
              <br /><br />
              You’ll learn HTML, CSS, JavaScript, Tailwind, React, Python, SQL,
              Django, and Django REST Framework through fully practical,
              project-based training. By the end, you will be able to build,
              deploy, and scale full-stack applications used in real-world
              enterprise environments.
            </p>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">?</p>

            <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              Highly Practical
            </p>

            <h1 className="text-2xl text-white font-semibold pt-8">
              What You'll Learn
            </h1>

            <ul className="pt-4 space-y-4 leading-relaxed">
              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Web foundations: HTML, CSS, responsive design & Tailwind CSS.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                JavaScript & ES6+: DOM, APIs, async programming & modern tooling.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                React fundamentals & advanced concepts: components, hooks,
                state management & API integration.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Python programming: syntax, OOP, modules, file handling & scripts.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                SQL databases: PostgreSQL, MySQL, relationships & query
                optimization.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Django development: models, ORM, authentication, templates &
                full CRUD applications.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Django REST Framework: serializers, viewsets, JWT auth, pagination,
                documentation & API best practices.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Deployment: Git/GitHub, Linux, Docker, Nginx & cloud hosting.
              </li>

              <li className="flex items-center gap-3 text-md text-white">
                <IoCheckmark className="text-purple-500" />
                Build and deploy multiple full-stack apps as capstone projects.
              </li>
            </ul>
          </div>

          {/* COURSE CONTENT */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">?</p>

            <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              A Perfectly Structured Course
            </p>

            <div className="font-out font-semibold my-2">
              <p className="font-medium pt-2 text-md">Timing: Weekdays / Saturday (2pm - 5pm)</p>
              <p className="font-medium pt-2 text-md">Duration: 6 Months</p>
              <p className="font-medium pt-2 text-md">Format: Online (Live Interactive)</p>
              <p className="font-medium pt-2 text-md">4–6 Full-Stack Projects</p>
              <p className="font-medium pt-2 text-md">Flexible Payment (3 Installments)</p>
              <p className="font-medium pt-2 text-md">Class Recordings After Each Session</p>
            </div>

            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>

            <CourseOutline modules={PythonFullStackModules} />
          </div>

          {/* TARGET STUDENT */}
          <div className="gap-2 items-center pt-15">
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-white text-3xl">?</p>

            <p className="font-out text-xl bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
              Target Student
            </p>

            <h1 className="text-2xl text-white font-semibold pt-8">
              Who Is This For?
            </h1>

            <p className="flex items-center gap-3 pt-4 text-white">
              <IoCheckmark className="text-purple-500" />
              Beginners who want to start a career in web or software development.
            </p>

            <p className="flex items-center gap-3 pt-4 text-white">
              <IoCheckmark className="text-purple-500" />
              Career switchers moving into backend, frontend, or full-stack roles.
            </p>

            <p className="flex items-center gap-3 pt-4 text-white">
              <IoCheckmark className="text-purple-500" />
              Developers seeking strong hands-on Python, Django, React & API skills.
            </p>

            <p className="flex items-center gap-3 pt-4 text-white">
              <IoCheckmark className="text-purple-500" />
              Students, NYSC members, jobseekers & tech enthusiasts.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PythonFullStack;
