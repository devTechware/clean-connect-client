import { useEffect, useState } from "react";
import { FiTrendingUp, FiUsers, FiTarget, FiAward } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";

const ImpactMetrics = () => {
  const [counters, setCounters] = useState({
    issues: 0,
    users: 0,
    resolved: 0,
    contributions: 0,
  });

  const targets = {
    issues: 8547,
    users: 15234,
    resolved: 7892,
    contributions: 45680,
  };

  // 🔥 Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => ({
        issues: Math.min(prev.issues + Math.ceil(targets.issues / steps), targets.issues),
        users: Math.min(prev.users + Math.ceil(targets.users / steps), targets.users),
        resolved: Math.min(prev.resolved + Math.ceil(targets.resolved / steps), targets.resolved),
        contributions: Math.min(prev.contributions + Math.ceil(targets.contributions / steps), targets.contributions),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      icon: <FiTarget className="text-4xl" />,
      value: counters.issues.toLocaleString(),
      label: "Total Issues Reported",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      suffix: "+",
    },
    {
      icon: <FiUsers className="text-4xl" />,
      value: counters.users.toLocaleString(),
      label: "Active Community Members",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      suffix: "+",
    },
    {
      icon: <FiAward className="text-4xl" />,
      value: counters.resolved.toLocaleString(),
      label: "Successfully Resolved",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      suffix: "+",
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      value: `$${counters.contributions.toLocaleString()}`,
      label: "Community Contributions",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      suffix: "",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time statistics showing the collective power of our community
            </p>
          </div>
        </Fade>

        <Slide direction="up" cascade damping={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${metric.bgColor} ${metric.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </Slide>

        {/* Progress Visualization */}
        <Fade delay={400}>
          <div className="mt-12 bg-base-100 rounded-2xl p-8 border border-base-300">
            <h3 className="text-2xl font-bold mb-6 text-center">Resolution Success Rate</h3>
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Overall Success</span>
                <span className="text-sm font-medium">92.4%</span>
              </div>
              <div className="w-full bg-base-300 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-linear-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-2000 ease-out"
                  style={{ width: '92.4%' }}
                ></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs">Garbage Collection</span>
                    <span className="text-xs font-medium">95%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs">Road Repairs</span>
                    <span className="text-xs font-medium">88%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs">Public Property</span>
                    <span className="text-xs font-medium">93%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '93%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ImpactMetrics;