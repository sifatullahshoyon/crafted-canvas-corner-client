import React from "react";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="bg-[#EF6291]">
      <Container>
        <div className="flex h-14 items-center px-4 ">
          <DeskNav />
          <MobileNav />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
