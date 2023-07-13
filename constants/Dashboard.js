import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiKnowledgebase } from "react-icons/si";
import { MdOutlinePolicy } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

export const dashboardRoutes = [
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
    title: "Register",
    route: "/dashboard/register",
    Icon: <AiOutlineUserAdd />,
  },
  {
    title: "Employees",
    route: "/dashboard/employee",
    Icon: <IoIosPeople />,
  },
];

export const countWizards = [
  { title: "total department" },
  { title: "total document" },
  { title: "total policies" },
  { title: "total notices" },
  { title: "total knowledge" },
];
