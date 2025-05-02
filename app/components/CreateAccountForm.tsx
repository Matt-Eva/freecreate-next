"use client";

import PasswordCreateAccountForm from "./PasswordCreateAccountForm";
import EmailCreateAccountForm from "./EmailCreateAccountForm";
import OauthCreateAccountForm from "./OauthCreateAccountForm";
import styles from "./CreateAccountForm.module.css";

function CreateAccountForm({ toggleLogin }: { toggleLogin: Function }) {
  return (
    <div className={`${styles.formGrid}`}>
      <div className="overflow-y-auto">
        <PasswordCreateAccountForm />
        <EmailCreateAccountForm />
        <p className="text-sm text-muted-foreground justify-self-start text-left mb-2">
          Create an account with a social account.
        </p>
        <OauthCreateAccountForm />
      </div>
      <button
        className="justify-self-center block bg-white text-black underline hover:bg-white hover:cursor-pointer shadow-none mt-4 border-t rounded-none"
        onClick={() => toggleLogin()}
      >
        Already have an account? Login.
      </button>
    </div>
  );
}

export default CreateAccountForm;
