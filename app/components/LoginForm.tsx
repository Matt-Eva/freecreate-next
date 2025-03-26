"use client";

import OauthLoginForm from "./OauthLoginForm";
import { Button } from "@/components/ui/button";
import PasswordLoginForm from "./PasswordLoginForm";
import EmailLoginForm from "./EmailLoginForm";

function LoginForm({ toggleCreateAccount }: { toggleCreateAccount: Function }) {
  return (
    <div>
      <div className="">
        <PasswordLoginForm />
        <EmailLoginForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Login with Social Account.
        </p>
        <OauthLoginForm />
      </div>
      <Button
        className="block justify-self-center bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none mt-3"
        onClick={() => toggleCreateAccount()}
      >
        New to FreeCreate? Create an account.
      </Button>
    </div>
  );
}

export default LoginForm;
