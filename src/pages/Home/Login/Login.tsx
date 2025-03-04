import Container from "@/components/shared/Container";
import img from "../../../assets/images/auth/auth.jpg";
import { Card } from "@/components/ui/card";
import LoginCard from "@/components/shared/Card/LoginCard";
import HelmetAsync from "@/components/shared/HelmetAsync";

const Login = () => {
  return (
    <>
      <HelmetAsync title="Login"></HelmetAsync>
      {/* End Page Title */}
      <Container>
        <div className="flex justify-center items-center h-screen  md:w-4/5 mx-auto my-5">
          <Card className="w-full shadow-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* img */}
              <>
                <img
                  src={img}
                  alt=""
                  className="overflow-hidden object-fill rounded h-full"
                />
              </>
              {/* login form */}
              <>
                <LoginCard />
              </>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Login;
