import { FiStar } from "react-icons/fi";
import { Fade, Slide } from "react-awesome-reveal";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Community Leader",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "CleanConnect transformed how our neighborhood addresses cleanliness issues. Within weeks, we saw real improvements in our area!",
    },
    {
      name: "Karim Hassan",
      role: "Environmental Activist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "The platform makes it incredibly easy to report and track issues. The transparency and community engagement are outstanding.",
    },
    {
      name: "Nadia Islam",
      role: "Local Resident",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "I've reported three issues so far, and all were resolved quickly. It's amazing to see the community coming together like this.",
    },
    {
      name: "Rafiq Khan",
      role: "Shop Owner",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
      text: "Finally, a platform that actually works! The garbage problem near my shop was resolved in just 5 days. Highly recommended!",
    },
    {
      name: "Aisha Rahman",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      text: "I use CleanConnect with my students to teach civic responsibility. It's educational and makes a real impact in our city.",
    },
    {
      name: "Imran Hossain",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "The app is user-friendly and efficient. Love how I can contribute to making my city cleaner right from my phone.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <Fade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users making a difference in their neighborhoods
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Slide key={index} direction="up" delay={index * 50}>
              <div className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>

        {/* Trust Indicators */}
        <Fade delay={300}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">15K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">8.5K+</p>
              <p className="text-gray-600">Issues Resolved</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">95%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">4.9★</p>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TestimonialsSection;