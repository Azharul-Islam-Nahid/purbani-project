import { useEffect, useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import DepartmentList from "../../../components/common/DepartmentList";
import UploadForm from "../../../components/common/UploadForm";
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
  { name: "commercial", logo: <FaMoneyCheckAlt /> },
  { name: "import & banking", logo: <FaMoneyCheckAlt /> },
];

const Department = () => {
  const [status, setStatus] = useState("loading");
  const [formData, setFormData] = useState({});
  const [department, setDepartment] = useState("sustainability");
  const [title, setTitle] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous process
    setTimeout(() => {
      setStatus("authenticated");
    }, 500);
  }, []);

  if (status !== "authenticated") {
    return (
      <DashboardLayout title="Document">
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
          <div className="flex justify-center relative">
            <div className="custom-loader"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-10 max-w-[1250px] w-full h-full backdrop-blur-md border-l-3 border-r-3 border-color_pink rounded-md">
        <div className="text-white font-semibold text-3xl mb-3">
          Policy
        </div>
        <div className="flex flex-col h-full justify-around">
          <DepartmentList
            departments={departments}
            setDepartment={setDepartment}
            department={department}
            setSubDepartment={setSubDepartment}
          />
          <UploadForm
            url="/policy/upload-policy-pdf"
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
