import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Link, useNavigate } from "react-router-dom";
import Divider from "../Divider";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  photo: z.string().optional(),
  password: z.string(),
});

const RegistrationCard = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "user1",
      email: "user1@example.com",
      photo:
        "https://res.cloudinary.com/dowpaz8fo/image/upload/v1740032294/hello.png",
      password: "123456",
    },
  });

  const [register] = useRegisterMutation();
  const Navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in...");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        photo: data.photo,
        password: data.password,
      };

      register(userInfo);
      toast.success("Successfully registered in Crafted Canvas Corner.", {
        id: toastId,
      });
      Navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(
        "This Email Address is already registered. Please try to another account",
        { id: toastId }
      );
    }
  };

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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full items-center gap-4"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Your Name"
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Your Email"
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="photo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto">Photo URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Your Photo URL"
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-roboto">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter Your Password"
                        className="font-roboto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full font-roboto bg-[#EF6291] hover:bg-[#EF6291] hover:text-[#1A1A1A]"
              >
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>
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
