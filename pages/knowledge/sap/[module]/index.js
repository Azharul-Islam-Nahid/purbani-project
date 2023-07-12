import { useRouter } from "next/router";
import Layout from "../../../../components/common/Layout";
import Navbar from "../../../../components/common/navbar";
import { BsEye } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Video } from "cloudinary-react";
import { baseUrl, getHeaders } from "../../../../api/api";
import UseGetUser from "../../../../hooks/useGetUser";

const Index = () => {
  const router = useRouter();
  const { user, isLoading } = UseGetUser();
  const { module } = router.query;
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`/knowledge/get-all-knowledge?department=sap&category=${module}`);
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
  }, [url, module]);

  if (loading || isLoading) {
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

  if (
    !user ||
    (!user.isAdmin && !user?.knowledgeAccesses?.includes(module?.toLowerCase()))
  ) {
    router.push("/");
  }

  return (
    <>
      <Layout>
        <Navbar />
        <div className="p-5">
          <div className="rounded-md m-auto bg-white max-w-[1000px] h-[80vh] overflow-y-auto">
            {knowledge?.map((media, i) => (
              <div
                key={media?._id}
                className="w-full p-10 flex flex-col justify-center items-center"
              >
                <div className="flex gap-x-2 items-center mb-5">
                  <div className="text-lg font-bold">
                    {i + 1}. {media?.title}
                  </div>
                  <div>
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
                  {media?.videoLink && (
                    <Video
                      cloudName="dfhzvfeh4"
                      publicId={media?.cloudinaryVideoId}
                      controls
                      controlsList="nodownload"
                      quality="auto:eco"
                      style={{ width: "400px" }}
                    />
                  )}
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
