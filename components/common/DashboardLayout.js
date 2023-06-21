import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import DashboardHeader from "./DashboardHeader";
import { base64url } from "jose";
import { getHeaders } from "../../api/api";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callApi = async () => {
      try {
        const { data } = await axios.get(
          `${base64url}/users/get-logged-in-user`,
          {
            withCredentials: true,
            credentials: "include",
            headers: getHeaders(),
          }
        );
        // const { role } = data?.data;
        setLoading(false);
        setUser(data.data);
      } catch (error) {
        setLoading(false);
        router.push("/login");
      }
    };
    callApi();
  }, []);

  return (
    <>
      <div className="flex justify-between text-white">
        <Sidebar />
        <div className="h-screen overflow-y-auto flex-1 relative">
          <DashboardHeader />
          <div className="p-5 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
