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
import { DemandPlannerModules } from "../data/data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DemandPlanner = () => {
  return (
    <>
      <Navbar />
      <CouseDesc
        title="Demand Planner: End-to-End Demand Planning & Forecasting"
        desc="A practical 3-month program that equips you with demand forecasting, inventory optimization, S&OP, and data-driven planning skills — using Excel, Power BI and proven statistical techniques. Ideal for career switchers, supply chain professionals, and analysts."
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

            <div>
              <h1 className=" text-2xl text-white font-semibold pt-8">
                ABOUT THE COURSE
              </h1>
              <p className=" pt-4 text-white text-lg text-justify leading-relaxed">
                Master practical demand planning in 3 months. This hands-on
                program teaches forecasting methods, inventory optimization,
                S&OP processes, and analytics using Excel and Power BI. Through
                real datasets, case studies and a capstone project, you’ll learn
                how to create accurate demand forecasts, build executive
                dashboards, and collaborate across sales, operations and
                finance.
              </p>
            </div>
          </div>

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
                  Core demand planning concepts: demand types, drivers and KPIs (MAPE, RMSE, bias).
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Time-series forecasting methods: moving averages, exponential smoothing (SES, DES, TES) and decomposition.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Advanced forecasting techniques: regression, causal models and demand sensing approaches.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Inventory optimization: safety stock, reorder points, ABC segmentation and service-level trade-offs.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Practical Excel skills: PivotTables, lookup functions, scenario analysis and what-if modelling.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Power BI for planners: data modelling, visuals, and building interactive executive dashboards.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  S&OP and integrated planning: demand reviews, supply reviews, collaboration with sales/finance and KPI-driven decisions.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  End-to-end capstone: produce a full demand plan, dashboard and scenario analysis to include in your portfolio.
                </li>
              </ul>
            </div>
          </div>

          {/* course content */}
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
              <p className="font-medium  pt-2 text-md my-2">Duration: 3-Month</p>
              <p className="font-medium  pt-2 text-md my-2">
                Format: Online, live interactive sessions
              </p>
              <p className="font-medium  pt-2 text-md my-2">3 - Projects</p>
              <p className="font-medium  pt-2 text-md my-2">
                Flexible Payment (3 installments)
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Class recordings available after each session
              </p>
            </div>
            <h1 className="font-out font-semibold pt-8 text-2xl my-2">
              Course Content
            </h1>
            <div>
              <CourseOutline modules={DemandPlannerModules} />
            </div>
          </div>

          {/* Target Student */}
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
                Supply chain professionals seeking hands-on forecasting and planning skills.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Analysts and business users who want to build data-driven demand models and dashboards.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Career changers aiming to become demand planners or S&OP coordinators.
              </p>

              <p className="flex items-center gap-3 pt-4 text-white leading-relaxed">
                <IoCheckmark className="text-purple-500" />
                Managers who need to interpret forecasts, set targets and run effective S&OP meetings.
              </p>
            </div>
          </div>
          {/* =========================================================================== */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemandPlanner;
