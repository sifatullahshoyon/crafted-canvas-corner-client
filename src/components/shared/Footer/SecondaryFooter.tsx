import { Link } from "react-router-dom";
import Container from "../Container";

const SecondaryFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] ">
      <Container>
        <div className="flex justify-center items-center">
          <p className="text-[#888888] text-sm font-roboto p-2 text-balance">
            Copyright © {year} Crafted Canvas Corner, By{" "}
            <Link
              to="https://www.linkedin.com/in/sifatullahshoyon/"
              className="hover:underline font-bold"
            >
              SifatUllahShoyonDEV
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default SecondaryFooter;
