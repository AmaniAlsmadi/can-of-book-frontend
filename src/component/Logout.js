import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LogoutButton() {
  const {
      isAuthenticated,
      logout,
  } = useAuth0();

  return isAuthenticated && (
     <button className='button' onClick={() => {
          logout({ returnTo: window.location.origin });
      }}>Logout</button>
  );
}

