import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  // 🔥 Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-base-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* ==================
              COLUMN 1: ABOUT
              ================== */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" className="w-8 h-8" alt="Logo" />
              <h2 className="text-2xl font-bold text-primary">CleanConnect</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Empowering communities to report, track, and resolve environmental
              issues for a cleaner, healthier future.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <PiXLogo />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* ==================
              COLUMN 2: QUICK LINKS
              ================== */}
          <div>
            <h6 className="text-lg font-bold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/issues"
                  className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  All Issues
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-issue"
                  className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Report Issue
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ==================
              COLUMN 3: RESOURCES
              ================== */}
          <div>
            <h6 className="text-lg font-bold mb-4">Resources</h6>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/dashboard"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-issues"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  My Issues
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-contribution"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  My Contributions
                </NavLink>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* ==================
              COLUMN 4: CONTACT INFO
              ================== */}
          <div>
            <h6 className="text-lg font-bold mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <FiMail className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:support@cleanconnect.com"
                  className="hover:text-primary transition-colors"
                >
                  support@cleanconnect.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <FiPhone className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="hover:text-primary transition-colors"
                >
                  +880 1234-567890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                <span>
                  123 Green Street
                  <br />
                  Dhaka 1000, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ==================
            DIVIDER
            ================== */}
        <div className="divider my-6"></div>

        {/* ==================
            BOTTOM BAR
            ================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} CleanConnect. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#privacy"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#terms"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#cookies"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn btn-circle btn-sm btn-primary"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
