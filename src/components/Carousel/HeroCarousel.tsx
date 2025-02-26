import "./TestimonialSlider/TestimonialSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../assets/images/hero/main-banner-1.jpg";
import banner2 from "../../assets/images/hero/main-banner-2.jpg";
import banner3 from "../../assets/images/hero/main-banner-3.jpg";

const HeroCarousel = () => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#EF6291",
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img src={banner1} alt="banner img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={banner2} alt="banner img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={banner3} alt="banner img" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
