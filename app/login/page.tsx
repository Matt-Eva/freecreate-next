"use client";

import { useState } from "react";

import CreateAccountForm from "../components/CreateAccountForm";
import LoginForm from "../components/LoginForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleCreateAccount = () => {
    setIsLogin(false);
  };

  const toggleLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <LoginForm toggleCreateAccount={toggleCreateAccount} />
      ) : (
        <CreateAccountForm toggleLogin={toggleLogin} />
      )}
    </>
  );
}

export default Login;
