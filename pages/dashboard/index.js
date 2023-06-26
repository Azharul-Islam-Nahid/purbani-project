import Layout from "../../components/common/Layout";
import DashboardLayout from "../../components/common/DashboardLayout";
import styles from "../../styles/DashboardIndex.module.css";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  return (
    <Layout title="Dashboard">
      <DashboardLayout>
        <>
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
          <div
            className={`${styles.dashboardOptions} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center my-5 mx-auto`}
          >
            <div
              onClick={() => router.push("/dashboard/document")}
              className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
            >
              <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                1
              </div>
              <div className="text-xl font-semibold h-full flex justify-center items-center">
                Department
              </div>
            </div>
            <div
              onClick={() => router.push("/dashboard/notice")}
              className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
            >
              <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                2
              </div>
              <div className="text-xl font-semibold h-full flex justify-center items-center">
                Notices
              </div>
            </div>
            <div
              onClick={() => router.push("/dashboard/policy")}
              className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
            >
              <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                3
              </div>
              <div className="text-xl font-semibold h-full flex justify-center items-center">
                Policies
              </div>
            </div>
            <div
              className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
            >
              <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
                4
              </div>
              <div className="text-xl font-semibold h-full flex justify-center items-center">
                Knowledge
              </div>
            </div>
          </div>
        </>
      </DashboardLayout>
    </Layout>
  );
};

Dashboard.auth = {
  adminOnly: true,
};
export default Dashboard;
