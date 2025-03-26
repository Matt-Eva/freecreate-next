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

function EmailLoginForm() {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-2 mb-8">
        <FormDescription className="justify-self-start">
          Login with an email magic link.
        </FormDescription>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="enter email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="block justify-self-center w-50">
          Login with email link
        </Button>
      </form>
    </Form>
  );
}

export default EmailLoginForm;
