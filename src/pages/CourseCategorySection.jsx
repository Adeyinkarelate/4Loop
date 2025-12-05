import CourseCategoryCard from "../components/CourseCategoryCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { courseCategories } from "../data/data";
import { motion } from "framer-motion";

export default function CourseCategorySection() {
  return (
    <>
    <Navbar/>
      <section className="bg-white py-16 flex flex-col gap-4 justify-center items-center mt-20">
        <div className="flex justify-center max-w-2xl px-4">
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
            className=" font-mon text-center text-3xl md:text-4xl font-semibold mb-12 text-[30px]  md:text-[45px] text-gray-900"
          >
            Follow a proven path to build real coding skills and land your dream
            job.
          </motion.h2>
        </div>
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
      <Footer/>
    </>
  );
}
