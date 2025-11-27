import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

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
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", phone: "", course: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Try again.");
      });
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="w-full min-h-screen bg-gray-50">
        <div className="w-full h-56 bg-linear-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Get in Touch With Us</h1>
        </div>

        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Select Course</label>
              <select
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}