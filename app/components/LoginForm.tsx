"use client";

import OauthLoginForm from "./OauthLoginForm";
import { Button } from "@/components/ui/button";
import PasswordLoginForm from "./PasswordLoginForm";
import EmailLoginForm from "./EmailLoginForm";

function LoginForm({ toggleCreateAccount }: { toggleCreateAccount: Function }) {
  return (
    <>
      <PasswordLoginForm />
      <EmailLoginForm />
      <p className="text-sm text-muted-foreground justify-self-start text-left">
        Login with Social Account.
      </p>
      <OauthLoginForm />
      <Button
        className="block justify-self-center mt-4  bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none"
        onClick={() => toggleCreateAccount()}
      >
        New to FreeCreate? Create an account.
      </Button>
    </>
  );
}

export default LoginForm;
