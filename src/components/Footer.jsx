import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="container mx-auto my-4 space-y-4 text-base-content">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-base-200 rounded-2xl p-8 shadow-sm">
        {/* Brand */}
        <aside className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="CleanConnect Logo"
              className="w-10 h-10"
            />
            <h2 className="text-xl font-bold text-primary">CleanConnect</h2>
          </div>
          <p className="text-sm text-gray-600">
            Empowering communities to report, track, and resolve environmental
            issues — together for a cleaner tomorrow.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3 text-primary">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-secondary transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-secondary transition-colors"
            >
              {/* <FaTwitter size={20} /> */}
              <PiXLogo />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-secondary transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-secondary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-primary mb-2">Services</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="link link-hover">Community Reporting</a>
            </li>
            <li>
              <a className="link link-hover">Cleanup Drives</a>
            </li>
            <li>
              <a className="link link-hover">Environmental Awareness</a>
            </li>
            <li>
              <a className="link link-hover">Volunteer Programs</a>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-primary mb-2">Company</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="link link-hover">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
            <li>
              <a className="link link-hover">Our Mission</a>
            </li>
            <li>
              <a className="link link-hover">Partners</a>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-primary mb-2">Legal</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="link link-hover">Terms of Use</a>
            </li>
            <li>
              <a className="link link-hover">Privacy Policy</a>
            </li>
            <li>
              <a className="link link-hover">Cookie Policy</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="footer footer-center bg-base-300 text-gray-600 py-4 rounded-2xl text-sm">
        <p className="flex">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">CleanConnect</span> — All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
