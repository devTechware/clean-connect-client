import { useLoaderData, useLocation } from "react-router";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import CategoryCards from "../components/CategoryCards";
import HeroSlider from "../components/HeroSlider";
import IssueCard from "../components/IssueCard";
import CommunityStats from "../components/CommunityStats";
import VolunteerCTA from "../components/VolunteerCTA";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

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
      <title>Home</title>
      <div className="container mx-auto py-10">
        {/* Hero Section */}
        <Zoom>
          <HeroSlider />
        </Zoom>

        {/* Category Cards */}
        <Slide direction="up" cascade damping={0.5}>
          <CategoryCards />
        </Slide>

        {/* Recent Issues */}
        <Fade cascade damping={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
            {data.map((issue) => (
              <IssueCard key={issue._id} issue={issue} />
            ))}
          </div>
        </Fade>

        {/* Community Stats */}
        <Zoom>
          <CommunityStats />
        </Zoom>

        {/* Volunteer Call-to-Action */}
        <Slide direction="right">
          <VolunteerCTA />
        </Slide>
      </div>
    </>
  );
};

export default Home;
