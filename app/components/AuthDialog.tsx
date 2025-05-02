"use client";

import { useState, useRef } from "react";

import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";

import styles from "./AuthDialog.module.css";

function AuthDialog(props: React.PropsWithChildren) {
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  const toggleLogin = () => {
    setLogin(true);
  };

  const toggleCreateAccount = () => {
    setLogin(false);
  };

  const openDialog = () => {
    const dialog = dialogRef.current! as HTMLDialogElement;
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = dialogRef.current! as HTMLDialogElement;
    dialog.close();
  };

  return (
    <div>
      <button onClick={openDialog}>login</button>
      <dialog ref={dialogRef}>
        <button onClick={closeDialog}>close</button>
        <form>
          <label>username</label>
          <input type="text" />
          <input type="submit" />
        </form>
      </dialog>
    </div>
  );
}

export default AuthDialog;
