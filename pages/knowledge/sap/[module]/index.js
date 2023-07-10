import { useRouter } from "next/router";
import Layout from "../../../../components/common/Layout";
import Navbar from "../../../../components/common/navbar";
import { BsEye } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getHeaders } from "../../../../api/api";

const Index = () => {
  const router = useRouter();
  const { module } = router.query;
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  let url = ``;
  if (
    module === "basis" ||
    module === "abap" ||
    module === "fico" ||
    module === "hcm" ||
    module === "sd" ||
    module === "mm" ||
    module === "pm"
  ) {
    url = `/knowledge/get-all-knowledge?department=sap&category=${module}`;
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    (async () => {
      try {
        const { data: data } = await axios.get(`${baseUrl}${url}`, {
          headers: getHeaders(),
        });
        setLoading(false);
        setKnowledge(data?.data?.data);
      } catch (error) {
        setLoading(false);
      }
    })();
    setUser(user);
  }, [module, url]);

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
    <>
      <Layout>
        <Navbar />
        <div className="m-auto pt-20">
          <div className="border rounded-md m-auto bg-white w-8/12 h-96 overflow-y-scroll">
            {knowledge?.map((media) => (
              <div
                key={media?._id}
                className="mt-5 mb-5 mr-20 ml-40 flex flex-col"
              >
                <div className="flex justify-between flex-row">
                  <div className="text-lg font-bold px-4 flex gap-x-1 items-center">
                    {media?.title}
                  </div>
                  <div className="flex gap-x-5">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={media?.pdfLink}
                      className="cursor-pointer text-2xl text-color_brand hover:text-color_dark transition-all duration-200"
                    >
                      <BsEye />
                    </a>
                  </div>
                </div>
                <div>
                  <video
                    controls
                    src={media?.videoLink}
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

Index.auth = true;

export default Index;
