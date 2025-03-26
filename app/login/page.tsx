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
    <div className="flex justify-center p-4 h-fit max-h-[100%] overflow-y-auto">
      <div className="w-[400px] max-w-[100%] pl-2 sm:pl-0">
        <h2 className="text-center font-bold underline mb-4 sm:text-2xl">
          {isLogin ? "Login" : "Create Account"}
        </h2>
        <p className="text-sm border-b text-center mb-5">
          {isLogin
            ? "Choose how you'd like to login."
            : "Choose how you want to create your account."}
        </p>
        {isLogin ? (
          <LoginForm toggleCreateAccount={toggleCreateAccount} />
        ) : (
          <CreateAccountForm toggleLogin={toggleLogin} />
        )}
      </div>
    </div>
  );
}

export default Login;
