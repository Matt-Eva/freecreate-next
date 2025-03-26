"use client";

import PasswordCreateAccountForm from "./PasswordCreateAccountForm";
import EmailCreateAccountForm from "./EmailCreateAccountForm";
import OauthCreateAccountForm from "./OauthCreateAccountForm";
import { Button } from "@/components/ui/button";

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
