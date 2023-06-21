import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import DashboardHeader from "./DashboardHeader";
import { baseUrl, getHeaders } from "../../api/api";
import axios from "axios";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState("hello");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/users/get-logged-in-user`,
          {
            withCredentials: true,
            credentials: "include",
            headers: getHeaders(),
          }
        );
        setLoading(false);
        setUser(data.data);
      } catch (error) {
        setError()
        // router.push("/login");
      }
    };
    callApi();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between text-white">
          <Sidebar />
          <div className="h-screen overflow-y-auto flex-1 relative">
            <DashboardHeader />
            <div className="p-5 flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
