import DashboardLayout from "../../../components/common/DashboardLayout";
import DepartmentList from "../../../components/common/DepartmentList";
import UploadForm from "../../../components/common/UploadForm";
import { useEffect, useState } from "react";
import {
  MdLaptopMac,
  MdAccountBalance,
  MdLocalPolice,
  MdOutlineAttachMoney,
  MdLocalFlorist,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { TbPackageExport, TbPigMoney } from "react-icons/tb";
import { SiUblockorigin, SiHelpscout } from "react-icons/si";
import { AiOutlineAudit } from "react-icons/ai";
import { FaPaperPlane, FaMoneyCheckAlt } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";

const departments = [
  { name: "sustainability", logo: <MdLocalFlorist /> },
  { name: "it", logo: <MdLaptopMac /> },
  { name: "hr", logo: <RiAdminFill /> },
  { name: "accounts", logo: <MdAccountBalance /> },
  { name: "procurement", logo: <TbPigMoney /> },
  { name: "export", logo: <TbPackageExport /> },
  { name: "legal", logo: <SiUblockorigin /> },
  { name: "internal audit", logo: <AiOutlineAudit /> },
  { name: "yarn sales", logo: <MdOutlineAttachMoney /> },
  { name: "co-ordination", logo: <SiHelpscout /> },
  { name: "foreign", logo: <FaPaperPlane /> },
  { name: "local", logo: <MdLocalPolice /> },
  { name: "apparel", logo: <GiLargeDress /> },
  { name: "admin", logo: <MdOutlineAdminPanelSettings /> },
  { name: "finance", logo: <FaMoneyCheckAlt /> },
];

const Department = () => {
  const [status, setStatus] = useState("loading");
  const [department, setDepartment] = useState("sustainability");
  const [title, setTitle] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Simulating an asynchronous process
    setTimeout(() => {
      setStatus("authenticated");
    }, 500);
  }, []);

  if (status !== "authenticated") {
    return (
      <DashboardLayout title="Document">
        <div className="w-full flex h-[80vh] flex-col justify-center items-center">
          <div className="flex justify-center relative">
            <div className="custom-loader"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Document">
      <div className="p-10 max-w-[1250px] w-full h-full backdrop-blur-md rounded-md border-l-3 border-r-3 border-color_pink">
        <div className="text-white font-semibold text-3xl mb-3">
          Department
        </div>
        <div className="flex flex-col h-full justify-around">
          <DepartmentList
            departments={departments}
            setDepartment={setDepartment}
            setSubDepartment={setSubDepartment}
          />
          <UploadForm
            url="/document/upload-document-pdf"
            formData={formData}
            setFormData={setFormData}
            department={department}
            setDepartment={setDepartment}
            title={title}
            setTitle={setTitle}
            subDepartment={subDepartment}
            setSubDepartment={setSubDepartment}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

Department.auth = {
  adminOnly: true,
};
export default Department;
