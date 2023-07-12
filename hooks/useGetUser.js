import { useEffect, useState } from "react";
import { baseUrl, getHeaders } from "../api/api";
import axios from "axios";

const UseGetUser = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: data } = await axios.get(
          `${baseUrl}/users/get-one-user`,
          {
            headers: getHeaders(),
          }
        );
        setIsLoading(false);
        setUser(data.data);
      } catch ({ response }) {
        setIsLoading(false);
        setError(response?.data?.message);
      }
    })();
  }, []);

  return { user, isLoading, error };
};

export default UseGetUser;
