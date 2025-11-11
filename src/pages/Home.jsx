import { useLoaderData } from "react-router";
import CategoryCards from "../components/CategoryCards";
import HeroSlider from "../components/HeroSlider";
import IssueCard from "../components/IssueCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="container mx-auto py-10">
      <HeroSlider />
      <CategoryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
        {data.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export default Home;
