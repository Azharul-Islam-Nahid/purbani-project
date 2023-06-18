import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout";
import { authContext } from "../../context/authContext";
import DashboardLayout from "../../components/common/DashboardLayout";

const Dashboard = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <Layout title="Dashboard">
      <DashboardLayout>
        {/* <div>
          <DashboardOptions />
          <div className="text-white text-center pt-6 text-xl capitalize">
            {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
          </div>
        </div> */}
      </DashboardLayout>
    </Layout>
  );
};

export default Dashboard;
