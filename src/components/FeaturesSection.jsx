import { FiMapPin, FiUsers, FiTrendingUp, FiShield, FiBell, FiHeart } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiMapPin className="text-4xl" />,
      title: "Location-Based Reporting",
      description: "Report issues with precise location data and visual evidence for faster resolution.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Community Driven",
      description: "Join thousands of active citizens working together to create cleaner neighborhoods.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Track Progress",
      description: "Monitor the status of reported issues in real-time and see community impact metrics.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: "Verified Reports",
      description: "All reports are verified by moderators to ensure authenticity and proper action.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: <FiBell className="text-4xl" />,
      title: "Instant Notifications",
      description: "Get real-time updates when your reported issues are addressed or need attention.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Support Local Drives",
      description: "Contribute financially to community cleanup initiatives and volunteer programs.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose CleanConnect?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering communities with tools to report, track, and resolve environmental issues efficiently.
            </p>
          </div>
        </Fade>

        <Slide direction="up" cascade damping={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default FeaturesSection;