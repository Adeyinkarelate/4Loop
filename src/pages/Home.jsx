import React from "react";
import Navbar from "../components/Navbar";
import EducationBanner from "../components/EducationBanner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Countdown from "../components/CountDown";
import Team from "../components/Team";
import ShortCategorySection from "../components/ShortCategorySection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Home | Adexbit's Tech Fusion Hub</title>
        <meta name="title" content="Home | Adexbit's Tech Fusion Hub" />
        <meta
          name="description"
          content=" Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />

        <meta name="og:title" content="Home | Adexbit's Tech Fusion Hub" />
        <meta
          name="og:description"
          content="Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />

        <meta
          name="keywords"
          content="Home page, Adexbit, Tech, Fusion Hub, Adexbit's,DevOp,Cloud Engineering, Learn Data Analytics, Learn Data science, Learn web development in Nigeria, Become a software engineer, frontend development, backend development, Learn HTML, Learn CSS, Learn JavaScript, Learn Python, Learn SQL,"
        ></meta>
      </Helmet>
      <Navbar />
      <EducationBanner />
      {/* ====================== */}
      <section className="mx-auto max-w-7xl py-20 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-20 text-center text-3xl font-semibold md:text-4xl font-mon text-blue-950"
        >
          Why Adexbit?
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start px-6 md:px-10">
          {/* Expert Instruction */}
          <div className="my-3">
            <div className="flex justify-center md:justify-start">
              <span className="rounded-lg bg-blue-600/20 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-blue-950"
                  viewBox="0 0 640 512"
                >
                  <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                </svg>
              </span>
            </div>

            <div className="mt-4 h-0.5 bg-linear-to-r from-gray-200 to-white/0">
              <div className="h-0.5 w-9 bg-gray-400"></div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Expert Instructors
              </h3>
              <p className="mt-1 text-md text-gray-600">
                Learn directly from industry professionals with real-world
                experience in global tech environments.
              </p>
            </div>
          </div>

          {/* Training Courses */}
          <div className="my-3">
            <div className="flex justify-center md:justify-start">
              <span className="rounded-lg bg-blue-600/20 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="h-7 w-7 fill-blue-950"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                </svg>
              </span>
            </div>

            <div className="mt-4 h-0.5 bg-linear-to-r from-gray-200 to-white/0">
              <div className="h-0.5 w-9 bg-gray-400"></div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Job-Ready Courses
              </h3>
              <p className="mt-1 text-md text-gray-600">
                Every program is carefully designed to teach practical,
                in-demand skills that employers are actively hiring for.
              </p>
            </div>
          </div>

          {/* Certification */}
          <div className="my-3">
            <div className="flex justify-center md:justify-start">
              <span className="rounded-lg bg-blue-600/20 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="h-7 w-7 fill-blue-950"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              </span>
            </div>

            <div className="mt-4 h-0.5 bg-linear-to-r from-gray-200 to-white/0">
              <div className="h-0.5 w-9 bg-gray-400"></div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Recognized Certification
              </h3>
              <p className="mt-1 text-md text-gray-600">
                We help students ace professional certificate exams with the right tools, expert guidance, and a supportive environment. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      <Countdown />
      <ShortCategorySection />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
