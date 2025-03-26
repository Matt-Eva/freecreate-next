"use client";

import PasswordCreateAccountForm from "./PasswordCreateAccountForm";
import EmailCreateAccountForm from "./EmailCreateAccountForm";
import OauthCreateAccountForm from "./OauthCreateAccountForm";
import { Button } from "@/components/ui/button";

function CreateAccountForm({ toggleLogin }: { toggleLogin: Function }) {
  return (
    <div>
      <div className="h-[70vh] max-h-[450px] overflow-y-auto">
        <PasswordCreateAccountForm />
        <EmailCreateAccountForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Create an account with a social account.
        </p>
        <OauthCreateAccountForm />
      </div>
      <Button
        className="justify-self-center block bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none mt-4 border-t rounded-none"
        onClick={() => toggleLogin()}
      >
        Already have an account? Login.
      </Button>
    </div>
  );
}

export default CreateAccountForm;
