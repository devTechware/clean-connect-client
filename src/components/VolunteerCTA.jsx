import { FaHandsHelping, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const VolunteerCTA = () => {
  return (
    <section className="relative bg-linear-to-br from-primary/10 via-base-200 to-accent/10 py-16 px-6 my-5 rounded-xl overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <FaHandsHelping className="text-primary text-6xl mx-auto mb-6 animate-bounce" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Join the CleanConnect Movement 🌍
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Be a local hero — take part in our community clean-up drives, spread
          awareness, and help us build a cleaner, greener future for everyone.
          Every hand makes a difference!
        </p>

        <Link
          to="/volunteer"
          className="btn bg-primary hover:bg-secondary text-white border-none px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        >
          <FaLeaf className="mr-2" /> Become a Volunteer
        </Link>
      </div>
    </section>
  );
};

export default VolunteerCTA;
