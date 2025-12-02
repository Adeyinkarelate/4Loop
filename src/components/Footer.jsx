import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0f] text-gray-400 py-8 border-t border-gray-800 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Left - Copyright */}
        <p className="text-sm">© Adexbit Tech School</p>

        {/* Center - Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          {/* <FaYoutube className="hover:text-white transition" /> */}
          {/* <FaTwitter className="hover:text-white transition" /> */}
          <FaFacebook className="hover:text-white transition" />
          {/* <FaLinkedin className="hover:text-white transition" />
          <FaInstagram className="hover:text-white transition" /> */}

          <a target="_blank" href="https://tiktok.com/@adexbits">
            <FaTiktok className="hover:text-white transition" />
          </a>
        </div>

        {/* Right - Links */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
