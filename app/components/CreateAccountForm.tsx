"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/AuthProvider";

import PasswordCreateAccountForm from "./PasswordCreateAccountForm";
import EmailCreateAccountForm from "./EmailCreateAccountForm";
import OauthCreateAccountForm from "./OauthCreateAccountForm";
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
  return (
    <>
      <PasswordCreateAccountForm />
      <EmailCreateAccountForm />
      <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
        Create a new account with a social account.
      </p>
      <OauthCreateAccountForm />
      <Button
        className="bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none"
        onClick={() => toggleLogin()}
      >
        Already have an account? Login.
      </Button>
    </>
  );
}

export default CreateAccountForm;
