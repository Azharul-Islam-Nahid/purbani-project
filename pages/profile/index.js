import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { authContext } from "../../context/authContext";
import { GET } from "../../api/api";

import SideNavbar from "../../components/common/sideNavbar";
import YourProfile from "../../components/lists/profileList";
import Layout from "../../components/common/Layout";
import Navbar from "../../components/common/Navbar";

const Files = () => {
  const { state, dispatch } = useContext(authContext);
  const router = useRouter();

  // useEffect(() => {
  //   !state.user && router.push("./");
  // }, [state.user, router]);

  return (
    <Layout title="Profile">
      <Navbar />
      <div className="flex flex-row justify-center items-center gap-6 ">
        <SideNavbar />

        <div>
          <YourProfile />

          <div className="text-white text-center pt-6 text-xl capitalize">
            {`${state.user?.name}, Welcome to Purbani Document Mangement System`}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Files;
