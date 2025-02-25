// import Blogs from "../Blog/Blogs";
import Brand from "../Brand/Brand";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Hero from "../Hero/Hero";
import WelcomeToStore from "../WelcomeToStore/WelcomeToStore";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeToStore />
      <FeaturedProducts />
      {/* <Blogs /> */}
      <Brand />
    </div>
  );
};

export default Home;
