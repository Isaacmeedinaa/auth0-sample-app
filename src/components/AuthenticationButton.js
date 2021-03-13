import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import LogoutButton from "./LogoutButton";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogoutButton />
  ) : (
    <div>
      <LoginButton /> <RegisterButton />
    </div>
  );
};

export default AuthenticationButton;
