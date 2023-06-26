import DashboardLayout from "../../../components/common/DashboardLayout";
import DepartmentList from "../../../components/common/DepartmentList";
import UploadForm from "../../../components/common/UploadForm";
import { useState } from "react";
import { useRouter } from "next/router";
import { MdLaptopMac, MdAccountBalance, MdSavings } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";

const departments = [
  { name: "sustainability", logo: <ImEarth /> },
  { name: "it", logo: <MdLaptopMac /> },
  { name: "hr", logo: <RiAdminFill /> },
  { name: "accounts", logo: <MdAccountBalance /> },
  { name: "procurement", logo: <MdSavings /> },
  { name: "export", logo: <ImEarth /> },
  { name: "legal", logo: <RiAdminFill /> },
  { name: "internal audit", logo: <RiAdminFill /> },
  { name: "yarn sales", logo: <MdAccountBalance /> },
  { name: "co-ordination", logo: <RiAdminFill /> },
  { name: "foreign", logo: <RiAdminFill /> },
  { name: "local", logo: <RiAdminFill /> },
  { name: "apparel", logo: <RiAdminFill /> },
  { name: "admin", logo: <RiAdminFill /> },
  { name: "finance", logo: <MdAccountBalance /> },
  { name: "foreign", logo: <RiAdminFill /> },
];

const Department = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // initialize form fields
  });
  const [department, setDepartment] = useState("sustainability");
  const [title, setTitle] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-10 max-w-[1250px] w-full h-full backdrop-blur-md bg-gray-100/10 rounded-md">
        <div className="text-color_pink font-semibold text-3xl mb-3">
          Department
        </div>
        <div className="flex flex-col h-full justify-around">
          <DepartmentList
            departments={departments}
            setDepartment={setDepartment}
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
