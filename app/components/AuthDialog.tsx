"use client";

import { useState } from "react";

import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AuthDialog(props: React.PropsWithChildren) {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(true);
  };

  const toggleCreateAccount = () => {
    setLogin(false);
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="justify-self-end sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:cursor-pointer"
      >
        {props.children}
      </DialogTrigger>
      <DialogContent className="h-90% max-h-[700px]">
        <DialogHeader>
          <DialogTitle className="text-center underline">
            {login ? "Login" : "Create Account"}
          </DialogTitle>
          <DialogDescription className="border-b ">
            {login
              ? "Choose how you'd like to login."
              : "Choose how you want to create your account."}
          </DialogDescription>
        </DialogHeader>

        {login ? (
          <LoginForm toggleCreateAccount={toggleCreateAccount} />
        ) : (
          <CreateAccountForm toggleLogin={toggleLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
