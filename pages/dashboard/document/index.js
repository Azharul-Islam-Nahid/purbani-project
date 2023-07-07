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
import { AiFillFilePdf, AiOutlineAudit } from "react-icons/ai";
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
  const [allPdf, setAllPdf] = useState([]);



  useEffect(() => {
    // Simulating an asynchronous process
    setTimeout(() => {
      setStatus("authenticated");
    }, 500);
  }, []);

  useEffect(() => {

    fetch('http://localhost:5000/api/v1/document/get-all-document', {
      headers: {
        authorization: `${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAllPdf(data);

      })
  }, [])

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
            department = {department}
            setSubDepartment={setSubDepartment}
          />
          <div className="flex justify-between">
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
            <div>
              <div className="max-w-[500px] w-full flex flex-col items-center bg- rounded-lg shadow-lg py-10 border-b-3 border-t-3 bg-white border-color_pink mt-3">
                <div className="text-xl flex justify-start border-b w-full px-10 font-semibold text-color_pink uppercase text-left pb-1">
                  {department}
                </div>
                <div className="px-10 w-full ">
                  <div>

                    <div className="overflow-x-auto">
                      <table className="table w-full">
                        <thead>
                          <tr>
                            <th></th>
                            <th>PDF Name</th>
                            <th></th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {
                            allPdf?.map((list, i) => <tr
                              key={list._id}
                              value={pdf}
                              className="hover">
                              console.log(allPdf)
                              <th>{i + 1}</th>
                              <td>{ }</td>
                              <td>{ }</td>
                              <td><label onClick={() => handleDeletePdf()} className="btn btn-xs btn-error">delete</label></td>
                            </tr>)
                          } */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

Department.auth = {
  adminOnly: true,
};
export default Department;
