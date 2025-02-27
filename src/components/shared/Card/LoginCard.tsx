import LoginCheckbox from "@/components/checkbox/LoginCheckbox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Divider from "../Divider";

const LoginCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center shadow-none overflow-hidden rounded">
      <Card className="md:w-4/5 h-full mx-auto flex flex-col justify-center shadow-none overflow-hidden rounded border-none">
        <CardHeader>
          <CardTitle className="font-roboto text-[#1A1A1A] text-sm pb-2">
            Start your Journey
          </CardTitle>
          <CardDescription className="font-roboto text-[#1A1A1A] text-lg">
            Sign in to{" "}
            <span className="text-[#EF6291] font-bold">
              Crafted Canvas Corner
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="font-roboto">
                  Email
                </Label>
                <Input
                  id="email"
                  name="password"
                  placeholder="Enter Your Email"
                  className="font-roboto"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-roboto">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="font-roboto"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5">
                <LoginCheckbox />
                <Link
                  to="/"
                  className="md:text-right text-xs pt-1 md:pt-0 font-roboto font-normal hover:text-[#EF6291] cursor-pointer underline"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full font-roboto bg-[#EF6291] hover:bg-[#EF6291] hover:text-[#1A1A1A]">
            Sign In
          </Button>
        </CardFooter>
        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Divider />
          </div>
          <div className="flex flex-col space-y-1.5">
            <p className="font-roboto text-xs text-[#1A1A1A] text-center mt-2">
              Don't have an account? Please{" "}
              <Link
                to="/registration"
                className="text-[#EF6291] hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginCard;
