import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";

function OauthLoginForm() {
  const { googleLogin } = useAuth();
  return (
    <div>
      <Button
        onClick={() => googleLogin()}
        className="block justify-self-center m-1 w-50"
      >
        Login with Google
      </Button>
    </div>
  );
}

export default OauthLoginForm;
