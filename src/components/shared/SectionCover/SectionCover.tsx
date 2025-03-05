import Container from "../Container";
import NavigationBreadCrumb from "../NavigationBreadCrumb/NavigationBreadCrumb";

const SectionCover = ({ pageName }: { pageName: string }) => {
  return (
    <div className="section-cover-img">
      <Container>
        {/* Header Section Start */}
        <div className="flex flex-col justify-center items-center  h-[400px]">
          <NavigationBreadCrumb />
          <h1 className="mt-6 font-roboto text-white font-bold  text-[40px] tracking-[.2px] leading-[30px]">
            {pageName}
          </h1>
        </div>
        {/* Header Section End */}
      </Container>
    </div>
  );
};

export default SectionCover;
