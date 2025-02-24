import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="bg-[#EF6291]">
      <Container>
        <div className="flex h-20 items-center">
          <DeskNav />
          <MobileNav />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
