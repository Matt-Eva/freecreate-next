"use client";

import OauthLoginForm from "./OauthLoginForm";
import PasswordLoginForm from "./PasswordLoginForm";
import EmailLoginForm from "./EmailLoginForm";
import { Button } from "@/components/ui/button";

function LoginForm({ toggleCreateAccount }: { toggleCreateAccount: Function }) {
  return (
    <div>
      <div className="max-h-500px overflow-y-auto">
        <PasswordLoginForm />
        <EmailLoginForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Login with a social account.
        </p>
        <OauthLoginForm />
      </div>
      <Button
        className="block justify-self-center bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none mt-3 border-t rounded-none"
        onClick={() => toggleCreateAccount()}
      >
        New here? Create an account.
      </Button>
    </div>
  );
}

export default LoginForm;
