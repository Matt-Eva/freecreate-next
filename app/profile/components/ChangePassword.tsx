"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Button } from "@/components/ui/button";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const formSchema = z
    .object({
      password: z.string(),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "passwords do not match",
      path: ["passwordConfirmation"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">ChangePassword</h3>
      <Form {...form}>
        <form
          className="space-y-2 space-x-2"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter new password</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      placeholder="new password"
                      type={showPassword ? "text" : "password"}
                      {...field}
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm new password</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      placeholder="confirm password"
                      type={showPasswordConfirmation ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <Button
                    onClick={() => {
                      setShowPasswordConfirmation(!showPasswordConfirmation);
                    }}
                    type="button"
                    className="ml-1 h-[80%] self-center rounded-xl"
                  >
                    {showPasswordConfirmation ? (
                      <EyeClosedIcon />
                    ) : (
                      <EyeOpenIcon />
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ChangePassword;
