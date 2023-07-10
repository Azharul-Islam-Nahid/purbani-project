import { FaDownload } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { baseUrl, getHeaders } from "../../api/api";
import axios from "axios";

const PageDetails = () => {
  const router = useRouter();
  const { pages } = router.query;
  const [policy, setPolicy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  let url = `/policy/get-all-policy?department`;
  if (
    pages === "certification" ||
    pages === "buyer" ||
    pages === "forms" ||
    pages === "agreements"
  ) {
    url = `/policy/get-all-policy?subDepartment`;
  } else if (pages === "law") {
    url = `/policy/get-all-policy?searchTerm`;
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    (async () => {
      try {
        const { data: data } = await axios.get(`${baseUrl}${url}=${pages}`, {
          headers: getHeaders(),
        });
        setLoading(false);
        setPolicy(data?.data?.data);
      } catch (error) {
        setLoading(false);
      }
    })();
    setUser(user);
  }, [pages, url]);

  if (loading) {
    return (
      <Layout title="Loading">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="flex justify-center relative">
            <div className="custom-loader"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={pages}>
      <div className="h-screen overflow-y-auto">
        <Navbar />
        {policy?.length && (
          <div className="w-full flex items-center justify-center pt-28">
            <div className="grid  grid-cols-1 bg-white rounded-lg w-[800px] py-20 px-10 h-full">
              {policy?.map((item, idx) => {
                return (
                  <div key={idx} className="flex justify-between flex-row mb-2">
                    <div className="text-lg font-bold px-4 flex gap-x-1 items-center">
                      {idx + 1}. {item.title}
                      <AiFillFilePdf className="text-color_brand" />
                    </div>
                    <div className="flex gap-x-5">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item?.readableLink}
                        className="cursor-pointer text-2xl text-color_brand hover:text-color_dark transition-all duration-200"
                      >
                        <BsEye />
                      </a>
                      <a
                        className="text-2xl text-color_brand hover:text-color_dark transition-all duration-200"
                        href={item?.downloadableLink}
                      >
                        <FaDownload />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="text-white text-center pt-6 text-xl capitalize">
          {`${user?.name}, Welcome to Purbani Document Management System`}
        </div>
      </div>
    </Layout>
  );
};

PageDetails.auth = true;
export default PageDetails;
