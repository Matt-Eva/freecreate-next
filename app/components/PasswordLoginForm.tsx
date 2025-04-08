import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

function PasswordLoginForm({ closeDialog }: { closeDialog: Function }) {
  const { passwordLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const error = await passwordLogin(values.email, values.password);

    if (error) {
      console.error(error);

      form.setError("email", {
        type: "server",
        message: "Invalid email or password",
      });

      form.setError("password", {
        type: "server",
        message: "Invalid email or password",
      });
    } else {
      form.reset();
      closeDialog();
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-2 mb-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormDescription className="justify-self-start">
          Login with your email and password.
        </FormDescription>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter email"
                  {...field}
                  className="text-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    placeholder="enter password"
                    {...field}
                    className="text-sm"
                    type={showPassword ? "text" : "password"}
                  />
                </FormControl>
                <Button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  type="button"
                  className="ml-1 h-[80%] self-center rounded-xl"
                >
                  {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="block justify-self-center w-50">
          Login with password
        </Button>
      </form>
    </Form>
  );
}

export default PasswordLoginForm;
