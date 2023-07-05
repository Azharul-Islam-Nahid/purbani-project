import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import UploadForm from "../../../components/common/UploadForm";

const Notice = () => {
  const [status, setStatus] = useState("loading");
  const [formData, setFormData] = useState({});
  const [department, setDepartment] = useState("notice");
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
      <div className="p-10 max-w-[1250px] mt-[100px] w-full h-[55vh] backdrop-blur-md border-l-3 border-r-3 border-color_pink rounded-md">
        <div className="text-white font-semibold text-3xl">
          Notice
        </div>
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
