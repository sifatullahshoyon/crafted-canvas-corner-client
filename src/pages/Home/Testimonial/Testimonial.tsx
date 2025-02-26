import TestimonialSlider from "@/components/Carousel/TestimonialSlider/TestimonialSlider";
import Container from "@/components/shared/Container";

const Testimonial = () => {
  return (
    <section className="mt-24">
      <Container>
        <div className="testimonial">
          <TestimonialSlider />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
