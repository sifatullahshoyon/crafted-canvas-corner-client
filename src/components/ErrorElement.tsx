import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/not-found/not-found.png";
import { Button } from "./ui/button";
import Container from "./shared/Container";

const ErrorElement = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            src={errorImg ? errorImg : status}
            alt="404 page not found img"
            className="object-cover"
          />
          <p className="mt-10 mb-5 text-center text-balance text-[#EF6291] font-roboto font-bold text-xl">
            {error?.message ? error?.message : "Page Not Found"}
          </p>
          <Link to="/">
            <Button className="bg-[#1A1A1A]">Back to Home Page</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ErrorElement;
