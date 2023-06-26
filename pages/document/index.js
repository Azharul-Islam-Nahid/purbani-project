import React from "react";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/navbar";
import { MdLaptopMac, MdAccountBalance, MdSavings } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { useRouter } from "next/router";

const departments = [
  {
    name: "sustainability",
    url: "/document/sustainabilityMenu",
    logo: <ImEarth />,
  },
  { name: "it", url: "/document/it", logo: <MdLaptopMac /> },
  { name: "hr", url: "/document/hr", logo: <RiAdminFill /> },
  { name: "accounts", url: "/document/accounts", logo: <MdAccountBalance /> },
  { name: "procurement", url: "/document/procurement", logo: <MdSavings /> },
  { name: "export", url: "/document/export", logo: <ImEarth /> },
  { name: "legal", url: "/document/legal", logo: <RiAdminFill /> },
  {
    name: "internal audit",
    url: "/document/internal audit",
    logo: <RiAdminFill />,
  },
  {
    name: "yarn sales",
    url: "/document/yarn sales",
    logo: <MdAccountBalance />,
  },
  {
    name: "co-ordination",
    url: "/document/co-ordination",
    logo: <RiAdminFill />,
  },
  { name: "foreign", url: "/document/foreign", logo: <RiAdminFill /> },
  { name: "local", url: "/document/local", logo: <RiAdminFill /> },
  { name: "apparel", url: "/document/apparel", logo: <RiAdminFill /> },
  { name: "admin", url: "/document/admin", logo: <RiAdminFill /> },
  { name: "finance", url: "/document/finance", logo: <MdAccountBalance /> },
  { name: "foreign", url: "/document/foreign", logo: <RiAdminFill /> },
];

const Document = () => {
  const router = useRouter();

  return (
    <Layout>
      <Navbar />
      <div className="max-w-[800px] h-[80vh] w-full mx-auto flex flex-col justify-center">
        <div className="p-6 backdrop-blur-md bg-gray-100/10 rounded-3xl">
          <div className="text-3xl text-color_pink text-center mb-5 font-semibold">
            Documents
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {departments.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => router.push(item.url)}
                  className="flex gap-x-5 items-center justify-between text-black shadow-lg py-2 px-5 border bg-white mb-2 rounded-md"
                >
                  <div className="font-bold text-xl capitalize text-color_secondary">
                    {item.name}
                  </div>
                  <div className="text-3xl text-color_secondary">
                    {item.logo}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Document.auth = true;

export default Document;
