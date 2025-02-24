import Slider from "react-slick";
import banner1 from "../../assets/images/hero/main-banner-1.jpg";
import banner2 from "../../assets/images/hero/main-banner-2.jpg";
import banner3 from "../../assets/images/hero/main-banner-3.jpg";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="banner 1" />
      </div>
      <div>
        <img src={banner2} alt="banner 2" />
      </div>
      <div>
        <img src={banner3} alt="banner 3" />
      </div>
      <div>
        <img src={banner1} alt="banner 1" />
      </div>
      <div>
        <img src={banner2} alt="banner 2" />
      </div>
      <div>
        <img src={banner3} alt="banner 3" />
      </div>
    </Slider>
  );
};

export default HeroCarousel;
