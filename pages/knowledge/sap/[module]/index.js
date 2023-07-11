import { useRouter } from "next/router";
import Layout from "../../../../components/common/Layout";
import Navbar from "../../../../components/common/navbar";
import { BsEye } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Video } from "cloudinary-react";
import { baseUrl, getHeaders } from "../../../../api/api";

const Index = () => {
  const router = useRouter();
  const { module } = router.query;
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`/knowledge/get-all-knowledge?department=sap&category=${module}`);
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [module]);

  useEffect(() => {
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
  }, [url]);

  if (loading || !user) {
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

  // if (!user) {
  //   router.push("/unauthorized");
  // } else {
  //   if (!user.isAdmin) {
  //     if (!user?.knowledgeAccesses?.includes(module?.toLowerCase())) {
  //       router.push("/unauthorized");
  //     }
  //   }
  // }
  if (
    !user ||
    (!user.isAdmin && !user?.knowledgeAccesses?.includes(module?.toLowerCase()))
  ) {
    router.push("/unauthorized");
  }

  return (
    <>
      <Layout>
        <Navbar />
        <div className="p-5">
          <div className="rounded-md m-auto bg-white max-w-[1100px] w-full h-[80vh] overflow-y-auto">
            {knowledge?.map((media, i) => (
              <div
                key={media?._id}
                className="flex w-full p-10 justify-center items-center"
              >
                <div className="flex-1 flex items-center">
                  <div className="text-lg font-bold px-4">
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
                <div className="flex-1">
                  {media?.videoLink && (
                    <Video
                      cloudName="dqlxcdlce"
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
