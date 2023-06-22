import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import { useSession } from "next-auth/react";

const DashboardLayout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex justify-between text-white">
        <Sidebar session={session} />
        <div className="h-screen overflow-y-auto flex-1 relative">
          <DashboardHeader session={session} />
          <div className="p-5 flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
