import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import { authContext } from "../../context/authContext";
import { useRouter } from "next/router";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children }) => {
  const { state, dispatch } = useContext(authContext);
  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <>
      <div className="flex justify-between text-white">
        <Sidebar />
        <div className="h-screen flex-1 overflow-y-auto relative">
          <DashboardHeader />
          <div className="flex flex-col justify-center items-center p-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
