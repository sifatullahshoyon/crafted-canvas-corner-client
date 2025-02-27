import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import img1 from "../../../assets/images/store/aboutcms1.jpg";
import img2 from "../../../assets/images/store/aboutcms2.jpg";
import img3 from "../../../assets/images/store/aboutcms3.jpg";

const WelcomeToStore = () => {
  return (
    <section className="mt-24">
      <Container>
        <div className="flex flex-col md:flex md:flex-row justify-center items-center gap-6">
          {/* content part */}
          <div>
            <p className="font-roboto text-[30px] tracking-wide text-[#EF6291] mb-4">
              Our Story!!
            </p>
            <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] mb-6">
              Welcome To Store.
            </h1>
            <p className="font-roboto text-sm text-[#888888] tracking-wide leading-[26px] mb-[70px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <Button
              variant="destructive"
              className="bg-[#EF6291] text-white font-medium font-roboto tracking-wide hover:bg-[#EF6291] px-6 text-base"
            >
              Read More
            </Button>
          </div>
          {/* img part */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="md:col-span-2">
              <img
                src={img1}
                alt="product img 1"
                className="w-full h-full opacity-0 animate-fade-in"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src={img2}
                alt="product img 2"
                className="w-full h-full opacity-0 animate-fade-in"
              />
              <img
                src={img3}
                alt="product img 3"
                className="w-full h-full opacity-0 animate-fade-in"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeToStore;
