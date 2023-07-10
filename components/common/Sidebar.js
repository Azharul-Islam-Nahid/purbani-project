import styles from "../../styles/Sidebar.module.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { AiOutlineLogout, AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
const routes = [
  {
    title: "Department",
    route: "/dashboard/document",
    Icon: <HiOutlineBuildingOffice />,
  },
  {
    title: "Notice",
    route: "/dashboard/notice",
    Icon: <HiOutlineClipboardList />,
  },
  {
    title: "Policy",
    route: "/dashboard/policy",
    Icon: <MdOutlinePolicy />,
  },
  {
    title: "Knowledge",
    route: "/dashboard/knowledge",
    Icon: <SiKnowledgebase />,
  },
  {
    title: "Create Account",
    route: "/dashboard/register",
    Icon: <AiOutlineUserAdd />,
  },
  {
    title: "All Employeers",
    route: "/dashboard/employee",
    Icon: <IoIosPeople />,
  },
];

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear("x-auth-token");
    localStorage.clear("user");
    router.reload();
    router.push("/");
  };

  return (
    <aside>
      <div className={styles.sidebar}>
        <div
          onClick={() => router.push("/dashboard")}
          className={`${styles.sidebarTop} text-color_white text-2xl cursor-pointer`}
        >
          <h2>Admin</h2> <h2>Dashboard</h2>
        </div>
        <div
          className={`${styles.sidebarBottom} text-color_white py-10 px-4 text-2xl flex flex-col gap-y-4`}
        >
          {routes.map(({ title, route, Icon }) => {
            return (
              <button
                key={title}
                onClick={() => router.push(route)}
                className="flex items-center gap-x-2 w-fit hover:translate-x-3 duration-200"
              >
                {Icon}
                <h2>{title}</h2>
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            className="flex items-center gap-x-2 w-fit hover:translate-x-3 duration-200"
          >
            <AiOutlineLogout />
            <h2>Logout</h2>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
