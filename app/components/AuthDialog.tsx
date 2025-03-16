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
import { CircleUserRound } from "lucide-react";

function AuthDialog() {
  const [login, setLogin] = useState(true);

  return (
    <Dialog>
      <DialogTrigger className="justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:text-underline text-muted-foreground transition ease-in-out duration-500 hover:text-black">
        <CircleUserRound
          className="text-muted-foreground hover:text-black transition ease-in-out duration-500"
          strokeWidth={1.5}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{login ? "Login" : "Create Account"}</DialogTitle>
          <DialogDescription>
            {login ? <LoginForm /> : <CreateAccountForm />}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
