import "./TestimonialSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import client1 from "../../../assets/images/client/client1.jpg";
import client2 from "../../../assets/images/client/client2.png";
import client3 from "../../../assets/images/client/client3.jpg";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#EF6291",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src={client2}
              alt="client img"
              className="w-24 h-24 rounded-full"
              width={56}
              height={56}
            />
            <h4 className="pt-6 font-roboto font-bold text-[#1A1A1A] text-base uppercase">
              Jeck nalsomes
            </h4>
            <p className="pt-2 pb-4 font-roboto text-[12px] text-[#1A1A1A] font-medium">
              Web Designer
            </p>
            <p className="font-normal font-roboto text-center text-balance text-[13px] text-[#888888]">
              Passage of Lorem Ipsum, you need om Ipsum, you need Ipsum, you ed
              to bhere hin in Middle <br /> of.Passage of Lorem Ipsum, you need.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src={client3}
              alt="client img"
              className="w-24 h-24 rounded-full"
              width={56}
              height={56}
            />
            <h4 className="pt-6 font-roboto font-bold text-[#1A1A1A] text-base uppercase">
              LUIES CHARLS
            </h4>
            <p className="pt-2 pb-4 font-roboto text-[12px] text-[#1A1A1A] font-medium">
              UI/UX Designer
            </p>
            <p className="font-normal font-roboto text-center text-balance text-[13px] text-[#888888]">
              Passage of Lorem Ipsum, you need om Ipsum, you need Ipsum, you ed
              to bhere hin in Middle <br /> of.Passage of Lorem Ipsum, you need.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src={client1}
              alt="client img"
              className="w-24 h-24 rounded-full"
              width={56}
              height={56}
            />
            <h4 className="pt-6 font-roboto font-bold text-[#1A1A1A] text-base uppercase">
              jecob goeckno
            </h4>
            <p className="pt-2 pb-4 font-roboto text-[12px] text-[#1A1A1A] font-medium">
              Project Manager
            </p>
            <p className="font-normal font-roboto text-center text-balance text-[13px] text-[#888888]">
              Passage of Lorem Ipsum, you need om Ipsum, you need Ipsum, you ed
              to bhere hin in Middle <br /> of.Passage of Lorem Ipsum, you need.
            </p>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
