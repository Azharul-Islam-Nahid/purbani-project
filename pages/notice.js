import { FaDownload } from "react-icons/fa";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { baseUrl, getHeaders } from "../api/api";
import axios from "axios";

const Notice = () => {
  const { data: session } = useSession();
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: data } = await axios.get(
          `${baseUrl}/notice/get-all-notice`,
          { headers: getHeaders() }
        );
        setLoading(false);
        console.log(data.data);
        setNotice(data.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);

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
    <Layout title="Notice">
      <div className="flex flex-col justify-between items-center h-screen overflow-y-auto">
        <Navbar />
        <div className="w-full flex items-center justify-center mt-10">
          <div className="grid grid-cols-3 gap-20">
            {notice.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col bg-black/50 rounded-lg w-[280px] pt-2 px-10 h-full"
                >
                  <div className="text-color_brand text-5xl font-bold py-2 ">
                    {idx + 1}
                  </div>
                  <div className="text-white text-xl font-bold pt-4 min-h-[130px]">
                    {item.title}
                  </div>
                  <div className="w-full inline-flex justify-end py-6">
                    <a
                      href={item?.downloadableLink}
                      className="text-2xl text-color_brand hover:text-white transition-all duration-200"
                    >
                      <FaDownload />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-white text-center pt-6 text-xl capitalize">
          {`${session?.user?.name}, Welcome to Purbani Document Mangement System`}
        </div>
      </div>
    </Layout>
  );
};

Notice.auth = true;
export default Notice;
