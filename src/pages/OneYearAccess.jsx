import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCertificate,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const OneYearAccess = () => {
  return (
    <>
      <Helmet>
        <title> 1 Year Membership Adexbit EduTech Academy</title>
        <meta
          name="title"
          content=" 1 Year Membership | Adexbit EduTech Academy"
        />
        <meta
          name="description"
          content="Become a job-ready Full Stack Python Developer. Learn HTML, CSS, JavaScript, Tailwind, Python, Django, Django REST Framework (DRF), Git, APIs, and full-stack deployment."
        />

        <meta
          name="og:title"
          content="1 Year Membership | Adexbit EduTech Academy"
        />
        <meta
          name="og:description"
          content="Attend any class, master AWS, Linux, Full Stack Java or Python, earn certifications, and build your tech career — all in one powerful plan."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://adexbitedutech.com/OneYearAccess"
        />

        <meta
          name="keywords"
          content="Full Stack Python, Django, DRF, Python Developer Nigeria, Learn Python, Web Development, Backend Development, Adexbit EduTech"
        />
      </Helmet>
      <Navbar />

      <div className="bg-linear-60 from-[#c5d2e5]  to-[#c5d2e5] text-gray-700 overflow-y-hidden">
        {/*======== Hero ========*/}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight font-out"
            >
              Adexbit 1-Year Unlimited Access Plan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-gray-700"
            >
              Attend any class, master AWS, Linux, Full Stack Java or Python,
              earn certifications, and build your tech career — all in one
              powerful plan.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#pricing"
                className="px-8 py-4 bg-blue-950 text-white text-xl rounded-lg font-semibold transition"
              >
                Get Started — ₦1,200,000
              </a>
            </motion.div>
          </div>
        </div>

        {/*======== WHY THIS PLAN ========*/}
        <section className="py-16 px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold"
          >
            Why Choose the Unlimited Access Plan?
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCloud className="text-4xl text-blue-950" />,
                title: "Real Cloud Skills",
                desc: "AWS, Linux, DevOps & Full Stack mastery.",
              },
              {
                icon: <GiTeacher className="text-4xl  text-blue-950" />,
                title: "Mentorship Access",
                desc: "Live mentorship with our expert instructors.",
              },
              {
                icon: <FaCertificate className="text-4xl  text-blue-950" />,
                title: "Certifications",
                desc: "Free AWS Certified Cloud Practitioner exam paid for.",
              },
              {
                icon: <FaUsers className="text-4xl text-blue-950" />,
                title: "Community Support",
                desc: "Join a passionate learning community.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-3 font-out">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/*======== WHAT YOU GET ========*/}
        <section className="bg-blue-950 py-16 px-6 md:px-12 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl text-center font-bold mb-8"
          >
            What’s Included in the Plan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Unlimited access to AWS Solutions Architect track",
              "Unlimited project",
              "Full Stack Java + Spring Boot track",
              "Full Stack Python + Django track",
              "Interactive Labs & Capstone Projects",
              "Live Mentorship Sessions — Weekly",
              "Internship(Paid) and Job Opportunity",
              "Free AWS Certified Cloud Practitioner exam included",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 items-center bg-gray-700 p-4 rounded-lg"
              >
                <IoCheckmarkCircleOutline className="text-2xl text-amber-500" />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/*======== PRICING ========*/}
        {/* <section
          id="pricing"
          className="bg-linear-to-r from-purple-700 to-purple-500 py-20 px-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold text-white"
          >
            ₦1,200,000 — One Year Unlimited Access
          </motion.h2>
          <p className="mt-4 text-lg text-gray-100">
            All classes, all tracks, AWS CCP exam included, and mentorship.
          </p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-purple-700 font-bold rounded-lg text-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </a>
          </motion.div>
        </section> */}

        {/*======== SUPPORT ========*/}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold font-mon ">Need Help?</h2>
          <p className="mt-4 text-gray-700">
            For technical questions, ask on WhatsApp any time — our team is
            available to support you.
          </p>
          <p className="mt-2 mb-6 text-gray-700">
            Want course guidance or career advice? Check out our carefully
            designed learning paths.
          </p>
          <Link
              href="/contact"
              className=" px-10 py-4 bg-blue-950 text-white font-bold rounded-lg text-xl transition"
            >
              Enroll Now
            </Link>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default OneYearAccess;
