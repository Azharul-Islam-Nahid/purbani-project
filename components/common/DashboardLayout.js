import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { useSession } from "next-auth/react";
import Layout from "./Layout";

const DashboardLayout = ({ title, children }) => {
  const { data: session } = useSession();

  return (
    <Layout title={title ? title + " - Dashboard" : "Dashboard"}>
      <div className="flex justify-between text-white">
        <Sidebar session={session} />
        <div className="h-screen overflow-y-auto flex-1 relative">
          <DashboardHeader session={session} />
          <div className="p-5 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
