import styles from "../../styles/Sidebar.module.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.sidebar}>
        <div className={`${styles.sidebarTop} text-color_white text-2xl`}>
          <h2>Admin</h2> <h2>Dashboard</h2>
        </div>
        <div
          className={`${styles.sidebarBottom} text-color_white p-4 text-3xl flex flex-col gap-y-4`}
        >
          <div className="flex items-center gap-x-2">
            <HiOutlineBuildingOffice />
            <h2>Department</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <HiOutlineClipboardList />
            <h2>Notice</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <SiKnowledgebase />
            <h2>Knowledge</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlinePolicy />
            <h2>Polices</h2>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
