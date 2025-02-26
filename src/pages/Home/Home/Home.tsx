// import Blogs from "../Blog/Blogs";
import Brand from "../Brand/Brand";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";
import WelcomeToStore from "../WelcomeToStore/WelcomeToStore";

const Home = () => {
  return (
    <div>
      <Hero />
      <WelcomeToStore />
      <FeaturedProducts />
      <Testimonial />
      {/* <Blogs /> */}
      <Brand />
    </div>
  );
};

export default Home;
