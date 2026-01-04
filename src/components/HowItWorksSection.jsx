import { FiEdit, FiUpload, FiCheckCircle, FiAward } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <FiEdit className="text-3xl" />,
      title: "Report an Issue",
      description:
        "Create a detailed report with photos, location, and description of the environmental issue you've noticed.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: <FiUpload className="text-3xl" />,
      title: "Submit for Review",
      description:
        "Your report is submitted to our verification system and local authorities for validation and action.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: <FiCheckCircle className="text-3xl" />,
      title: "Track Progress",
      description:
        "Monitor the status of your report in real-time as it moves through different resolution stages.",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      icon: <FiAward className="text-3xl" />,
      title: "See the Impact",
      description:
        "Celebrate the resolution and see how your contribution has made your community cleaner and better.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four simple steps to make a real difference in your community
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Slide key={index} direction="up" delay={index * 100}>
              <div className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="bg-base-100 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`bg-linear-to-br ${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>

        {/* CTA Button */}
        <Fade delay={400}>
          <div className="text-center mt-12">
            <button className="btn btn-primary btn-lg">
              Start Reporting Now
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HowItWorksSection;
