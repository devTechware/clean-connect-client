import { FaUsers, FaLeaf, FaShieldAlt, FaTools } from "react-icons/fa";
import CommunityStats from "../components/CommunityStats";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="w-full">
      {/* 1️⃣ Hero Section */}
      <section className="bg-linear-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About CleanConnect
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Building cleaner communities through transparency, technology, and
            collective action.
          </p>
          <Link to="/issues" className="btn btn-outline btn-white mt-6">
            Explore Issues
          </Link>
        </div>
      </section>

      {/* 2️⃣ Our Story */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.ibb.co.com/Lh6r6yCg/community-cleaning.jpg"
            alt="Community"
            className="rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>
            <p className="text-base-content leading-relaxed">
              CleanConnect was created to empower citizens to report
              environmental and public infrastructure issues in their local
              areas. Our goal is to bridge the gap between communities and
              responsible authorities by providing a transparent, easy-to-use
              reporting system.
            </p>
          </div>
        </div>
      </section>

      {/* 3️⃣ Mission & Vision */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              Our Mission
            </h3>
            <p>
              Encourage civic responsibility by making issue reporting simple,
              accessible, and transparent for everyone.
            </p>
          </div>
          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              Our Vision
            </h3>
            <p>
              Cleaner cities, active communities, and faster resolution of
              environmental and public safety issues.
            </p>
          </div>
        </div>
      </section>

      {/* 4️⃣ What We Do */}
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">
            What We Do
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard icon={<FaLeaf />} title="Report Issues" />
            <FeatureCard icon={<FaUsers />} title="Community Engagement" />
            <FeatureCard icon={<FaTools />} title="Track Progress" />
            <FeatureCard icon={<FaShieldAlt />} title="Secure Platform" />
          </div>
        </div>
      </section>

      {/* 5️⃣ How It Works */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Login", "Report Issue", "Track Status", "Get Resolution"].map(
              (step, index) => (
                <div key={index} className="card bg-base-100 shadow p-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 6️⃣ Community Stats */}
      <section className="py-16 bg-base-100">
        <CommunityStats />
      </section>

      {/* 7️⃣ Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Why CleanConnect?
          </h2>
          <ul className="space-y-3 text-left inline-block">
            <li>✔ Community-first reporting approach</li>
            <li>✔ Real-time issue tracking</li>
            <li>✔ Secure authentication</li>
            <li>✔ Fully responsive design</li>
          </ul>
        </div>
      </section>

      {/* 8️⃣ Call To Action */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Be a Part of the Change</h2>
        <p className="mb-6">
          Report issues, join clean-up drives, and help make your community
          better.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/add-issue" className="btn btn-secondary">
            Report an Issue
          </Link>
          <Link to="/register" className="btn btn-outline btn-white">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="card bg-base-200 shadow-md p-6 text-center">
    <div className="text-4xl text-primary mb-3">{icon}</div>
    <h4 className="font-semibold">{title}</h4>
  </div>
);

export default About;
