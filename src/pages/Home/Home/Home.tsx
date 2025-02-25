import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Hero from "../Hero/Hero";
import WelcomeToStore from "../WelcomeToStore/WelcomeToStore";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeToStore />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
