"use client";

import Link from "next/link";
import OauthLoginForm from "./OauthLoginForm";
import PasswordLoginForm from "./PasswordLoginForm";
import EmailLoginForm from "./EmailLoginForm";
import { Button } from "@/components/ui/button";

import styles from "./LoginForm.module.css";

function LoginForm({
  toggleCreateAccount,
  closeDialog,
}: {
  toggleCreateAccount: Function;
  closeDialog: Function;
}) {
  return (
    <div className={`${styles.formGrid}`}>
      <div className="overflow-y-auto">
        <PasswordLoginForm closeDialog={closeDialog} />
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
      <Link
        href="/"
        className="text-center justify-self-center  text-sm font-medium underline border-t w-[228px] p-1"
      >
        Forgot password?
      </Link>
    </div>
  );
}

export default LoginForm;
