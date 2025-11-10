import CategoryCards from "../components/CategoryCards";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <HeroSlider />
      <CategoryCards />
    </div>
  );
};

export default Home;
