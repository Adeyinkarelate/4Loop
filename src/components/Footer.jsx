import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#c5d2e5]">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="mb-10 flex justify-center lg:justify-start">
                <a href="/">
                  <img src={Logo} alt="Logo" className="h-12 " />
                </a>
              </div>

              <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-800 lg:text-left">
                Explore your full potential with us and embark on a path to
                knowledge, skills, and success. Join Adexbit today, and let's
                learn and grow together.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-10">
              <li>
                <Link
                  className="text-gray-800 transition hover:text-gray-800/75"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>

              <li>
                <a
                  href="https://wa.me/2349011664246"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp className="text-green-400 text-5xl" />
                </a>
              </li>

              <li>
                <Link
                  className="text-gray-800 transition hover:text-gray-800/75"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-center text-sm text-gray-600 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
