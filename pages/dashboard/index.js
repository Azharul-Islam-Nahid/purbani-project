import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/Navbar";
import { authContext } from "../../context/authContext";
import DashboardOptions from "../../components/lists/dashboardOptions";
import SideNavbar from "../../components/common/sideNavbar";
import Sidebar from "../../components/common/Sidebar";

const Dashboard = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <Layout title="Dashboard">
      {/* <Navbar /> */}
      <div className="flex flex-row justify-between items-center gap-6">
        {/* <SideNavbar /> */}
        <Sidebar />
        <div>
          <DashboardOptions />
          <div className="text-white text-center pt-6 text-xl capitalize">
            {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
