import CourseCategoryCard from "../components/CourseCategoryCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { courseCategories } from "../data/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CourseCategorySection() {
  return (
    <>
      <Navbar />
      <section className="bg-[#c5d2e5] py-20 px-6">
          <div className=" flex flex-col justify-center items-center text-center h-[550px] md:h-[450px]  w-fulll ">
            <div className="space-y-6  ">
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
                className=" max-w-3xl text-[30px]  md:text-[45px] font-semibold  font-out text-gray-900"
              >
                Follow a proven path to build{" "}
                <span className="font-clash underline decoration-custom_purple-600">
                  Skills —
                </span>{" "}
                real coding skills and land{" "}
                <span className="font-clash underline decoration-custom_purple-600">
                  your dream job.
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
                className="max-w-3xl text-gray-900 text-lg font-mon "
              >
                Remember, growth starts with a decision. Stay consistent, ask questions, and keep building. Your journey into tech excellence starts here.
              </motion.p>

              <div className="space-x-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-blue-950 px-6 py-2 text-sm text-white transition-all hover:bg-custom_purple-500 focus:outline-none focus:ring-2 focus:ring-custom_purple-500 focus:ring-offset-2 sm:text-md"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      <section className="bg-white py-16 flex flex-col gap-4 justify-center items-center mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {courseCategories.map((item) => (
            <CourseCategoryCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
