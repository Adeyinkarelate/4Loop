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
import { JavaModules } from "../data/data";
import Footer from "../components/Footer";

const Java = () => {
  return (
    <>
      <Navbar />
      <CouseDesc
        title=" Full Stack Java: Mastering the Fundamentals"
        desc="Master dependency injection and database  integration with
                    Spring Boot and Spring Data JPA"
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
          <button className="bg-purple-700 text-white text-[20px] rounded-full px-8 py-3 mt-3">
            Enroll now
          </button>
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
                Spring Boot is the go-to framework for modern Java development.
                Whether you’re building web applications, microservices, or
                enterprise applications, Spring Boot simplifies the process by
                handling configuration, dependency management, and embedded
                servers—allowing you to build and deploy applications quickly.
              </p>
            </div>
          </div>
          {/* ==================================================================================== */}

          {/* what tou will learn */}

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
                  Understand how Spring Boot manages objects and dependencies.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Connect your application to a relational database.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Manage application configuration using application.properties
                  and YAML files.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Use Spring Data repositories to interact with the database.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Database-first vs model-first workflows and when to use each
                  approach.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  How Hibernate tracks entities and how transactions ensure data
                  consistency.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Optimize fetching strategies with eager and lazy loading to
                  improve performance.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Write custom queries with @Query, JPQL, and native SQL.
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
                Timing: Tuesday & Thursday (12pm - 2pm) / Saturday (2pm -
                5pm)
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Duration: 6-Month
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Format: Online, live interractive sessions
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                5 - Prjects
              </p>
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
              <CourseOutline modules={JavaModules} />
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
              <h1 className=" text-2xl text-white font-semibold pt-8">
                Who Is This For?
              </h1>

              <p className="flex items-center gap-3  pt-4 text-white leading-relaxed">
                {" "}
                <IoCheckmark className="text-purple-500" />
                Java developers who want to master Spring Boot from the ground
                up.
              </p>

              <p className="flex items-center gap-3 leading-relaxed pt-4 text-white">
                {" "}
                <IoCheckmark className="text-purple-500" />
                Spring Boot developers who want to strengthen their fundamentals
                and fill in knowledge gaps.
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

export default Java;
