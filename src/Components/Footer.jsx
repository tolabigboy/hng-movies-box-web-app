import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pb-[74px] pt-[70px]">
      <div className="wrapper text-[#111827] text-2xl flex flex-col text-center justify-center font-bold gap-9">
        <div className="flex justify-center gap-6">
          <a href="www.facebook.com">
            <FaFacebookSquare />
          </a>
          <a href="www.instagram.com">
            <FiInstagram />
          </a>
          <a href="www.twitter.com">
            <FaTwitter />
          </a>
          <a href="www.youtube.com">
            <AiFillYoutube />
          </a>
        </div>
        <div className="links text-sm md:text-lg text-[#111827] flex justify-center gap-8 flex-wrap">
          <Link to="/">Conditions of Use</Link>
          <Link to="/"> Privacy & Policy</Link>
          <Link to="/"> Press Room</Link>
        </div>
        <p className="text-[#6B7280] text-sm md:text-lg  font-bold">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
