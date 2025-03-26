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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center underline mb-4">
            {login ? "Login" : "Create Account"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
          {login ? (
            <LoginForm toggleCreateAccount={toggleCreateAccount} />
          ) : (
            <CreateAccountForm toggleLogin={toggleLogin} />
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
