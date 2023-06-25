import styles from "../../styles/Sidebar.module.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <aside>
      <div className={styles.sidebar}>
        <div className={`${styles.sidebarTop} text-color_white text-2xl`}>
          <h2>Admin</h2> <h2>Dashboard</h2>
        </div>
        <div
          className={`${styles.sidebarBottom} text-color_white py-10 px-4 text-2xl flex flex-col gap-y-4`}
        >
          <button
            onClick={() => router.push("/dashboard/document")}
            className="flex items-center gap-x-2 w-fit"
          >
            <HiOutlineBuildingOffice />
            <h2>Department</h2>
          </button>
          <button
            onClick={() => router.push("/dashboard/notice/upload")}
            className="flex items-center gap-x-2 w-fit"
          >
            <HiOutlineClipboardList />
            <h2>Notice</h2>
          </button>
          <button className="flex items-center gap-x-2 w-fit">
            <SiKnowledgebase />
            <h2>Knowledge</h2>
          </button>
          <button
            onClick={() => router.push("/dashboard/policy")}
            className="flex items-center gap-x-2 w-fit"
          >
            <MdOutlinePolicy />
            <h2>Polices</h2>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-x-2 w-fit"
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
