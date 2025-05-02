import { useState } from "react";

import { useAuth } from "@/context/AuthProvider";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

function PasswordLoginForm({ closeDialog }: { closeDialog: Function }) {
  const { passwordLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return <form></form>;
}

export default PasswordLoginForm;
