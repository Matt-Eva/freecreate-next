"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createClient } from "@/utils/supabase/client";

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

  const supabase = createClient();

  const formSchema = z
    .object({
      password: z.string().min(6, { message: "required" }),
      passwordConfirmation: z.string().min(6),
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

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const newPassword = values.password;
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      alert("password successfully updated!");
    }

    form.reset();
  };

  return (
    <div className="w-[100%]">
      <h3 className="text-lg font-bold mb-2">ChangePassword</h3>
      <Form {...form}>
        <form
          className="space-y-2 space-x-2 max-w-[500px]"
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
                <FormMessage />
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
