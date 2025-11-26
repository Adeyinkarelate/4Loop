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
import { DevOpsModules } from "../data/data";
import Footer from "../components/Footer";

const DevOPs = () => {
  return (
    <>
      <Navbar />
      <CouseDesc
        title="DevOps Mastery: Build Real-World Cloud & Automation Skills"
        desc="This comprehensive 4-month course is designed to take you on a
            complete journey through the fundamentals and advanced practices of
            DevOps."
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
                This comprehensive 4-month course is designed to take you on a
                complete journey through the fundamentals and advanced practices
                of DevOps. You'll gain hands-on experience with
                industry-standard DevOps tools such as GitHub Copilot, Linux,
                Docker, Kubernetes, Terraform while also building a strong
                foundation in Amazon Web Services (AWS).
                <br />
                <br />
                By the end of the program, you'll be equipped with the practical
                skills and enhanced workflows needed to design, deploy, and
                manage modern, cloud-native applications with confidence—
                ensuring fast, reliable, and automated software delivery
                pipelines in real-world environments.
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
                  Tech learners or career changers interested in mastering
                  Continuous Integration (CI), Continuous Deployment (CD), cloud
                  infrastructure automation, and container orchestration.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Beginners looking to learn AWS and DevOps from scratch, with
                  step-by-step guidance and hands-on labs.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Aspiring DevOps Engineers who want to build a strong
                  foundation in Linux, cloud computing, automation, and modern
                  deployment tools.
                </li>

                <li className="flex items-center gap-3 text-md text-white">
                  <IoCheckmark className="text-purple-500" />
                  Developers and system administrators who want to transition
                  into DevOps and gain hands-on experience with Linux, AWS,
                  Terraform, CI/CD, Docker, and Kubernetes.
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
                Timing: Tuesday & Wednesday (10am - 12pm) / Saturday (10am -
                1pm)
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Duration: 4-Month
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Format: Online, live interractive sessions
              </p>
              <p className="font-medium  pt-2 text-md my-2">
                Assistant with Cloud practional certificate
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
              <CourseOutline modules={DevOpsModules} />
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
                Perfect for anyone who wants to build real-world DevOps skills
                and become highly employable in today’s cloud-driven tech
                industry.
              </p>

              <p className="flex items-center gap-3 leading-relaxed pt-4 text-white">
                {" "}
                <IoCheckmark className="text-purple-500" />
                Anyone aiming to become a job-ready DevOps Engineer with
                practical skills in cloud infrastructure, automation, and
                container orchestration.
              </p>
            </div>
          </div>
          {/* =========================================================================== */}
        </div>

        {/* ========================== */}
        
      </div>
      <Footer/>
    </>
  );
};

export default DevOPs;
