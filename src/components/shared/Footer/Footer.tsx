import Container from "../Container";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Facebook from "../icon/Facebook";
import LinkedIn from "../icon/Linkedin";
import YouTube from "../icon/Youtube";

const Footer = () => {
  return (
    <footer className="bg-[#EF6291]">
      <Container>
        <div className="flex items-center justify-center h-full py-6 lg:py-0 lg:h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-6 ">
            {/* logo */}
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="pb-4" />
              </Link>
              <hr className="w-12" />
              {/* social icons */}
              <div className="flex justify-start items-center flex-wrap gap-4 mt-6">
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <Facebook />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <LinkedIn />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <YouTube />
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-lg font-bold text-white font-roboto pb-4">
                Information
              </h4>
              <hr className="w-12" />
              <div className="mt-6 flex flex-col">
                <Link
                  to="/about-us"
                  className="text-sm font-roboto text-white mb-2"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-sm font-roboto text-white mb-2"
                >
                  Products
                </Link>
                <Link to="/" className="text-sm font-roboto text-white mb-2">
                  About Us
                </Link>
                <Link
                  to="/about-us"
                  className="text-sm font-roboto text-white mb-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* our company */}
            <div>
              <h4 className="text-lg font-bold text-white font-roboto pb-4">
                Our company
              </h4>
              <hr className="w-12" />
              <div className="mt-6 flex flex-col">
                <Link
                  to="/"
                  className="text-sm font-roboto text-white mb-2 tracking-wide"
                >
                  Delivery
                </Link>
                <Link
                  to="/"
                  className="text-sm font-roboto text-white mb-2 tracking-wide"
                >
                  Legal Notice
                </Link>
                <Link
                  to="/"
                  className="text-sm font-roboto text-white mb-2 text-balance tracking-wide"
                >
                  Terms and conditions of use
                </Link>
                <Link
                  to="/"
                  className="text-sm font-roboto text-white mb-2 tracking-wide"
                >
                  Affiliate
                </Link>
              </div>
            </div>
            {/* About Our Store */}
            <div>
              <h4 className="text-lg font-bold text-white font-roboto pb-4">
                About Our Store
              </h4>
              <hr className="w-12" />
              <div className="mt-6 flex flex-col">
                <p className="font-roboto text-[#F7F7F7] text-sm tracking-wide text-balance">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. LoremIpsum has been the industry's
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
            {/* Subscribe Newsletter*/}
            <div>
              <h4 className="text-lg font-bold text-white font-roboto pb-4">
                Subscribe Newsletter
              </h4>
              <hr className="w-12" />
              <div className="mt-6 flex flex-col">
                <p className="font-roboto text-[#F7F7F7] text-sm tracking-wide text-balance">
                  Signup our newsletter to get update information, news, insight
                  or promotions.
                </p>
                <div className="md:flex w-full max-w-sm items-center md:space-x-2 space-y-2 lg:space-y-0 mt-6">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className="text-[#1A1A1A] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-transparent outline-none placeholder:font-roboto font-roboto "
                  />
                  <Button type="submit" variant="secondary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
