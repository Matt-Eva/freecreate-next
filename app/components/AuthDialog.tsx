"use client";

import { useState } from "react";

import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";

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

  return <div></div>;
}

export default AuthDialog;
