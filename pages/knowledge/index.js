import styles from "../../styles/knowledge.module.css";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/navbar";
import { useRouter } from "next/router";

const Knowledge = () => {
  const router = useRouter();

  return (
    <Layout title={"Knowledge"}>
      <div className="flex flex-col items-center h-screen overflow-y-auto">
        <Navbar />
        <div className="w-full flex items-center justify-center mt-10">
          <div
            onClick={() => router.push("/knowledge/sap")}
            className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
          >
            <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
              1
            </div>
            <div className="text-xl font-semibold h-full flex justify-center items-center">
              SAP
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Knowledge.auth = true;
export default Knowledge;
