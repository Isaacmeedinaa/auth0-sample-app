import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();

        console.log(token);
      } catch (err) {
        console.error(err);
      }
    };

    getToken();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>ExternalApi.js</h1>
    </div>
  );
};

export default ExternalApi;
