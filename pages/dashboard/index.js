import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { authContext } from "../../context/authContext";
import DashboardOptions from "../../components/lists/dashboardOptions";
import SideNavbar from "../../components/common/sideNavbar";

const Dashboard = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {
    !state.user && router.push("./");
  }, [state.user, router]);

  return (
    <div className="flex flex-row justify-center items-center gap-6 ">
      <SideNavbar />

      <div>
        <DashboardOptions />

        <div className="text-white text-center pt-6 text-xl capitalize">
          {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
