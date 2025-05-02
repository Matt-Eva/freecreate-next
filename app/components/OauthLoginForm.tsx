import { useAuth } from "@/context/AuthProvider";

function OauthLoginForm() {
  const { googleLogin } = useAuth();
  return (
    <div>
      <button
        onClick={() => googleLogin()}
        className="block justify-self-center m-1 w-50"
      >
        Login with Google
      </button>
    </div>
  );
}

export default OauthLoginForm;
