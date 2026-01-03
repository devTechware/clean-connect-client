import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔥 Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting us. We'll get back to you soon.",
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  // 🔥 Contact information cards
  const contactInfo = [
    {
      icon: <FiMail className="text-3xl" />,
      title: "Email Us",
      content: "support@cleanconnect.com",
      link: "mailto:support@cleanconnect.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <FiPhone className="text-3xl" />,
      title: "Call Us",
      content: "+880 1234-567890",
      link: "tel:+8801234567890",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "Visit Us",
      content: "123 Green Street, Dhaka 1000, Bangladesh",
      link: "#",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: "Live Chat",
      content: "Available 24/7 for instant support",
      link: "#",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  // 🔥 FAQ data
  const faqs = [
    {
      question: "How do I report an issue?",
      answer:
        "Simply click on 'Add Issue' in the navigation menu, fill in the details with photos, and submit. Your report will be reviewed and forwarded to the relevant authorities.",
    },
    {
      question: "How long does it take to resolve an issue?",
      answer:
        "Resolution time varies depending on the nature and severity of the issue. On average, garbage collection issues are resolved within 3-5 days, while infrastructure repairs may take 1-2 weeks.",
    },
    {
      question: "Can I track my reported issues?",
      answer:
        "Yes! You can track all your reported issues in the 'My Issues' section of your dashboard. You'll receive real-time updates on the status of each report.",
    },
    {
      question: "Is CleanConnect available in my city?",
      answer:
        "We're currently operational in 15 major cities. Check our coverage map or contact us to request expansion to your area.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* ==================
          HERO SECTION
          ================== */}
      <Fade>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to
            us through any of the channels below.
          </p>
        </div>
      </Fade>

      {/* ==================
          CONTACT CARDS
          ================== */}
      <Slide direction="up" cascade damping={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div
                className={`${info.bgColor} ${info.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{info.title}</h3>
              <p className="text-sm text-gray-600">{info.content}</p>
            </a>
          ))}
        </div>
      </Slide>

      {/* ==================
          CONTACT FORM & MAP
          ================== */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <Slide direction="left">
          <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Your Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Subject *</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="What's this about?"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Message *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32 w-full"
                  placeholder="Tell us more..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full gap-2"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </Slide>

        {/* Map */}
        <Slide direction="right">
          <div className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.25446!3d23.780573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CleanConnect Office Location"
            ></iframe>
          </div>
        </Slide>
      </div>

      {/* ==================
          FAQ SECTION
          ================== */}
      <Fade>
        <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-xl p-6 border border-base-300"
              >
                <h3 className="text-lg font-bold mb-3 text-primary">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ==================
          CTA SECTION
          ================== */}
      <Fade delay={200}>
        <div className="mt-12 bg-linear-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any queries or
            concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none">
              Start Live Chat
            </button>
            <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              View Help Center
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
