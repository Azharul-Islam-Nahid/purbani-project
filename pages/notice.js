
import { Notices } from "../constants/notice";
import { FaDownload } from "react-icons/fa";
import Layout from "../components/common/Layout";
import Navbar from "../components/common/navbar";
import { useSession } from "next-auth/react";

const Notice = () => {
  const { data: session } = useSession();

  return (
    <Layout title="Notice">
      <Navbar />
      <div>
        <div className="w-full flex items-center justify-center pt-28">
          <div className="grid grid-cols-3 gap-20">
            {Notices.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col bg-black/50 rounded-lg w-[280px] pt-2 px-10 h-full"
                >
                  <div className="text-color_brand text-5xl font-bold py-2 ">
                    {idx + 1}
                  </div>
                  <div className="text-white text-xl font-bold pt-4 min-h-[130px]">
                    {item.notice}
                  </div>
                  <div className="w-full inline-flex justify-end py-6">
                    <a
                      href={`${item.link}`}
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
