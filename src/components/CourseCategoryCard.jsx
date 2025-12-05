import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCategoryCard = ({ title, desc, image, url }) => {
  // Limit description to 120 characters
  const shortDesc =
    desc.length > 120 ? desc.substring(0, 120).trim() + "..." : desc;

  return (
    <div className="font-mon border border-gray-400 rounded-xl overflow-hidden hover:scale-[1.02] transition">
      {/* Top Illustration */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover bg-center shadow-gray-900"
        />
      </div>

      {/* Bottom Text */}
      <div className="p-6">
        <div>
          <motion.h3
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
            className="text-lg font-bold font-out text-gray-900 mb-2"
          >
            {title}
          </motion.h3>

          {/* Shortened Description */}
          <p className="text-md text-gray-600 text-justify">{shortDesc}</p>
        </div>

        <Link
          to={url}
          className="btn text-blue-950 bg-blue-950/30 my-3 border-none"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CourseCategoryCard;
