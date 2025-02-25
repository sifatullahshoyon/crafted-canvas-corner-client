import Container from "@/components/shared/Container";
import Marquee from "react-fast-marquee";
import brandImg1 from "../../../assets/images/brand/logo1.png";
import brandImg2 from "../../../assets/images/brand/logo2.jpg";
import brandImg3 from "../../../assets/images/brand/logo3.jpg";
import brandImg4 from "../../../assets/images/brand/logo4.jpg";
import brandImg5 from "../../../assets/images/brand/logo5.jpg";
import brandImg6 from "../../../assets/images/brand/logo6.jpg";
import brandImg7 from "../../../assets/images/brand/logo7.jpg";

const Brand = () => {
  return (
    <div className="mt-24">
      <Container>
        <>
          <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
            Top Brands
          </h1>
          <hr className="w-24 h-[3px] bg-[#EF6291]" />
          <div>
            <Marquee className="my-6">
              <div className="flex justify-center items-center gap-12">
                <img src={brandImg1} alt="brandImg1" />
                <img src={brandImg2} alt="brandImg2" />
                <img src={brandImg3} alt="brandImg3" />
                <img src={brandImg4} alt="brandImg4" />
                <img src={brandImg5} alt="brandImg5" />
                <img src={brandImg6} alt="brandImg6" />
                <img src={brandImg7} alt="brandImg7" />
              </div>
              <div className="flex justify-center items-center gap-12">
                <img src={brandImg1} alt="brandImg1" />
                <img src={brandImg2} alt="brandImg2" />
                <img src={brandImg3} alt="brandImg3" />
                <img src={brandImg4} alt="brandImg4" />
                <img src={brandImg5} alt="brandImg5" />
                <img src={brandImg6} alt="brandImg6" />
                <img src={brandImg7} alt="brandImg7" />
              </div>
            </Marquee>
          </div>
        </>
      </Container>
    </div>
  );
};

export default Brand;
