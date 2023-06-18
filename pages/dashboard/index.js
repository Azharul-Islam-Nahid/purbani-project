import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout";
import { authContext } from "../../context/authContext";
import DashboardLayout from "../../components/common/DashboardLayout";
import styles from "../../styles/DashboardIndex.module.css";

const Dashboard = () => {
  const { state, dispatch } = useContext(authContext);

  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <Layout title="Dashboard">
      <DashboardLayout>
        <div className={`${styles.dashboardWizard}`}>
          <div>
            <div className="text-3xl font-semibold">5</div>
            <div>Total Department</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">37</div>
            <div>Total Document</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">5</div>
            <div>Total Policies</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">3</div>
            <div>Total Notices</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">13</div>
            <div>Total Knowledge</div>
          </div>
        </div>
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
