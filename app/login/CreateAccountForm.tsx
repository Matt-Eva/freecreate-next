"use client";

import PasswordCreateAccountForm from "./PasswordCreateAccountForm";
import EmailCreateAccountForm from "./EmailCreateAccountForm";
import OauthCreateAccountForm from "./OauthCreateAccountForm";
import { Button } from "@/components/ui/button";

function CreateAccountForm({ toggleLogin }: { toggleLogin: Function }) {
  return (
    <div>
      <div className="h-[100%] max-h-[500px] overflow-y-auto">
        <PasswordCreateAccountForm />
        <EmailCreateAccountForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Create a new account with a social account.
        </p>
        <OauthCreateAccountForm />
      </div>
      <Button
        className="bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none justify-self-center block mt-3"
        onClick={() => toggleLogin()}
      >
        Already have an account? Login.
      </Button>
    </div>
  );
}

export default CreateAccountForm;
