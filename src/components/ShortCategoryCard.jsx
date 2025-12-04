import { Link } from "react-router-dom";

const ShortCategoryCard = ({ title, desc, image, url }) => {
  return (
    <div className="bg-[#0E0F11] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:scale-[1.02] transition">
      {/* Top Illustration */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover drop-shadow-lg bg-center"
        />
      </div>

      {/* Bottom Text */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
      </div>
      <Link to={`${url}`} class="btn bg-black text-white m-2">
        Read More
      </Link>
    </div>
  );
};

export default ShortCategoryCard;
