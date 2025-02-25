import Container from "@/components/shared/Container";
import SectionCover from "@/components/shared/SectionCover/SectionCover";
import aboutImg from "../../../assets/images/about-us/about-us.jpg";
import ourMission from "../../../assets/images/about-us/our-mission.jpg";
import ourVision from "../../../assets/images/about-us/our-vision.png";

const About = () => {
  return (
    <>
      <SectionCover pageName="About Us" />
      <Container>
        {/* about us */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* img  */}
          <div>
            <img src={aboutImg} alt="" className="rounded " />
          </div>
          {/* content part */}
          <div className="flex flex-col items-center h-full justify-center">
            <div>
              <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
                About Us
              </h1>
              <hr className="w-24 h-[3px] bg-[#EF6291]" />
              <p className="font-roboto text-[#888888] text-justify mt-6">
                At Stationery Haven, our mission is to inspire creativity and
                productivity by providing high-quality, unique, and affordable
                stationery products. We carefully curate our selection to ensure
                variety and excellence, catering to the diverse tastes and
                preferences of our customers. Our dedicated team is committed to
                delivering exceptional customer service and creating a welcoming
                community for all stationery enthusiasts. Thank you for choosing
                Stationery Haven as your trusted source for all your stationery
                needs!
              </p>
            </div>
          </div>
        </div>
        {/* our mission */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* content part */}
          <div className="flex flex-col items-center h-full justify-center">
            <div>
              <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
                Our Mission
              </h1>
              <hr className="w-24 h-[3px] bg-[#EF6291]" />
              <p className="font-roboto text-[#888888] text-justify mt-6">
                At Stationery Haven, our mission is to inspire creativity and
                productivity by providing high-quality, unique, and affordable
                stationery products. We carefully curate our selection to ensure
                variety and excellence, catering to the diverse tastes and
                preferences of our customers. Our dedicated team is committed to
                delivering exceptional customer service and creating a welcoming
                community for all stationery enthusiasts. Thank you for choosing
                Stationery Haven as your trusted source for all your stationery
                needs!
              </p>
            </div>
          </div>
          {/* img  */}
          <div>
            <img src={ourMission} alt="" className="rounded " />
          </div>
        </div>
        {/* our vission */}
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* img  */}
          <div>
            <img src={ourVision} alt="" className="rounded " />
          </div>
          {/* content part */}
          <div className="flex flex-col items-center h-full justify-center">
            <div>
              <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
                Our Vision
              </h1>
              <hr className="w-24 h-[3px] bg-[#EF6291]" />
              <p className="font-roboto text-[#888888] text-justify mt-6">
                Our vision at Stationery Haven is to become the premier
                destination for stationery enthusiasts, fostering a community
                where creativity and productivity thrive. We aim to inspire and
                empower individuals through our exceptional products and
                services. By continuously innovating and expanding our product
                range, we strive to meet the evolving needs of our customers
                while maintaining the highest standards of quality and
                affordability. Together, let's create a world where every pen
                stroke and sheet of paper sparks joy and creativity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
