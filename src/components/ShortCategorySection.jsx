import ShortCategoryCard from "./ShortCategoryCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { shortCategories } from "../data/data";
import { motion } from "framer-motion";

export default function ShortCategorySection() {
  return (
    <>
   
      <section className=" py-16 flex flex-col gap-4 justify-center items-center my-20">
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
            className="text-3xl font-semibold md:text-4xl font-mon text-blue-950 mb-12 text-center "
          >
            Follow a proven path to build real coding skills 
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {shortCategories.map((item) => (
            <ShortCategoryCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </section>
     
    </>
  );
}
