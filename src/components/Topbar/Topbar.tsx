import Container from "../shared/Container";
import Gmail from "../shared/icon/Gmail";
import Facebook from "../shared/icon/Facebook";
import LinkedIn from "../shared/icon/Linkedin";
import YouTube from "../shared/icon/Youtube";

const Topbar = () => {
  return (
    <div className="bg-[#1A1A1A] p-2">
      <Container>
        <div className="flex justify-between items-center">
          {/* info */}
          <div className="flex gap-4 flex-wrap">
            <div className="flex justify-center items-center gap-2 border-r-2 pr-2">
              {/* icon */}
              <Gmail />
              <p className="text-white font-roboto text-xs">
                craftedcanvascorner@gmail.com
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 border-r-2 pr-2">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone "
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="text-white font-roboto text-xs">+880 123456789</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-white font-roboto text-xs">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
          {/* social icons */}
          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <Facebook />
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <LinkedIn />
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <YouTube />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
