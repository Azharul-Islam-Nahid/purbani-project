import { useRouter } from "next/router";
import styles from "../../../styles/knowledge.module.css";
import { useContext } from "react";
import Swal from "sweetalert2";
import Layout from "../../../components/common/Layout";
import Navbar from "../../../components/common/navbar";
import { authContext } from "../../../context/authContext";


const OptionCard = ({ number, title, user }) => {
  const router = useRouter();

  const handleButtonClick = (link) => {
    if (
      !user?.isAdmin &&
      !user?.knowledgeAccesses.includes(title.toLowerCase())
    ) {
      Swal.fire({
        icon: "error",
        title: title,
        text: "You are not authorized",
      });
    } else {
      router.push(link);
    }
  };

  return (
    <button
      className={`${styles.optionCard} max-w-[279px] h-[266px] w-full p-[20px] relative group hover:bg-color_brand duration-300 cursor-pointer`}
      onClick={() => handleButtonClick(`sap/${title.toLowerCase()}`)}
    >
      <div className="text-5xl absolute text-color_pink group-hover:text-color_white duration-300">
        {number}
      </div>
      <div className="text-xl font-semibold h-full flex justify-center items-center">
        {title}
      </div>
    </button>
  );
};

const KnowledgeMedia = () => {
  const { state } = useContext(authContext);

  if (!state.user) {
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
    <Layout title="knowledge">
      <div className="flex flex-col items-center h-screen overflow-y-auto">
        <Navbar />
        <div
          className={`${styles.dashboardOptions} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 justify-items-center items-center my-5 mx-auto`}
        >
          <OptionCard number={1} title="BASIS" user={state.user} />
          <OptionCard number={2} title="ABAP" user={state.user} />
          <OptionCard number={3} title="FICO" user={state.user} />
          <OptionCard number={4} title="PM" user={state.user} />
          <OptionCard number={5} title="HCM" user={state.user} />
          <OptionCard number={6} title="SD" user={state.user} />
          <OptionCard number={7} title="MM" user={state.user} />
        </div>
      </div>
    </Layout>
  );
};

KnowledgeMedia.auth = true;

export default KnowledgeMedia;
