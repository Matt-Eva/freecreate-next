"use client";

import OauthLoginForm from "./OauthLoginForm";
import { Button } from "@/components/ui/button";
import PasswordLoginForm from "./PasswordLoginForm";
import EmailLoginForm from "./EmailLoginForm";

function LoginForm({ toggleCreateAccount }: { toggleCreateAccount: Function }) {
  return (
    <>
      <div className="h-fit max-h-[60vh] overflow-y-auto">
        <PasswordLoginForm />
        <EmailLoginForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Login with Social Account.
        </p>
        <OauthLoginForm />
      </div>
      <Button
        className="block justify-self-center  bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none max-w-[90%]"
        onClick={() => toggleCreateAccount()}
      >
        New to FreeCreate? Create an account.
      </Button>
    </>
  );
}

export default LoginForm;
