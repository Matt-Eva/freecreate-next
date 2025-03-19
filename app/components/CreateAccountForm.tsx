"use client";

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

function CreateAccountForm({ toggleLogin }: { toggleLogin: Function }) {
  const { googleLogin } = useAuth();
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "Password confirmation must be at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>email</FormLabel>
            <FormControl>
              <Input placeholder="email" {...field} />
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
            <FormControl>
              <Input placeholder="enter password" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="passwordConfirmation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>confirm password</FormLabel>
            <FormControl>
              <Input placeholder="enter password" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button>Sign up with email and password</Button>
      <Button>Sign up with email</Button>
      <Button onClick={() => googleLogin()}>Sign up with Google</Button>
      <Button
        className="bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none"
        onClick={() => toggleLogin()}
      >
        Already have an account? Login.
      </Button>
    </Form>
  );
}

export default CreateAccountForm;
