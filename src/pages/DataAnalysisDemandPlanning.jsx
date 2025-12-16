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
import { DataAnalysisModules } from "../data/data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DataAnalysisDemandPlanning = () => {
  return (
    <>
      <Helmet>
        <title>Data Analysis | Adexbit's Edutech Academy</title>
        <meta name="title" content="Data Analysis | Adexbit's Edutech Academy" />
        <meta
          name="description"
          content="Adexbit's Edutech Academy is an online tech school where you get to learn Excel, Power BI, SQL, Looker, forecasting, dashboard reporting, and real-world demand planning using industry-standard tools."
        />

        <meta
          name="og:title"
          content="Data Analysis | Adexbit's Edutech Academy"
        />
        <meta
          name="og:description"
          content="Adexbit's Edutech Academy is an online tech school where you get to learn Excel, Power BI, SQL, Looker, forecasting, dashboard reporting, and real-world demand planning."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://adexbitedutech.com/data-analysis"
        />

        <meta
          name="keywords"
          content="Adexbit, Data Analysis, Business Intelligence, Learn Looker, Learn SQL, Power BI, Excel, Demand Planning, Analytics Training Nigeria"
        />
      </Helmet>

      <Navbar />

      <CouseDesc
        title="Data Analysis & Demand Planning (4 Months)"
        desc="A practical, job-ready program designed to equip you with the data and business analytics skills needed for modern organizations. Learn Excel, Power BI, SQL, Looker, forecasting, dashboard reporting, and real-world demand planning using industry-standard tools."
      />

      <div className="flex flex-col lg:flex-row min-h-screen justify-center gap-30 mt-20 p-4 md:p-8">
        {/* SIDEBAR */}
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

        {/* MAIN CONTENT */}
        <div className="md:max-w-[700px] lg:max-w-[800px]">
          {/* ABOUT THE COURSE */}
          <div>
            <p className="w-15 h-15 rounded-full bg-purple-600/20 flex justify-center items-center text-gray-700 dark:text-gray-100 text-3xl">
              ?
            </p>

            <div className="flex gap-2 items-center">
              <p className="font-out text-2xl bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent">
                Made with
              </p>
              <p className="text-2xl text-purple-300">
                <FaHeart />
              </p>
            </div>

            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              ABOUT THE COURSE
            </h1>

            <p className="pt-4 text-gray-700 dark:text-gray-100 text-lg text-justify leading-relaxed">
              This 4-month Data Analysis & Demand Planning program prepares you
              for high-demand roles in business analytics, operations, supply
              chain, and finance.
              <br />
              <br />
              You will gain mastery in Excel, Power BI, SQL, and Looker for data
              analytics, business intelligence, dashboard development, and
              real-world demand planning. Through practical, industry-aligned
              projects, you’ll learn how to transform raw data into insights
              that drive decision-making for modern businesses.
            </p>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div className="gap-2 items-center pt-15">
            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              What You'll Learn
            </h1>

            <ul className="pt-4 space-y-4 leading-relaxed">
              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Excel for analytics: formulas, data cleaning, pivot tables, dashboards.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Power BI: DAX, data modeling, relationships & interactive dashboards.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                SQL for querying data: joins, CTEs, functions & real business datasets.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Looker for business intelligence: LookML basics, data modeling,
                dashboards, and enterprise reporting.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Forecasting: demand planning methods, trends, seasonality & prediction.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                Business reporting: KPI design, visualization & data storytelling.
              </li>

              <li className="flex items-center gap-3 text-md text-gray-700 dark:text-gray-100">
                <IoCheckmark className="text-purple-500" />
                End-to-end portfolio projects for job placement.
              </li>
            </ul>
          </div>

          {/* COURSE CONTENT */}
          <div className="pt-15">
            <div className="font-mon font-bold my-2 text-xl text-black dark:text-amber-600">
              <p>Price: ₦350,000</p>
              <p>Timing: Weekdays or Saturday</p>
              <p>Duration: 4 Months</p>
              <p>Format: Online (Live Interactive)</p>
              <p>3+ Industry Projects</p>
              <p>Flexible Payment (3 Installments)</p>
              <p>Class Recordings After Each Session</p>
            </div>

            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>

            <CourseOutline modules={DataAnalysisModules} />
          </div>

          {/* TARGET STUDENT */}
          <div className="pt-15">
            <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold pt-8">
              Who Is This For?
            </h1>

            <p className="flex items-center gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Beginners who want to start a career in data or business analytics.
            </p>

            <p className="flex items-center gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Professionals transitioning into analytics or operations roles.
            </p>

            <p className="flex items-center gap-3 pt-4 text-gray-700 dark:text-gray-100">
              <IoCheckmark className="text-purple-500" />
              Students, NYSC members, jobseekers & business-oriented learners.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DataAnalysisDemandPlanning;
