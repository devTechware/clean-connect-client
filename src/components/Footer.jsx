import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="container mx-auto my-6 text-base-content">
      <div className="grid md:grid-cols-4 gap-6 bg-base-200 rounded-2xl p-8">

        <aside>
          <h2 className="text-xl font-bold text-primary">CleanConnect</h2>
          <p className="text-sm">
            Building cleaner communities together.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <NavLink to="/about" className="link link-hover">About Us</NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Services</h6>
          <p className="text-sm">Community Reporting</p>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-3">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <PiXLogo />
          </div>
        </nav>
      </div>

      <p className="text-center text-sm mt-4">
        © {new Date().getFullYear()} CleanConnect
      </p>
    </footer>
  );
};

export default Footer;
