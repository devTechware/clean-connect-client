import { useLoaderData, useLocation } from "react-router";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import CategoryCards from "../components/CategoryCards";
import HeroSlider from "../components/HeroSlider";
import IssueCard from "../components/IssueCard";
import CommunityStats from "../components/CommunityStats";
import VolunteerCTA from "../components/VolunteerCTA";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import ImpactMetrics from "../components/ImpactMetrics";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { FiArrowDown } from "react-icons/fi";
import { NavLink } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const { pathname } = useLocation();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <title>Home - CleanConnect</title>
      <div className="space-y-16">
        {/* ==========================================
            SECTION 1: HERO SECTION WITH SLIDER
            ========================================== */}
        <section className="relative">
          <Zoom>
            <div className="container mx-auto py-4">
              <HeroSlider />
            </div>
          </Zoom>

          {/* 🔥 Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-primary">
              <span className="text-sm font-medium mb-1">Scroll Down</span>
              <FiArrowDown className="text-2xl" />
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: FEATURES SECTION
            ========================================== */}
        <FeaturesSection />

        {/* ==========================================
            SECTION 3: HOW IT WORKS SECTION
            ========================================== */}
        <HowItWorksSection />

        {/* ==========================================
            SECTION 4: CATEGORY CARDS SECTION
            ========================================== */}
        <section className="bg-base-100 py-16">
          <div className="container mx-auto px-4">
            <Fade>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Issue Categories
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select a category to quickly report specific types of
                  environmental issues
                </p>
              </div>
            </Fade>
            <Slide direction="up" cascade damping={0.5}>
              <CategoryCards />
            </Slide>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: RECENT ISSUES SECTION
            ========================================== */}
        <section className="bg-base-200 py-16">
          <div className="container mx-auto px-4">
            <Fade>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Recent Community Issues
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See the latest reported issues and their current status
                </p>
              </div>
            </Fade>

            <Fade cascade damping={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.slice(0, 6).map((issue) => (
                  <IssueCard key={issue._id} issue={issue} />
                ))}
              </div>
            </Fade>

            <Fade delay={400}>
              <div className="text-center mt-8">
                <NavLink to="/issues" className="btn btn-primary btn-lg">
                  View All Issues
                </NavLink>
              </div>
            </Fade>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: IMPACT METRICS SECTION
            ========================================== */}
        <ImpactMetrics />

        {/* ==========================================
            SECTION 7: COMMUNITY STATS SECTION
            ========================================== */}
        <section className="bg-base-100 py-16">
          <div className="container mx-auto px-4">
            <Zoom>
              <CommunityStats />
            </Zoom>
          </div>
        </section>

        {/* ==========================================
            SECTION 8: TESTIMONIALS SECTION
            ========================================== */}
        <TestimonialsSection />

        {/* ==========================================
            SECTION 9: VOLUNTEER CTA SECTION
            ========================================== */}
        <section className="bg-base-200 py-16">
          <div className="container mx-auto px-4">
            <Slide direction="right">
              <VolunteerCTA />
            </Slide>
          </div>
        </section>

        {/* ==========================================
            SECTION 10: SUCCESS STORIES SECTION
            ========================================== */}
        <section className="bg-base-100 py-16">
          <div className="container mx-auto px-4">
            <Fade>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Real impact from our community's collective efforts
                </p>
              </div>
            </Fade>

            <Slide direction="up" cascade damping={0.1}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop"
                    alt="Cleanup drive"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Gulshan Lake Cleanup
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Over 200 volunteers removed 5 tons of waste from Gulshan
                      Lake, restoring its natural beauty.
                    </p>
                    <span className="text-sm text-primary font-semibold">
                      Completed in 2 weeks
                    </span>
                  </div>
                </div>

                <div className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop"
                    alt="Road repair"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Dhanmondi Road Repairs
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Major potholes on Road 27 fixed after community members
                      raised 45 reports in one week.
                    </p>
                    <span className="text-sm text-primary font-semibold">
                      Fixed in 10 days
                    </span>
                  </div>
                </div>

                <div className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop"
                    alt="Park renovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Ramna Park Renovation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Community funding and volunteer efforts transformed a
                      neglected park into a green oasis.
                    </p>
                    <span className="text-sm text-primary font-semibold">
                      Completed in 1 month
                    </span>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </section>

        {/* ==========================================
            SECTION 11: NEWSLETTER SECTION
            ========================================== */}
        <NewsletterSection />

        {/* ==========================================
            SECTION 12: PARTNERS SECTION
            ========================================== */}
        {/* <section className="bg-base-100 py-16">
          <div className="container mx-auto px-4">
            <Fade>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Our Partners & Sponsors
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Working together with organizations to create lasting change
                </p>
              </div>
            </Fade>

            <Zoom>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-base-200 rounded-xl p-6 flex items-center justify-center aspect-square border border-base-300 hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl font-bold text-primary opacity-30">
                      LOGO {i}
                    </span>
                  </div>
                ))}
              </div>
            </Zoom>
          </div>
        </section> */}

        {/* ==========================================
            SECTION 13: FINAL CTA SECTION
            ========================================== */}
        <section className="bg-linear-to-br from-primary to-secondary py-20">
          <div className="container mx-auto px-4">
            <Zoom>
              <div className="text-center text-white max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Make a Difference?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of citizens working together to create cleaner,
                  healthier communities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <NavLink
                    to="/register"
                    className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none"
                  >
                    Get Started Free
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </Zoom>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
