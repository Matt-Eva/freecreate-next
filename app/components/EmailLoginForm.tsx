import { useAuth } from "@/context/AuthProvider";

function EmailLoginForm() {
  const { emailLogin } = useAuth();

  return <form></form>;
}

export default EmailLoginForm;
