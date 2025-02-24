import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

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
            <p className="font-roboto text-sm text-[#888888] tracking-wide leading-normal mb-[70px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <Button>Read More</Button>
          </div>
          {/* img part */}
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default WelcomeToStore;
