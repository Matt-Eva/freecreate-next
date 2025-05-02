import { useAuth } from "@/context/AuthProvider";

function OauthCreateAccountForm() {
  const { googleLogin } = useAuth();
  return (
    <div>
      <button
        onClick={() => googleLogin()}
        className="block justify-self-center m-1 w-50"
      >
        Sign up with Google
      </button>
    </div>
  );
}

export default OauthCreateAccountForm;
