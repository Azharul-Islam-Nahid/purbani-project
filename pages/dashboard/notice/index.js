import React, { useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import UploadForm from "../../../components/common/UploadForm";

const Notice = () => {
  const [formData, setFormData] = useState({
    // initialize form fields
  });
  const [department, setDepartment] = useState("notice");
  const [title, setTitle] = useState("");
  const [subDepartment, setSubDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-10 max-w-[1250px] mt-[100px] w-full h-[55vh] backdrop-blur-md bg-gray-100/10 rounded-md">
        {/* <div className="text-color_pink font-semibold text-3xl mb-3">
          Notice
        </div> */}
        <div className="flex flex-col h-full justify-around">
          <UploadForm
            url="/notice/upload-notice-pdf"
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

export default Notice;
