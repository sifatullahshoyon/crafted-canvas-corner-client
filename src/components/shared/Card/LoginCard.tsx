import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Divider from "../Divider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginCheckbox from "@/components/checkbox/LoginCheckbox";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

const LoginCard = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { error }] = useLoginMutation();

  console.error(error);

  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();

    // const user = verifyToken(res.token);

    dispatch(setUser({ user: res.data, token: res.token }));
  };

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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email" className="font-roboto">
                      Email
                    </Label>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Enter Your Email"
                        {...field}
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="password" className="font-roboto">
                      Password
                    </Label>
                    <FormControl>
                      <Input
                        id="password"
                        type="text"
                        placeholder="Enter Your Password"
                        {...field}
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5">
                <LoginCheckbox />
                <Link
                  to="/"
                  className="md:text-right text-xs pt-1 md:pt-0 font-roboto font-normal hover:text-[#EF6291] cursor-pointer underline"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full font-roboto bg-[#EF6291] hover:bg-[#EF6291] hover:text-[#1A1A1A]"
              >
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardContent>
          <Divider />
          <p className="font-roboto text-xs text-[#1A1A1A] text-center mt-2">
            Don't have an account? Please{" "}
            <Link to="/registration" className="text-[#EF6291] hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginCard;
