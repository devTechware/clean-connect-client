import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto space-y-2">
      <div className="px-4 footer sm:footer-horizontal bg-base-200 text-base-content py-4 rounded-xl">
        <aside>
          <img src="/favicon.png" alt="Logo" />
          <p>
            Clean Connect
            <br />
            Report. Track. Resolve. Together.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content py-4 rounded-xl">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Clean
            Connect
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
