import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import DepartmentList from "../../../components/common/DepartmentList";
import UploadForm from "../../../components/common/UploadForm";
import { MdLaptopMac, MdAccountBalance, MdLocalFlorist } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { TbPackageExport, TbPigMoney } from "react-icons/tb";
import { SiUblockorigin, SiHelpscout } from "react-icons/si";
import UploadKnowledge from "../../../components/common/UploadKnowledge";

const departments = [
  { name: "sap", logo: <MdLocalFlorist /> },
  // { name: "abap", logo: <MdLaptopMac /> },
  // { name: "fico", logo: <RiAdminFill /> },
  // { name: "pm", logo: <MdAccountBalance /> },
  // { name: "hcm", logo: <TbPigMoney /> },
  // { name: "sd", logo: <TbPackageExport /> },
  // { name: "mm", logo: <SiUblockorigin /> },
];

const KnowledgeDashboard = () => {
  const [status, setStatus] = useState("loading");
  const [department, setDepartment] = useState("sap");
  const [subDepartment, setSubDepartment] = useState("");
  const [title, setTitle] = useState("");
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
    <DashboardLayout>
      <div className="p-10 max-w-[1250px] w-full h-full backdrop-blur-md rounded-md border-l-3 border-r-3 border-color_pink">
        <div className="text-white font-semibold text-3xl mb-3">Knowledge</div>
        <div className="flex flex-col h-full justify-around">
          <DepartmentList
            departments={departments}
            setDepartment={setDepartment}
            setSubDepartment={setSubDepartment}
            department={department}
          />
          <UploadKnowledge
            url="/knowledge/upload-knowledge-pdf"
            formData={formData}
            setFormData={setFormData}
            department={department} 
            // setDepartment={setDepartment}
            title={title}
            setTitle={setTitle} 
            loading={loading}
            setLoading={setLoading}
            video={true}
            subDepartment={subDepartment}
            setSubDepartment={setSubDepartment}
            
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

KnowledgeDashboard.auth = {
  adminOnly: true,
};

export default KnowledgeDashboard;
