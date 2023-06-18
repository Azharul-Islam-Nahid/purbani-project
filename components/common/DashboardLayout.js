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
        <div className="h-screen overflow-y-auto flex-1 relative">
          <DashboardHeader />
          <div className="p-5 flex flex-col justify-center items-center">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
