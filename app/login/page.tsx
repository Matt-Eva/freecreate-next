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
    <div className="w-[100%] flex justify-center p-4">
      <div className="">
        <h2 className="text-center font-bold underline mb-4 sm:text-2xl">
          Login
        </h2>
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
