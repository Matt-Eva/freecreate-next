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

import styles from "./AuthDialog.module.css";

function AuthDialog(props: React.PropsWithChildren) {
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleLogin = () => {
    setLogin(true);
  };

  const toggleCreateAccount = () => {
    setLogin(false);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="justify-self-end sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:cursor-pointer"
      >
        {props.children}
      </DialogTrigger>
      <DialogContent className={`h-[90vh] max-h-[700px] ${styles.dialogGrid}`}>
        <DialogHeader className="mb-0 ">
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
          <LoginForm
            toggleCreateAccount={toggleCreateAccount}
            closeDialog={closeDialog}
          />
        ) : (
          <CreateAccountForm toggleLogin={toggleLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
