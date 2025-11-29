import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    course: "",
    message: "",
  });

  const courses = [
    "DevOps Engineering",
    "Full-Stack Java Development",
    "Frontend Development",
    "Backend Development",
    "Data Analysis",
    "Cloud Engineering (AWS)",
    "Demand Planner With Excel",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m2gi5rs",
        "template_uo9tfvj", // Replace
        formData,
        "rO_WSs34ypSg2g0bL" // Replace
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", phone: "", course: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to send message. Try again.");
      });
  };

  return (
    <>
    <Helmet>
        <title>Contact Us| Adexbit's Tech Fusion Hub</title>
        <meta name="title" content="Contact Us| Adexbit's Tech Fusion Hub" />
        <meta
          name="description"
          content=" Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />

        <meta name="og:title" content="Contact Us | Adexbit's Tech Fusion Hub" />
        <meta
          name="og:description"
          content="Adexbit's Tech Fusion Hub is an online tech school where you get to learn new skills in a wide variety of inspiring, interactive workshops. As a student you get to learn web development, data analytics and forex."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />

        <meta
          name="keywords"
          content="Home page, Adexbit, Tech, Fusion Hub, Adexbit's,DevOp,Cloud Engineering, Learn Data Analytics, Learn Data science, Learn web development in Nigeria, Become a software engineer, frontend development, backend development, Learn HTML, Learn CSS, Learn JavaScript, Learn Python, Learn SQL,"
        ></meta>
      </Helmet>
      <Navbar />
      <Toaster position="top-center" />

      <div className="w-full min-h-screen bg-zinc-900 ">
        <section className="h-[450px] w-full ">
          <div className=" bg-black  py-10 ">
            <div className=" flex flex-col justify-center items-center text-center">
              <div className="space-y-6 lg:py-16 ">
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
                  className=" max-w-3xl text-2xl font-semibold sm:text-[2.6rem] font-out bg-linear-to-r from-purple-300 via-purple-800 to-purple-300 bg-transparent bg-clip-text text-transparent"
                >
                  Transform Your{" "}
                  <span className="font-clash underline decoration-custom_purple-600">
                    Skills —
                  </span>{" "}
                  Reach Out{" "}
                  <span className="font-clash underline decoration-custom_purple-600">
                    to Our Team
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
                  className="max-w-3xl text-base text-gray-400 md:text-lg"
                >
                  For technical questions, please post your questions on
                  whatsapp where you can get help from representative. For
                  course suggestions and career advice, check out our learning
                  paths.
                </motion.p>

                <div className="space-x-2">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-purple-700 px-6 py-2 text-sm text-white transition-all hover:bg-custom_purple-500 focus:outline-none focus:ring-2 focus:ring-custom_purple-500 focus:ring-offset-2 sm:text-md"
                  >
                    Home
                  </Link>
                </div>

                <ul className="text-sm text-gray-400 md:text-md list-none">
                  <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-400 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-500 last:pr-0 last-of-type:before:hidden">
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
                        className="fill-purple-700"
                      />
                      <path
                        d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                        fill="currentColor"
                      />
                    </svg>
                    adexbitlearninghub@gmail.com
                  </li>
                  <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-400 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-500 last:pr-0 last-of-type:before:hidden">
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
                        className="fill-purple-700"
                      />
                      <path
                        d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                        fill="currentColor"
                      />
                    </svg>
                    +234 906357130
                  </li>
                  <li className="relative inline-flex items-center gap-x-2 px-0 py-3 pr-8 text-gray-400 before:absolute before:right-3 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pr-0 last-of-type:before:hidden">
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
                        className="fill-purple-700"
                      />
                      <path
                        d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                        fill="currentColor"
                      />
                    </svg>
                     live interractive sessions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* ================================= */}
            <section class="w-full  py-16 px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                  <div className="bg-[#0f0f0f] rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
                    <FaPhone className="text-5xl text-red-400"/>
                    <h1 className="text-gray-300 mt-2 font-out font-bold text-3xl md:text-lg">09063571320</h1>
                  </div>
                

                <a
                  href="https://wa.me/2349063571320"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" bg-[#0f0f0f] rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
                    <IoLogoWhatsapp className="text-green-400 text-5xl" />
                    <p className="text-gray-300 mt-2 text-3xl md:text-lg">Chart Us</p>
                  </div>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[#0f0f0f] rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition flex flex-col items-center justify-center cursor-pointer">
                    <AiFillTikTok className="text-white text-5xl"/>
                    <p className="text-gray-300 mt-2 text-3xl md:text-lg">Follow Us</p>
                  </div>
                </a>

                <div className="bg-[#0f0f0f] rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:scale-110 transition">
                  <h2 className="text-4xl font-bold text-orange-400">52</h2>
                  <p className="text-gray-300 mt-2">Coding courses</p>
                </div>
              </div>
            </section>
            {/* ======================================================== */}
            <div className="card bg-base-100 text-white w-full max-w-sm shrink-0 shadow-2xl ">
              <div className="card-body">
                <form className="fieldset" onSubmit={handleSubmit}>
                  <div>
                    <label className="label text-white my-2">Full Name</label>
                    <input
                      type="text"
                      className="input"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="label text-white my-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="input"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="label text-white my-2">
                      Select Course
                    </label>
                    <select
                      className="input"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      required
                    >
                      <option value="">-- Choose a Course --</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label text-white my-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <button
                    className="btn bg-purple-800 mt-4 text-white"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ======================= */}
      </div>
      <Footer />
    </>
  );
}
