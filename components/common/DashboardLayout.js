import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-between gap-x-6">
        <div>
          <Sidebar />
        </div>
        <div className="border flex-1 flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;