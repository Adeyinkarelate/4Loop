import CourseCategoryCard from "./CourseCategoryCard";
import { courseCategories } from "../data/data";

export default function CourseCategorySection() {
  return (
    <section className="bg-[#0B0C0E] py-16">
      <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-12">
        Follow a proven path to build real coding skills and land your dream job.
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
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
  );
}
