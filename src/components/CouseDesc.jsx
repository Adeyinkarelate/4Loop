import React from "react";
import Video from "../components/Video";
import { Link } from "react-router-dom";

const CouseDesc = ({ title, desc }) => {
  return (
    <section className="bg-blue-100 ">
      <div className="flex flex-col  gap-15 p-8  lg:flex-row justify-center text-center md:text-start  md:items-start lg:gap-30 items-center h-full   w-full pt-20 md:pt-40">
        <div className="max-w-2xl space-y-4">
          <p className="text-2xl text-blue-800 font-semibold pt-8 font-mon">
            A Course You'll Actually Finish
          </p>

          <h1 className="text-[30px]  md:text-[45px] font-semibold  font-out text-gray-900">
            {title}
          </h1>
          <p className="text-gray-900 text-lg font-mon">{desc}</p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-950 px-6 py-2 text-sm text-white transition-all hover:bg-custom_purple-500 focus:outline-none focus:ring-2 focus:ring-custom_purple-500 focus:ring-offset-2 sm:text-md"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        <div className=" bg-black   bg-linear-to-tr from-purple-800 to-purple-300 w-[280px] h-[400px] rounded-3xl">
          <div className="bg-black w-[280px] h-[395px] rounded-md mt-0.5 p-6 font-mon text-center">
            <h1 className="text-amber-600 text-2xl font-bold my-2">
              FLEXIBLE PAYMENT !! 👉🏼
            </h1>
            <p className="font-mon font-light uppercase text-white my-2">
              🔥Immerse yourself in hands-on, real-world projects that simulate
              industry challenges.
            </p>
            <div>
              <Link to="/contact" class="btn shadow-none bg-blue-950 text-white my-2 border-none">
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className="px-4 text-gray-900 text-lg font-mon max-w-3xl mx-auto pb-20 ">
        Say goodbye to scattered tutorials and endless fluff. This course gives
        you a clear, structured path with bite-sized videos that blend theory
        and hands-on practice.
      </h1>
      {/* another section */}
    </section>
  );
};

export default CouseDesc;
