import { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import { authContext } from "../../context/authContext";
import { useRouter } from "next/router";

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
        <div className="flex-1">
          <div>header</div>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
