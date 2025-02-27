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

const RegistrationCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center shadow-none overflow-hidden rounded">
      <Card className="md:w-4/5 h-full mx-auto flex flex-col justify-center shadow-none overflow-hidden rounded border-none">
        <CardHeader>
          <CardTitle className="font-roboto text-[#1A1A1A] text-sm pb-2">
            Start your Journey
          </CardTitle>
          <CardDescription className="font-roboto text-[#1A1A1A] text-lg">
            Sign up to{" "}
            <span className="text-[#EF6291] font-bold">
              Crafted Canvas Corner
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* start name field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-roboto">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="font-roboto"
                  required
                />
              </div>
              {/* End name field */}

              {/* start email field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="font-roboto">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="font-roboto"
                  required
                />
              </div>
              {/* End email field */}

              {/* start email field */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="font-roboto">
                  Photo Url
                </Label>
                <Input
                  id="photo"
                  name="photo"
                  placeholder="Enter Your Photo Url"
                  className="font-roboto"
                />
              </div>
              {/* End email field */}

              {/* start password field */}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="font-roboto">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="font-roboto"
                  required
                />
              </div>
              {/* End password field */}
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
              Already have an account? Please{" "}
              <Link to="/login" className="text-[#EF6291] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationCard;
