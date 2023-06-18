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
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex-1 pr-5">
          <DashboardHeader />
          <div className="flex flex-col justify-center items-center pl-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
