import Image2 from "../assets/images/image2.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EducationBanner = () => {
  return (
    <section className=" px-4 sm:px-0 pt-30">
      <div className="mx-auto rounded-2xl bg-[#c5d2e5] px-4 py-8 sm:max-w-[85vw] sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-9">
          <div className="overflow-hidde order-las relative rounded-lg lg:order-last lg:h-full">
            <img
              alt="Hero Image"
              src={Image2}
              loading="lazy"
              className="inset-0 mx-auto h-full w-64 lg:absolute lg:w-auto"
            />

            <motion.div
              initial={{
                opacity: 0,
                x: 100,
                transition: { duration: 0.5, delay: 1 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 1 },
              }}
              className="absolute right-0 top-[50%] sm:right-0 sm:inline"
            >
              <div className="flex w-fit items-center gap-3 rounded-lg border border-gray-200 bg-white/90 p-3 px-4 shadow-md backdrop-blur">
                <span className="rounded-lg bg-custom_purple-500/20 p-3 text-custom_purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="fill-blue-950"
                    className="h-6 w-6 sm:h-7 sm:w-7 fill-blue-950"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                </span>

                <div>
                  <p className="font-clash text-lg font-semibold text-gray-800 sm:text-xl">
                    36+
                  </p>
                  <p className="text-xs text-gray-600 sm:text-sm ">
                    Students Trained
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.5, delay: 1.4 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 1.4 },
              }}
              className="absolute bottom-5 sm:left-16"
            >
              <div className="flex w-fit items-center gap-3 rounded-lg border border-gray-200 bg-white/90 p-3 px-4 shadow-md backdrop-blur">
                <span className="rounded-lg bg-custom_purple-500/20 p-3 text-custom_purple-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="fill-blue-950"
                    className="h-6 w-6 sm:h-7 sm:w-7 fill-blue-950"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </span>

                <div>
                  <p className="font-clash text-lg font-semibold text-gray-800 sm:text-xl ">
                    5+
                  </p>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Total Courses
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6 lg:py-16">
            <motion.h2
              initial={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: 0.2 },
              }}
              className="text-[30px]  md:text-[45px] font-semibold  font-out text-gray-900"
            >
              Embark on a journey of{" "}
              <span className="font-clash  ">
                Knowledge
              </span>{" "}
              and{" "}
              <span className="font-clash   text-amber-700">
                Growth
              </span>
              .
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5, delay: 1 },
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: 1 },
              }}
              className="max-w-md  text-gray-900 text-lg font-mon"
            >
              Learn new skills in a wide variety of inspiring, interactive
              workshops. Get the ball rolling on your education today.
            </motion.p>

            <div className="space-x-2">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-950 px-6 py-2 text-sm text-white transition-all hover:bg-custom_purple-500 focus:outline-none focus:ring-2 focus:ring-custom_purple-500 focus:ring-offset-2 sm:text-md"
              >
                View courses
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow transition-all hover:bg-gray-50 focus:outline-none sm:text-md"
              >
                Enroll now
              </Link>
            </div>

            <ul className="text-sm text-gray-600 md:text-md">
              <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-800 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-500 last:pr-0 last-of-type:before:hidden">
                <svg
                  className="h-4 w-4 shrink-0 text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    className="fill-blue-950"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                Experienced Trainers
              </li>
              <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-800 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-500 last:pr-0 last-of-type:before:hidden">
                <svg
                  className="h-4 w-4 shrink-0 text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    className="fill-blue-950"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                Installment Payment
              </li>
              <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-800 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pr-0 last-of-type:before:hidden">
                <svg
                  className="h-4 w-4 shrink-0 text-white"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    className="fill-blue-950"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                Online & Offline Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationBanner;
